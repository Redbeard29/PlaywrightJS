const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('input');
    await page.keyboard.type('one does not simply exit vim');

    await page.keyboard.down('Shift');
    for(let x = 0; x < ' exit vim'.length; x++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' walk into mordor', {delay: 100});

    await browser.close();
})();