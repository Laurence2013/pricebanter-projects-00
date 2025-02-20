process.env.NODE_ENV === 'production' ? module.exports = {
	plugins: {
		autoprefixer: {},
		cssnano: {}
	}
} : module.exports = {
	plugins: {
		autoprefixer: {}
	}
}
