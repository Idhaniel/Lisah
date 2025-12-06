// src/data/tourSteps.js
export const tourSteps = [
	{
		id: 0,
		title: 'Welcome to Lisah!',
		description: 'Briefly introduce Lisah as a commitment investing app, helping users reach their financial goals.',
		illustration: {
			type: 'icon',
			name: 'lock',
			bgColor: 'bg-primary/20'
		},
		progress: [1, 0, 0, 0],
		buttons: {
			left: { text: 'Skip', variant: 'secondary' },
			right: { text: 'Next', variant: 'primary' }
		},
		showSkipInHeader: false
	},
	{
		id: 1,
		title: 'Lock In Your Future',
		description: 'A brief explanation on how time-locked investments promote long-term financial discipline and prevent impulsive decisions based on market fluctuations.',
		illustration: {
			type: 'image',
			url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsISPZ0zRoOsn67zsJD7SNcU4pGg_Ir8wZZB_B41Mhk8AvJxUuM61ZeF3eY8Rd-b4eFyJeVxEHnI2lcXXBNSPJ_tnzROzrHobSwATEL3KKKmzY3mS_u0mhYac1EzxI7tkrUZFq4S66N4xQbPsCk7Je2g6TAhUxax-9fhDmjDTNtKN6s9HnyS1usD_3s1_XTWuKTVCCVNhAqucXQCCR1JUzIFbEYVwZj336q_krF_X1merN22S-i-_OyYhxYF-YR3cMwVirNAhS65s'
		},
		progress: [1, 1, 0, 0],
		buttons: {
			right: { text: 'Next', variant: 'primary' }
		}
	},
	{
		id: 2,
		title: 'Track Your Growth Visually',
		description: "Monitor your locked asset's performance with intuitive graphs and metrics.",
		illustration: {
			type: 'icon',
			name: 'monitoring',
			size: 'text-8xl'
		},
		progress: [1, 1, 1, 0],
		showStepCount: true,
		currentStep: 2,
		totalSteps: 3,
		buttons: {
			right: { text: 'Next', variant: 'primary' }
		}
	},
	{
		id: 3,
		title: 'Secure & Simple Investing',
		description: 'With our top-tier security protocols, including advanced encryption, your investments are always safe. The intuitive and user-friendly interface makes navigating the world of investing straightforward and hassle-free.',
		illustration: {
			type: 'icon',
			name: 'shield_lock',
			size: 'text-9xl'
		},
		progress: [0, 0, 0, 1],
		buttons: {
			right: { text: 'Get Started', variant: 'primary' }
		}
	}
];
