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
			const repo_url = `${githubUrl}/${user}/${repos[1]}`;
			items.push([repo[0], repoData, repo_url]);
		}

		return items;
	}

	//$: loadData
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

<style>
	main {
		widows: 100%;
		height: 100vh;
		background-color: rgb(153, 153, 153);

		display: flex;
		align-items: center;
		flex-direction: column;

		font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
	}

	.wrapper {
		width: 80%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.header {
		width: 100%;
		height: 300px;

		position: relative;
		text-align: center;
		color: white;

		padding: 1em;
		margin-bottom: 1em;
	}

	.title {
		height: 20%;
		position: absolute;
		bottom: 10px;
		left: 32%;

		display: flex;
		align-items: center;
	}

	.logo {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	.title h1 {
		margin: 1em;
	}

	.background-image {
		width: 35%;
		height: 100%;
		border-radius: 10px;
	}

	.links {
		width: 100%;
		padding: 1em;
		margin: 1em;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		overflow: auto;
	}
</style>
