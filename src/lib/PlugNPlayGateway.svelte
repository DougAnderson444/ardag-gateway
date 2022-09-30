<script>
	// @ts-nocheck
	/**
	 * Detects reasonable defaults based on your environment and sets them accordingly.
	 *
	 */
	import { onMount } from 'svelte';
	import ArDagGateway from './ArDagGateway.svelte';

	export let owner;
	export let tag;
	export let serverUrl = 'https://arweave.net';

	let arweave, ardag, dag;

	onMount(async () => {
		if (!dag && !globalThis.dag) {
			const { createDagRepo } = await import('@douganderson444/ipld-car-txs');
			dag = await createDagRepo(); // make a barebones dag repo for fast loading
			globalThis.dag = dag;
		} else {
			dag = globalThis.dag;
		}
		serverUrl = location.hostname == 'localhost' ? 'http://localhost:1984' : serverUrl;

		// allow override of serverUrl
		// get search params from location
		const urlParams = new URLSearchParams(location.search);
		const arweaveServer = urlParams.get('arweaveServer');
		if (arweaveServer) serverUrl = arweaveServer;

		// destructure serverUrl up into host, port, protocol
		let { host, hostname, port, protocol } = new URL(serverUrl);
		// remove colon and port from host
		host = hostname || 'localhost';
		port = port || 443;
		protocol = protocol.replace(':', '');

		let Arweave = await import('./modules/arweave.js');
		if (Arweave.default) Arweave = Arweave.default; // workaround hack for esm vs cjs
		if (Arweave.default) Arweave = Arweave.default; // workaround hack for esm vs cjs

		arweave = Arweave.init({
			host,
			port,
			protocol,
			timeout: 20000,
			logging: false
		});

		console.log({ host, port, protocol, Arweave });

		const { initializeArDag } = await import('@douganderson444/ardag');
		ardag = initializeArDag({ arweave });
	});
</script>

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<div class="flex flex-col p-2 h-full">
		{#if owner && tag && ardag && dag}
			<ArDagGateway {ardag} {dag} {owner} {tag} on:change />
		{/if}
	</div>
</main>

<style lang="postcss">
</style>
