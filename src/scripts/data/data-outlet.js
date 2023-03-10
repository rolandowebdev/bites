import API_ENDPOINT from '../global/api-endpoint';

class SourceOutlet {
	static async allOutlet() {
		const response = await fetch(API_ENDPOINT.LIST_OUTLET);
		const responseJson = await response.json();
		return responseJson;
	}

	static async detailOutlet(id) {
		const response = await fetch(API_ENDPOINT.DETAIL_OUTLET(id));
		return response.json();
	}

	static async postReview(review) {
		const response = await fetch(API_ENDPOINT.REVIEW_OUTLET, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(review),
		});
		return response;
	}
}

export default SourceOutlet;
