const itActsFavoriteOutlet = (contract) => {
	it('should return the outlet that has been added', async () => {
		contract.putOutlet({ id: 1 });
		contract.putOutlet({ id: 2 });

		expect(await contract.getOutlet(1)).toEqual({ id: 1 });
		expect(await contract.getOutlet(2)).toEqual({ id: 2 });
		expect(await contract.getOutlet(3)).toEqual(undefined);
	});

	it('should refuse a outlet from being added if it does not have the correct property', async () => {
		contract.putOutlet({ aProperty: 'property' });

		expect(await contract.getAllOutlets()).toEqual([]);
	});

	it('can return all of the outlet that have been added', async () => {
		contract.putOutlet({ id: 1 });
		contract.putOutlet({ id: 2 });

		expect(await contract.getAllOutlets()).toEqual([{ id: 1 }, { id: 2 }]);
	});

	it('should remove favorite outlet', async () => {
		contract.putOutlet({ id: 1 });
		contract.putOutlet({ id: 2 });
		contract.putOutlet({ id: 3 });

		await contract.deleteOutlet(1);

		expect(await contract.getAllOutlets()).toEqual([{ id: 2 }, { id: 3 }]);
	});

	it('should handle request to remove a outlet even thought the outlet has not been added', async () => {
		contract.putOutlet({ id: 1 });
		contract.putOutlet({ id: 2 });
		contract.putOutlet({ id: 3 });

		await contract.deleteOutlet(4);

		expect(await contract.getAllOutlets()).toEqual([
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
		]);
	});
};

export { itActsFavoriteOutlet };
