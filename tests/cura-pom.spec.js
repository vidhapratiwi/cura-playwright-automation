const { expect } = require("@playwright/test");
const { test } = require("./base/base-test");


test('Test homepage', async ({ homePage }) => {
    await homePage.testing()
});


