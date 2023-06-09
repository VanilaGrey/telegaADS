export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'Лендинг для telegram фриланс биржи.',
	pixelperfect: JSON.stringify({ breakpoints: [375, 768, 1300], ext: 'webp' }),
	projectName: 'TelegaADS'
});
