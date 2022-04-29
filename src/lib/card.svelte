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

<style src="./card.css">
</style>
