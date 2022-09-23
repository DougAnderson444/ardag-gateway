<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { ArDagGateway } from '@douganderson444/ardag-gateway';

	let owner;
	let ardag, wallet, arweave;
	let dag;

	onMount(async () => {
		const { setupDev } = await import('$lib/utils');
		console.log('Setting up dev env');
		({ ardag, wallet, arweave } = await setupDev());
		console.log('ardag', ardag);
	});
</script>

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<div class="flex flex-col p-2">
		<h1 class="text-lg font-semibold">Welcome to the ArDag Gateway</h1>
		<p>
			Loads Arweave RSA Public Key owner's es modules from ArDag, mounts them to the DOM. Saves any
			data back to wallet owner's ArDag.
		</p>

		ArDag owner (their base64 encoded Publickey)
		<input class="border p-2 rounded m-8" type="text" bind:value={owner} disabled={!ardag} />
		<div class="flex-1 flex flex-col">
			{#if ardag && owner}
				<div class="flex-0 h-fit">
					{owner}
				</div>
				<div class="flex-1 h-ful">
					<ArDagGateway {ardag} {owner} />
				</div>
			{/if}
		</div>
	</div>
</main>
