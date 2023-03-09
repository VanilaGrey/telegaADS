export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'Лендинг для telegram фриланс биржи.',
	pixelperfect: JSON.stringify({ breakpoints: [320, 660, 1200], ext: 'webp' }),
	projectName: 'TelegaADS'
});
