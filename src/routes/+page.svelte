<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Gateway } from '@douganderson444/svelte-component-gateway';
	import FillVertical from '@douganderson444/svelte-fillvert';

	export let owner;
	let ardag, wallet, arweave;
	let data, profile;
	let dag;
	let cont;

	onMount(async () => {
		const { setupDev } = await import('$lib/utils');
		console.log('Setting up dev env');
		({ ardag, wallet, arweave } = await setupDev());
		console.log('ardag', ardag);

		const { createDagRepo } = await import('@douganderson444/ipld-car-txs');

		if (!globalThis.dag) {
			dag = await createDagRepo(); // make a barebones dag repo for fast loading
			globalThis.dag = dag;
		} else {
			dag = globalThis.dag;
		}
	});

	$: if (dag && arweave && owner) getData();
	$: if (cont) {
		document.body.style.height = '100vh';
		cont.parentNode.style.height = '100%';
	}

	async function getData() {
		const rootCID = await ardag.load({ dagOwner: owner, dag });
		console.log({ rootCID });
		const path = `Profile/obj/compiled/value`;
		profile = (await dag.get(rootCID, { path })).value;

		console.log({ profile });
	}

	function handleChange(event) {
		console.log(`The data is now: `, event.detail);
	}
</script>

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<h1>Welcome to the ArDag Gateway</h1>
	<p>
		Loads Arweave RSA Public Key owner's es modules from ArDag, mounts them to the DOM. Saves any
		data back to wallet owner's ArDag.
	</p>

	ArDag owner (their base64 encoded Publickey)
	<input class="border p-2 rounded" type="text" bind:value={owner} disabled={!ardag} />
	<div class="h-fit">
		{owner}
	</div>
	{#if profile}
		<div bind:this={cont} class="flex flex-col">
			<Gateway
				esModule={profile}
				props={{
					profile: {
						firstName: 'Doug',
						lastName: 'Anderson'
					}
				}}
				on:change={handleChange}
			/>
		</div>
	{/if}
</main>
