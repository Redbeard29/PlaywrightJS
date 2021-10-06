const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');

    //Window screenshot
    await page.screenshot({ path: 'screenshot.png' });

    //Logo screenshot
    const logo = await page.$('.logo');
    await logo.screenshot({ path: 'logo.png' });

    //Full page screenshot
    await page.screenshot({ path: 'fullpage.png', fullPage: true});

    await browser.close();
})();