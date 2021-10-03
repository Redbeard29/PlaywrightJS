const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');

    //select by label
    await dropdown.selectOption({label: 'Option 2'});
    //by index
    await dropdown.selectOption({index: 1});

    const availableOptions = await dropdown.$$('option');

    for(let x = 0; x < availableOptions.length; x++){
        console.log(await availableOptions[x].innerText());
    }
    
    await browser.close();
})();