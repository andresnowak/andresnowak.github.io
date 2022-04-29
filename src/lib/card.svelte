<script lang="ts">
	import Star from 'svelte-material-icons/Star.svelte';
	import SourceFork from 'svelte-material-icons/SourceFork.svelte';

	export let url: string;
	export let title: string;
	export let repoData: any;
</script>

<a href={url} class="card-link">
	<h4>{title}</h4>
	<p>{repoData['description']}</p>
	<div class="card-data">
		<p>
			<Star color="yellow" />
			Stars: {repoData['stargazers_count']}
		</p>
		<p>
			<SourceFork />
			Forks: {repoData['forks']}
		</p>
	</div>
</a>

<style>
	.card-link {
		width: 25%;
		height: 34%;
		min-height: 150px;
		max-height: 400px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		text-decoration: none;

		cursor: pointer;

		padding: 1.5rem;
		margin: 1rem 2rem;
		border-radius: 10px;

		background-color: rgb(7, 41, 82);

		font-size: 1.6rem;
		color: black;

		box-shadow: 10px 8px #6e6e6e;
	}

	h4 {
		height: 15%;
		margin: 1rem 0;
	}

	h4,
	.card-link p {
		color: rgb(55, 157, 119);
	}

	.card-link > p {
		width: 100%;
		height: 30%;
		overflow: hidden;
		display: -webkit-box;
		overflow-wrap: anywhere;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 1.3rem;
	}

	.card-data {
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.card-data p {
		font-size: 1.2rem;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.star {
		color: rgb(231, 220, 13);
	}
</style>
