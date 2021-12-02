const itActsFavoriteOutlet = (favoriteOutlet) => {
	it('should return the outlet that has been added', async () => {
		favoriteOutlet.putOutlet({ id: 1 });
		favoriteOutlet.putOutlet({ id: 2 });

		expect(await favoriteOutlet.getOutlet(1)).toEqual({ id: 1 });
		expect(await favoriteOutlet.getOutlet(2)).toEqual({ id: 2 });
		expect(await favoriteOutlet.getOutlet(3)).toEqual(undefined);
	});

	it('should refuse a outlet from being added if it does not have the correct property', async () => {
		favoriteOutlet.putOutlet({ aProperty: 'property' });

		expect(await favoriteOutlet.getAllOutlets()).toEqual([]);
	});

	it('can return all of the outlet that have been added', async () => {
		favoriteOutlet.putOutlet({ id: 1 });
		favoriteOutlet.putOutlet({ id: 2 });

		expect(await favoriteOutlet.getAllOutlets()).toEqual([
			{ id: 1 },
			{ id: 2 },
		]);
	});

	it('should remove favorite outlet', async () => {
		favoriteOutlet.putOutlet({ id: 1 });
		favoriteOutlet.putOutlet({ id: 2 });
		favoriteOutlet.putOutlet({ id: 3 });

		await favoriteOutlet.deleteOutlet(1);

		expect(await favoriteOutlet.getAllOutlets()).toEqual([
			{ id: 2 },
			{ id: 3 },
		]);
	});

	it('should handle request to remove a outlet even thought the outlet has not been added', async () => {
		favoriteOutlet.putOutlet({ id: 1 });
		favoriteOutlet.putOutlet({ id: 2 });
		favoriteOutlet.putOutlet({ id: 3 });

		await favoriteOutlet.deleteOutlet(4);

		expect(await favoriteOutlet.getAllOutlets()).toEqual([
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
		]);
	});

	it('should be able to search for outlet', async () => {
		favoriteOutlet.putOutlet({ id: 1, name: 'outlet a' });
		favoriteOutlet.putOutlet({ id: 2, name: 'outlet b' });
		favoriteOutlet.putOutlet({ id: 3, name: 'outlet abc' });
		favoriteOutlet.putOutlet({ id: 4, name: 'outlet abcd' });

		expect(await favoriteOutlet.searchOutlet('outlet a')).toEqual([
			{ id: 1, name: 'outlet a' },
			{ id: 3, name: 'outlet abc' },
			{ id: 4, name: 'outlet abcd' },
		]);
	});
};

export { itActsFavoriteOutlet };
