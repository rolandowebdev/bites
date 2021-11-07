import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';

const DetailOutlets = {
	async render() {
		return `
         <h2>Detail Outlets</h2>
      `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const outlet = await SourceOutlet.detailOutlet(url.id);
		console.log(outlet);
	},
};

export default DetailOutlets;
