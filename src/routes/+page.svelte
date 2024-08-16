<script lang="ts">
	import type { PageData } from './$houdini';
	import { preloadData } from '$app/navigation';

	export let data: PageData;

	$: ({ ActiveOrder } = data);

	let loadCounter = 0;

	let amountPerLoadCall = 30;
	let listenerAmount = 10;
	let orderAmount = 10;

	let reloading = false;

	const reload = async () => {
		reloading = true;

		for (let i = 0; i < amountPerLoadCall; i++) {
			await preloadData(`/${i % 2}`);
		}

		loadCounter += amountPerLoadCall;
		reloading = false;
	};

	const forceRefetch = async () => {
		await ActiveOrder.fetch({ blocking: true, policy: 'NetworkOnly' });
	};
</script>

<div style="padding: 2rem;">
	<button on:click={reload} disabled={reloading}>Loads: {loadCounter}</button>
	<button on:click={forceRefetch} disabled={reloading}>Force Refetch</button>

	<div style="display: flex;">
		<p>Amount per load call</p>
		<input
			type="range"
			min="10"
			max="1000"
			bind:value={amountPerLoadCall}
			step="1"
			disabled={reloading}
		/>
		<p>{amountPerLoadCall}</p>
	</div>

	<div style="display: flex;">
		<p>Listener amount</p>
		<input
			type="range"
			min="1"
			max="1000"
			bind:value={listenerAmount}
			step="1"
			disabled={reloading}
		/>
		<p>{listenerAmount}</p>
	</div>

	<div style="display: flex;">
		<p>Order amount</p>
		<input type="range" min="1" max="1000" bind:value={orderAmount} step="1" disabled={reloading} />
		<p>{orderAmount}</p>
	</div>

	<p>Fetching {$ActiveOrder.fetching}</p>

	{#each new Array(listenerAmount).fill('Listener') as name, index}
		<details>
			<summary>{name} - {index + 1}</summary>
			<pre>{JSON.stringify($ActiveOrder, null, index + 1)}</pre>
		</details>
	{/each}
</div>
