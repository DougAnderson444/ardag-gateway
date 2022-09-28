import { initializeArDag } from '@douganderson444/ardag';
import Arweave from 'arweave';

let arweave;

export async function generateWallet(arweave) {
	let wallet: {
		address: string;
		jwk: JWKInterface;
	} = { address: '', jwk: undefined };

	wallet.jwk = await arweave.wallets.generate();
	wallet.address = await arweave.wallets.getAddress(wallet.jwk);
	wallet.getActiveAddress = () => wallet.address;

	return wallet;
}

export async function triggerFaucet(arweave, address) {
	await arweave.api.get(`/mint/${address}/1000000000000`);
}

export async function mine() {
	await arweave.api.get('mine');
}

const defaultLogger = { log: (s) => true };

export async function setupDev(opts = {}) {
	let post;
	let serverUrl: string = 'http://localhost:1984';

	// destructure serverUrl up into host, port, protocol
	let { host, port, protocol } = new URL(serverUrl);
	// remove colon and port from host
	host = host.replace(`:${port}`, '') || 'localhost';
	port = port || 443;
	protocol = protocol.replace(':', '');
	console.log({ host, port, protocol, Arweave });

	// Save this buffer as an Arweave Contract Transaction
	arweave =
		opts?.arweave ||
		Arweave.init({
			host,
			port,
			protocol,
			timeout: 20000,
			logging: false
		});

	let wallet = opts.wallet || (await generateWallet(arweave));

	let address = await wallet.getActiveAddress();

	console.log({ address });

	await triggerFaucet(arweave, address);
	await mine();

	// need to bind transactions.post to arweave.transactions as *this*
	const doPost = arweave.transactions.post;
	const p = doPost.bind(arweave.transactions);
	post = async (tx) => {
		try {
			const resp = await p(tx);
			await mine();
			logger.log(`Mined ${tx.id}`);
			return resp;
		} catch (error) {
			return false;
		}
	};

	const ardag = initializeArDag({ arweave, post });

	return { ardag, arweave };
}
