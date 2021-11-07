import CONFIG from './config';

const API_ENDPOINT = {
	LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
	DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
