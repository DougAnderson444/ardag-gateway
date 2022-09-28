<script>
	// @ts-nocheck
	import { Gateway } from '@douganderson444/svelte-component-gateway';

	export let owner;
	export let tag;
	export let ardag;
	export let dag;

	let esModule;
	let props;
	let tagNode;
	let data;

	$: if (ardag && owner && tag) tagSelected();

	async function tagSelected() {
		console.log('Selecting tag', owner, tag);
		try {
			const rootCID = await ardag.load({ dagOwner: owner, dag });
			tagNode = (await dag.get(rootCID, { path: `${tag}/obj/` })).value;
		} catch (error) {
			throw new Error(error);
		}

		try {
			props = await getDataProps(tagNode);
			esModule = await getEsModule(tagNode);
		} catch (error) {
			// if fail, it's possible one owner is using another owner's DAAp, which is not present in their dag, so fetch it
			if (!tagNode.dappowner)
				throw new Error('No DApp or DApp owner found. Do not know where to fetch DApp from.');
			const rootCID = await ardag.load({ dagOwner: tagNode.dappowner, dag });
			props = await getDataProps(tagNode);
			esModule = await getEsModule(tagNode);
		}
	}

	async function getEsModule(tagNode) {
		return (await dag.get(tagNode.compiled)).value.value;
	}

	async function getDataProps(tagNode) {
		if (!tagNode?.data) return {};
		return (await dag.get(tagNode.data)).value.value;
	}
</script>

{#if tagNode}
	<slot {tagNode} {data} />
{/if}

{#if esModule || (props && esModule)}
	<div class="flex-1 flex flex-col">
		<div class="flex-1 w-full my-0 mx-auto box-border justify-start">
			<Gateway {esModule} {props} on:change on:change={(e) => (data = e.detail)} />
		</div>
	</div>
{/if}
