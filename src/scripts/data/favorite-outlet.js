import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const databasePromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
	upgrade(database) {
		database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
	},
});

const FavoriteOutletDatabase = {
	async getOutlet(id) {
		if (!id) return;
		return (await databasePromise).get(OBJECT_STORE_NAME, id);
	},

	async getAllOutlets() {
		return (await databasePromise).getAll(OBJECT_STORE_NAME);
	},

	async putOutlet(outlet) {
		if (!outlet.hasOwnProperty('id')) return;
		return (await databasePromise).put(OBJECT_STORE_NAME, outlet);
	},

	async deleteOutlet(id) {
		return (await databasePromise).delete(OBJECT_STORE_NAME, id);
	},
};

export default FavoriteOutletDatabase;
