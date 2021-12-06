const assert = require('assert');

Feature('Review Outlet');

Before(({ I }) => {
	I.amOnPage('/#/outlet');

	const outlet = locate('#outletName a').at(3);
	I.click(outlet);
	I.wait(3);
});

Scenario('Give Review Feedback', async ({ I }) => {
	const reviewName = 'Reviewer';
	const reviewDetail = 'Reviewer Detail';

	I.seeElement('#form-container');

	I.fillField('#reviewName', reviewName);
	I.fillField('#reviewDetail', reviewDetail);
	I.click('#submit');

	I.wait(2);

	I.see('Successfully added review', '.swal2-popup');
	I.wait(2);
	I.click('.swal2-confirm');

	I.wait(3);

	const getReviewerName = await I.grabTextFrom(locate('.name').last());
	const getReviewerDetail = await I.grabTextFrom(locate('.review-text').last());

	assert.strictEqual(reviewName, getReviewerName);
	assert.strictEqual(reviewDetail, getReviewerDetail);
});
