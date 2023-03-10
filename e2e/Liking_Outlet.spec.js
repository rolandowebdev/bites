const assert = require('assert');

Feature('Favorite Outlets');

Before(({ I }) => {
	I.amOnPage('/#/favorite');
});

Scenario('showing empty liked outlet', ({ I }) => {
	I.seeElement('.notfound');
	I.see("You haven't chosen your favorite outlet", '.notfound-title');
	I.wait(3);
});

Scenario('liking an outlet', async ({ I }) => {
	I.see("You haven't chosen your favorite outlet", '.notfound-title');

	// Navigate to the outlet page
	I.amOnPage('/#/outlet');

	// See oulet list in the outlet page
	I.seeElement('#outletName a');

	const firstOutlet = locate('#outletName a').first();
	const firstOutletName = await I.grabTextFrom(firstOutlet);

	// Simulate user click on the first outlet
	I.click(firstOutlet);

	// See datail outlet and simulate user click on the favorite button
	// I.seeElement('#mainContent');
	I.seeElement('.detail-outlet-section');
	I.seeElement('#likeButton');
	I.click('#likeButton');

	// After user click on the favorite button, display notification
	I.see('You have favorite outlet now!', '.swal2-popup');

	// Navigate to the favorite page
	I.amOnPage('/#/favorite');
	I.seeElement('#outletName a');

	const favoritedOutletName = await I.grabTextFrom('#outletName a');

	// Outlet name should be the same as the one in the outlet page
	assert.strictEqual(firstOutletName, favoritedOutletName);
});
