<script>
	// @ts-nocheck
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let tagNode;

	export let data;
	export let wallet;

	export let dag;
	export let ardag;

	export let tag = 'Profile';

	const size = tweened(1, {
		duration: 400,
		easing: cubicOut
	});

	$: if (data) updateSize();

	async function updateSize() {
		$size = await dag.tx.checkSize(data);
	}

	let saved = false;
	let rootCID;
	let tags = [];

	async function handleSave() {
		// add ddata to tagNode and persist

		if (!data || !tagNode) return;

		const dataCid = await dag.tx.pending.add({ value: data });
		// add to tagNode
		tagNode.data = dataCid;

		console.log('saving tagNode', tagNode);

		await dag.tx.add(tag, tagNode);
		const buffer = await dag.tx.commit();

		rootCID = await ardag.persist({ buffer, wallet });
		console.log('persist root', rootCID.toString());

		showDag();
		saved = true;
	}

	async function showDag() {
		// get all data from dag
		tags = Object.keys((await dag.get(dag.rootCID)).value);
		for (let tag of tags) {
			console.log('tag', tag);
			const data = (await dag.get(dag.rootCID)).value;
			// console.log('base value', data);

			const obj = (await dag.get(dag.rootCID, { path: `${tag}/obj/` })).value;
			// console.log('obj value', obj);
		}
	}

	$: if (dag && dag.rootCID) showDag();
	$: if (data && saved) saved = false;

	function renderSize(value) {
		if (null == value || value == '') {
			return '0 Bytes';
		}
		const unitArr = new Array('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
		let index = 0;
		let srcsize = parseFloat(value);
		index = Math.floor(Math.log(srcsize) / Math.log(1024));
		let size = srcsize / Math.pow(1024, index);
		size = size.toFixed(0); //Number of decimal places reserved
		return size + unitArr[index];
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center">
		<div class="border w-44 p-2 bg-white shadow-lg" contenteditable="true" bind:textContent={tag} />
		{#if dag && ardag && tagNode}
			<button
				class="flex-0 w-fit p-2 shadow-lg rounded-r-lg text-white font-semibold select-none {saved
					? 'cursor-not-allowed bg-gray-400'
					: 'cursor-pointer bg-blue-500'}"
				on:click={handleSave}
				disabled={!data || saved}
			>
				Save{saved ? 'd' : ''}
			</button>
			{#if dag.tx.pending}
				<div class="flex-1 m-2">
					{#if !saved && $size > 1}
						<div class={$size > 1024 * 100 ? 'text-red-700 font-bold' : ''}>
							{renderSize($size)}
						</div>
					{/if}
				</div>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss"></style>
