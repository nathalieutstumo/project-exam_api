// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),

//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

module.exports = ({ env }) => ({
	url: env('APP_URL'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['YxvI1uffnI9ZDrzkbN5G2A==', 't66L+EGoPxFbM8IRk96+Vw=='])
	}
});