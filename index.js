const baseUrl = "https://api.github.com/repos";
const githubUrl = "https://github.com";
const user = "andresnowak";

const repos = [
	["Covid 19", "covid19_jetpackCompose"],
	["Pong", "Pong"],
	["Tic Tac toe", "tic-tac-toe-py"],
];

window.onload = function () {
	async function getRepoInfo(repo) {
		const url = `${baseUrl}/${user}/${repo}`;
		const response = await fetch(url);
		const data = await response.json();

		console.log(data);

		return data;
	}

	function getTemplate(title, repoData, repoName) {
		const url = `${githubUrl}/${user}/${repoName}`;
		console.log(url);
		return `<a href="${url}" class="card-link">
            <h4>${title}</h4>
			<p>${repoData["description"]}</p>
            <div class="card-data">
                <p>
					<i class="material-icons star">star</i>
					Stars: ${repoData["stargazers_count"]}
                </p>
                <p>
					<i class="material-icons star">fork_right</i>
					Forks: ${repoData["forks"]}
				</p>
            </div>
        </a>`;
	}

	function loadData() {
		const targetElement = document.querySelector("#links-wrapper");

		repos.forEach((repo) => {
			getRepoInfo(repo[1]).then((posts) => {
				const template = getTemplate(repo[0], posts, repo[1]);

				targetElement.innerHTML += template;
			});
		});
	}

	loadData();
};
