<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { ArDagGateway, Saver } from '@douganderson444/ardag-gateway';
	import Arweave from 'arweave';

	/** @type {import('./$types').PageData} */
	export let data;

	let owner = data.params.owner;
	let tag = data.params.tag;

	let arweave, ardag, dag;

	let serverUrl =
		process.env.NODE_ENV == 'development' ? 'http://localhost:1984' : 'https://arweave.net';

	onMount(async () => {
		const { initializeArDag } = await import('@douganderson444/ardag');

		if (!dag && !globalThis.dag) {
			const { createDagRepo } = await import('@douganderson444/ipld-car-txs');
			dag = await createDagRepo(); // make a barebones dag repo for fast loading
			globalThis.dag = dag;
		} else {
			dag = globalThis.dag;
		}

		// destructure serverUrl up into host, port, protocol
		let { host, port, protocol } = new URL(serverUrl);
		// remove colon and port from host
		host = host.replace(`:${port}`, '') || 'localhost';
		port = port || 443;
		protocol = protocol.replace(':', '');
		console.log({ host, port, protocol, Arweave });

		arweave = Arweave.init({
			host,
			port,
			protocol,
			timeout: 20000,
			logging: false
		});
		ardag = initializeArDag({ arweave });
	});
</script>

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<div class="flex flex-col p-2 h-full">
		{serverUrl}
		{#if owner && tag && ardag && dag}
			<ArDagGateway {ardag} {dag} {owner} {tag} let:tagNode let:data />
		{/if}
	</div>
</main>
