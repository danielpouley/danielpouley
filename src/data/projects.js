// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/fluke-corp-1.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Fluke Corporation',
		category: 'Drupal',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'Cant Quit Comics',
		category: 'Logo Design',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Chuckanut 50K - 2020',
		category: 'Poster Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Chuckanut 50K - 2019',
		category: 'Poster Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Ancestral Kitchen Podcast',
		category: 'Graphic Design',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Chuckanut Hills Farm',
		category: 'Logo Design',
		img: WebImage1,
	},
];
