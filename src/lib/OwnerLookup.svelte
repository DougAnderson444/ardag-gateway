<script>
	// @ts-nocheck
	export let ardag;

	let owner;
	let ownerTags;
	let selectedTag;
	let looking;

	// $: if (owner && ardag) getOwnerTags();

	async function getOwnerTags() {
		const rootNode = await ardag.get({ dagOwner: owner });
		console.log('rootNode', rootNode, { owner });
		if (!rootNode) return;
		ownerTags = Object.keys(rootNode);
	}

	function handleLookup(e) {
		looking = true;
		getOwnerTags();
	}
</script>

<div class="flex flex-row items-center ">
	<div class="{!owner ? 'text-red-600' : 'text-green-800'} text-lg font-semibold m-8">
		Lookup ArDag Owner:
	</div>
	<input
		class="flex-1 border p-2 rounded-l-lg"
		type="text"
		placeholder="ArDag owner (their base64 encoded Publickey)"
		bind:value={owner}
		disabled={!ardag}
	/><button
		class="flex-0 w-fit mr-12 p-2 shadow-lg rounded-r-lg text-white font-semibold select-none {looking
			? 'cursor-not-allowed bg-gray-400'
			: 'cursor-pointer bg-blue-500'}"
		on:click={handleLookup}>Lookup</button
	>
</div>
{#if ownerTags}
	<div class={!selectedTag ? 'text-red-600' : 'text-green-800'}>Please select a tag to display</div>
	{#each ownerTags as tag}
		<div class="flex flex-row">
			<div class="flex-1 flex flex-col">
				<h2
					class="text-lg font-semibold cursor-pointer p-2 m-2 border rounded w-fit {selectedTag ==
					tag
						? 'bg-green-200'
						: 'bg-slate-100'}"
					on:click={(e) => (selectedTag = tag)}
				>
					{tag}
				</h2>
			</div>
		</div>
	{/each}
{/if}

{#if selectedTag}
	<slot {owner} tag={selectedTag} />
{/if}
