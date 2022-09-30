<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { ArDagGateway, OwnerLookup, Saver } from '@douganderson444/ardag-gateway';

	let ardag, wallet, arweave;
	let dag;

	let Web3WalletMenu;

	onMount(async () => {
		({ Web3WalletMenu } = await import('@peerpiper/web3-wallet-connector'));

		if (!dag && !globalThis.dag) {
			const { createDagRepo } = await import('@douganderson444/ipld-car-txs');
			dag = await createDagRepo({ persist: true });
			globalThis.dag = dag;
		} else {
			dag = globalThis.dag;
		}
	});

	async function walletReady() {
		const { setupDev } = await import('$lib/utils');

		({ ardag } = await setupDev({ wallet: wallet.arweaveWalletAPI }));
	}

	$: if (wallet) walletReady();
</script>

{#if Web3WalletMenu}
	<Web3WalletMenu on:walletReady={(e) => (wallet = e.detail.wallet)} />
{/if}

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<div class="flex flex-col p-2 h-full">
		<h1 class="text-xl font-semibold">Welcome to the ArDag Gateway</h1>
		<p>
			Loads Arweave RSA Public Key owner's es modules from ArDag, mounts them to the DOM. Saves any
			data back to wallet owner's ArDag.
		</p>
		<OwnerLookup {ardag} let:owner let:tag>
			{#if owner && tag}
				<!--
				`owner` is the DApp owner
				`tag` is the DApp name
				`data` is any data that the user enters into the DApp, so they can Save it themselves to their own Dag
			 -->
				<ArDagGateway
					{ardag}
					{dag}
					{owner}
					{tag}
					let:tagNode
					let:data
					on:change={(e) => console.log(e.detail)}
				>
					<Saver wallet={wallet.jwk} {tag} {ardag} {dag} {tagNode} {data} />
				</ArDagGateway>
			{/if}
		</OwnerLookup>
	</div>
</main>
