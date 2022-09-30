<script>
	// @ts-nocheck
	import PlugNPlayGateway from '$lib/PlugNPlayGateway.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let owner = data.params.owner;
	let tag = data.params.tag;
</script>

<main class="flex flex-col w-full h-screen my-0 mx-auto box-border justify-start">
	<div class="flex flex-col p-2 h-full">
		{#if owner && tag}
			<PlugNPlayGateway {owner} {tag} />
		{/if}
	</div>
</main>
