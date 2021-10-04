const { chromium } = require('playwright');


(async() =>{
    const browser = await chromium.launch({headless: false, slowMo:700});
    const page = await browser.newPage();
    await page.goto('https://www.demoqa.com/alerts');


    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('text here my dude');
    });
    await page.click('#promtButton');

    await browser.close();
})();