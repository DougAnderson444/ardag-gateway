<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Gateway } from '@douganderson444/svelte-component-gateway';

	export let owner; // only required prop

	export let dag = null;
	export let arweave = null; // if none, will assume mainnet
	export let ardag = null; // if none, will create from mainnet

	let esModule;

	let props = {
		profile: {
			firstName: 'Dougals',
			lastName: 'Anderson'
		}
	};

	onMount(async () => {
		if (!ardag) {
			const { Arweave } = await import('arweave');
			console.log('Arweave', Arweave);

			arweave = arweave || Arweave.init({});
			const { initializeArDag } = await import('@douganderson444/ardag');

			ardag = initializeArDag({ arweave });
		}

		if (!dag && !globalThis.dag) {
			const { createDagRepo } = await import('@douganderson444/ipld-car-txs');
			dag = await createDagRepo(); // make a barebones dag repo for fast loading
			globalThis.dag = dag;
		} else {
			dag = globalThis.dag;
		}

		getData({ tag: 'Profile', props: 'compiled' });
	});

	/**
	 * getData Needs owner, ardag, and dag (dag makes it 10X easier)
	 */
	async function getData({ tag, props }) {
		const rootCID = await ardag.load({ dagOwner: owner, dag });
		const path = `${tag}/obj/${props}/value`;
		esModule = (await dag.get(rootCID, { path })).value;

		console.log({ esModule });
	}

	function handleChange(event) {
		console.log(`The data is now: `, event.detail);
	}
</script>

{#if !owner}
	<div class="text-lg font-semibold">Please specify whose ArDag you wish to lookup.</div>
{:else if esModule}
	<div class="flex-1 w-full my-0 mx-auto box-border justify-start">
		<Gateway {esModule} {props} on:change={handleChange} />
	</div>
{/if}
