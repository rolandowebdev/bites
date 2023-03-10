const assert = require('assert');

Feature('Unliking Outlet');

let firstOutletName;

Before(async ({ I }) => {
	I.amOnPage('/#/outlet');

	I.seeElement('#outletName a');
	const firstOutlet = locate('#outletName a').first();
	firstOutletName = await I.grabTextFrom(firstOutlet);

	I.click(firstOutlet);

	I.seeElement('#likeButton');

	I.click('#likeButton');
	I.amOnPage('/#/favorite');

	I.wait(3);
});

Scenario('Display Favorite Outlet', async ({ I }) => {
	I.seeElement('.outlet');
	const favoriteOutletName = await I.grabTextFrom('#outletName a');

	assert.strictEqual(firstOutletName, favoriteOutletName);
	I.wait(3);
});

Scenario('Unliking Outlet From Favorite Outlet', ({ I }) => {
	I.amOnPage('/#/favorite');
	I.seeElement('#outletName a');

	const firstOutlet = locate('#outletName a').first();
	I.click(firstOutlet);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.see('Outlet has been removed!', '.swal2-popup');

	I.amOnPage('/#/favorite');
	I.see("You haven't chosen your favorite outlet", '.notfound-title');
});
