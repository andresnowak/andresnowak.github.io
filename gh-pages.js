import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/andresnowak/andresnowak.github.io.git', // Update to point to your repository
		user: {
			name: 'Andres nowak', // update to use your name
			email: 'andresnowak4@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
