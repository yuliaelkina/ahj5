import puppeteer from 'puppeteer';
import '../app';

jest.setTimeout(30000);

describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 100,
      //devtools: true,
    });
    page = await browser.newPage();
  });
  test('should add .popover--display class for shown popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.button[data-number=second]');
    button.click();
    await page.waitForSelector('[data-number=second].popover--display');
  });
  afterAll(async () => {
    await browser.close();
  });
  
});
