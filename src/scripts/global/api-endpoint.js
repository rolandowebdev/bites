import CONFIG from './config';

const API_ENDPOINT = {
	LIST_OUTLET: `${CONFIG.BASE_URL}/list`,
	REVIEW_OUTLET: `${CONFIG.BASE_URL}/review`,
	DETAIL_OUTLET: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
