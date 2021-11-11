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

	static async postReview(review) {
		const response = await fetch(API_ENDPOINT.REVIEW_RESTAURANT, {
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
