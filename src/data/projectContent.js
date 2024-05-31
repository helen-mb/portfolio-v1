import IMAGES from '../images/Images';

export const projectContents = [
	{
		id: 0,
		title: "Take Five",
		stack: "Design | React| Chakra UI| API",
		summary: "How I took a project from conceptualization, design, and prototyping, through coding and publication to make a fully responsive movie-list application built with React JS, Chakra UI, and the API from TMDb.",
		url: "https://take-five.helenburger.com/",
		git: "https://github.com/helen-mb/fwd-mdb",
		image: IMAGES.takeFiveScreen,
		intro: "From conceptualization, wireframing, and a high-fidelity Photoshop mockup, to a functional React project using Chakra UI and the TMDB database.",
		content: [
			[
				'paragraph', "This application started as a solo design project. I started with conceptualization using hand-drawn lo-fidelity wireframes, and eventually created a hi-fidelity mockup in Adobe Photoshop. I then joined a team of three, and together we built a fully functional prototype in Adobe XD, before finally building the application in React."
			],
			[
				'image', 'takeFiveScreen'
			],
		]
	},
	{
		id: 1,
		title: "Wumpus",
		stack: "JQuery | JavaScript",
		summary: "How I re-envisioned the classic text-based game, HUNT THE WUMPUS, with a graphical interface to represent the player’s actions, game feedback, and traversal of a dodecahedron-shaped space.",
		url: "https://hunt-the-wumpus.helenburger.com/",
		git: "https://github.com/helen-mb/fwd-wumpus",
		image: IMAGES.wumpusScreen,
		intro: "A visual exploration of the classic text-based game, Hunt the Wumpus, built using Vanilla JS and JQuery. Features traversal of a dodecahedron-shaped space.",
		content: [
			[
				'paragraph', "For this game, I wanted to try something with slightly more challenging logic than a basic game of rock-paper-scissors. I spent a lot of time preparing the logic by hand and making diagrams to understand what information would be needed when."
			],
			[
				'image', 'wumpusScreen'
			],
		]
	},
	{
		id: 2,
		title: "Wonderland",
		stack: "Design | HTML | CSS | JS",
		summary: "How I designed and built a mock travel website from scratch with a custom logo, to serve as a personal design challenge and a demonstration of HTML, CSS, and JS skills.",
		url: "https://helenburger.com/fwd-wonderland/",
		git: "https://github.com/helen-mb/fwd-wonderland",
		image: IMAGES.wonderlandScreen,
		intro: "A mock travel website serving as a personal design challenge and a demonstration of HTML, CSS, and JS skills.",
		content: [
			[
				'paragraph', "For this project, we were expected to make a simple 'country' website with which to practice our HTML and CSS skills. I wanted, however, to try my hand at designing something that one would be more likely to see in the real world. What about a travel website?"
			],
			[
				'image', 'wonderlandScreen'
			],
		]
	}
];