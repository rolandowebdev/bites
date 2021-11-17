const UrlParser = {
	parseActiveUrlWithCombiner() {
		const url = window.location.hash.slice(1).toLowerCase();
		const splitedUrl = this._urlSplitter(url);
		const scrollTop = this._scrollOnTop();
		return this._urlCombiner(splitedUrl, scrollTop);
	},

	parseActiveUrlWithoutCombiner() {
		const url = window.location.hash.slice(1).toLowerCase();
		const scrollTop = this._scrollOnTop();
		return this._urlSplitter(url, scrollTop);
	},

	_scrollOnTop() {
		window.scrollTo(0, 0);
	},

	_urlSplitter(url) {
		const urlsSplits = url.split('/');
		return {
			resource: urlsSplits[1] || null,
			id: urlsSplits[2] || null,
			verb: urlsSplits[3] || null,
		};
	},

	_urlCombiner(splitedUrl) {
		return (
			(splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
			(splitedUrl.id ? '/:id' : '') +
			(splitedUrl.verb ? `/${splitedUrl.verb}` : '')
		);
	},
};

export default UrlParser;
