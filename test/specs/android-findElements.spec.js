describe("Android Elements Test",()=>{
    it('Find element by accessibility id', async()=>{
        //find element by accessibility id
        const appOption = await $('~App');
        //click on the element
        appOption.click();
        //assert that element is present in new page
        const actionBar = await $('~Action Bar');
        await expect (actionBar).toBeExisting();
    });

    it('Find element by css selector', async()=>{
        //find element by class name
        const className = await $('android.widget.TextView');
        //Assertion
        await expect(className).toHaveText("API Demos");
    });

    xit('Find elements by Xpath', async()=>{
        //Find By xpath - //tagname[@attribute=value]
        //await $('//android.widget.TextView[@content-desc="App"]').click();
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //Find By resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //Find By text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //Find By class and Assert
        const textValue = await $('//android.widget.TextView')
        await expect(textValue).toHaveText('You selected: 1 , Command two');
    });

    it('Find elements by ui automator', async()=>{
        //find by text contains using ui automator
        await $('android=new UiSelector().textContains("Alert")').click();

    });

    it('Find multiple elements', async()=>{
        const expectedList = [	
            'API Demos',"Access'ibility",'Accessibility',
            'Animation','App','Content',
            'Graphics','Media','NFC','OS','Preference','Text','Views'];

        const actualList = [];
        //find the elements
        const textlist = await $$('android.widget.TextView');
       
        //loop through the elements
        for (const element of textlist){
            actualList.push(await element.getText());
        }

        //assert the list
        await expect(actualList).toEqual(expectedList);
    })

    it.only('Working with text field ', async()=>{
        //access the auto complete-screen
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        //enter the country name
        const countryInput = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await countryInput.addValue('Canada');

        //verify the country name
        await expect(countryInput).toHaveText('Canada');

    });
})