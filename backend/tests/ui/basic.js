
const isbn = Date.now();

module.exports = {
  'Username should be prefilled': (browser) => browser
    .url(browser.launch_url)
    .waitForElementVisible('#username', 5000)
    .getValue('#username', (result) => {
      browser.assert.notEqual(result.value, '');
    }),

  'Click on Create User Button Should create user and redirect to books page': (browser) => browser
    .url(browser.launch_url)
    .waitForElementVisible('.create-new-user-btn', 5000)
    .click('.create-new-user-btn')
    .assert.urlContains('/books', 'User created successfully and redirected to /books page.'),

  'Click On Add Book Button Should Redirect to add book page': (browser) => browser
    .url(`${browser.launch_url}/books`)
    .waitForElementVisible('.add-new-book', 5000)
    .click('.add-new-book')
    .assert.urlContains('/add-book', 'Redirected to add book page.'),

  'User Should be able to add a book': (browser) => browser
    .waitForElementVisible('#book-isbn', 5000)
    .waitForElementVisible('#book-title', 5000)
    .setValue('#book-isbn', isbn)
    .setValue('#book-title', `Test Book name ${isbn}`)
    .click('.add-book-button')
    .assert.urlContains('/books', 'Redirected to books page after adding book.')
    .assert.containsText('ul li a', `Test Book name ${isbn}`)

};
