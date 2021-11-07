import API_ENDPOINT from '../global/api-endpoint';

class SourceOutlet {
	static async allOutlet() {
		const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
		const responseJson = await response.json();
		return responseJson;
	}

	static async detailOutlet(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		return response.json();
	}
}

export default SourceOutlet;
