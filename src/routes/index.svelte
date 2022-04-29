<script lang="ts">
	import Card from '$lib/card.svelte';

	const baseUrl = 'https://api.github.com/repos';
	const githubUrl = 'https://github.com';
	const user = 'andresnowak';

	const repos = [
		['Covid 19', 'covid19_jetpackCompose'],
		['Pong', 'Pong'],
		['Tic Tac toe', 'tic-tac-toe-py'],
		['Endless runner', 'endles-runner']
	];

	let promise = loadData();

	export async function getRepoInfo(repo: string): Promise<any> {
		const url = `${baseUrl}/${user}/${repo}`;
		const response = await fetch(url);
		const data = await response.json();

		console.log(data);

		return data;
	}

	export async function loadData(): Promise<Array<Array<any>>> {
		let items: Array<Array<any>> = [];

		for (const repo of repos) {
			const repoData = await getRepoInfo(repo[1]);
			const repo_url = `${githubUrl}/${user}/${repo[1]}`;
			items.push([repo[0], repoData, repo_url]);
		}

		return items;
	}
</script>

<main>
	<div class="wrapper">
		<div class="header">
			<div class="title">
				<img class="logo" loading="lazy" src="/code_logo.jpg" alt="Code logo" />
				<h1>Andres Nowak</h1>
			</div>
			<img class="background-image" loading="lazy" src="/helloworld.png" alt="Hello world" />
		</div>
		<div class="links">
			{#await promise}
				<p>...waiting</p>
			{:then items}
				{#each items as item}
					<Card url={item[2]} title={item[0]} repoData={item[1]} />
				{/each}
			{/await}
		</div>
	</div>
</main>

<style src="./index.css">
</style>
