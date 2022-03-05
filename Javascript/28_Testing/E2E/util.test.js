const puppeteer = require('puppeteer'); // npm install --save-dev puppeteer
// puppeteer simulates a browser
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});


//E2E test
test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({ //launch a browser with desired options
    headless: true,
    // slowMo: 80, //slows automated operations to see them while they happen
    // args: ['--window-size=1920,1080'] //launches the browser with this arguments (width and height)
  });
  const page = await browser.newPage(); //page object
  await page.goto(
    'file:///Users/.../js-testing/index.html' // tell the browser which page should be loaded = your url
  );
  // insert logic on the page to test result
  await page.click('input#name'); //item it should click
  await page.type('input#name', 'Anna'); //what browser should write on the clicked element
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent); //check for existence of the element
  expect(finalText).toBe('Anna (28 years old)');
}, 10000);
