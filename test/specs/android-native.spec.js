const { KNOWN_DRIVERS } = require("appium/build/lib/constants");

describe('Andrioid Native Feature Tests',()=>{
    it('Access an activity directly', async()=>{
    // access activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    // pause 3s
    await driver.pause(3000);

    // assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Click on Accept in Alert box', async()=>{
     // access the alerts page directly
     await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

     await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
     
    // accept Alert
    // await driver.acceptAlert();

    // dismiss Alert
    // await driver.dismissAlert();

    // get alert text
    console.log('ALERT TEXT -->', await driver.getAlertText());

    // click on the OK button
    await $('//*[@resource-id="android:id/button1"]').click();

    // assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    });

    it('Vertical scrolling ', async()=>{
        await $('~App').click();
        await $('~Activity').click();
        // Method 1 of scrolling 
        //await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)').click();
        //await $('~Secure Surfaces').click();

        // Method 2 more reliable way of scrolling
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // Assert
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal scrolling ', async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()').click();
        await driver.pause(5000);
    })

    it.only('Date Time Picker Validation', async()=>{
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();

        const dateText = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = dateText.getText();
       
        await $('~change the date').click();
        await $('~Next month').click();

        // Select 10th day of the month
        await $('android=new UiSelector().text("10")').click();

        //Click on OK Button
        await $('//*[@resource-id="android:id/button1"]').click();

        // Assert that date is changed
        await expect (await dateText.getText()).not.toEqual(currentDate);
        await driver.pause(5000);
    })

})