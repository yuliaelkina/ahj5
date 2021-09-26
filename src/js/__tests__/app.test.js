import puppeteer from 'puppeteer';

jest.setTimeout(30000);// default puppeteer timeout
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,// show gui
      //slowMo: 100,
      //devtools: true,// show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should add .popover--display class for shown popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.button[data-number=second]');
    button.click();
    await page.waitForSelector('[data-number=second].popover--display');
  });
});
