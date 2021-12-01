const assert = require('assert');

Feature('Review Outlet');

Before(({ I }) => {
	I.amOnPage('/#/outlet');

	const firstOutlet = locate('#outletName a').at(3);
	I.click(firstOutlet);
});

Scenario('Give Review Feedback', async ({ I }) => {
	const reviewName = `Reviewer`;
	const reviewDetail = `Reviewer Detail`;

	I.seeElement('#form-container');

	I.fillField('#reviewName', reviewName);
	I.fillField('#reviewDetail', reviewDetail);
	I.click('#submit');

	I.see('Successfully added review', '.swal2-popup');
	I.click('.swal2-confirm');

	const getReviewerName = await I.grabTextFrom(locate('.name').last());
	const getReviewerDetail = await I.grabTextFrom(locate('.review-text').last());

	assert.strictEqual(reviewName, getReviewerName);
	assert.strictEqual(reviewDetail, getReviewerDetail);
});
