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

    it.only('Click on Accept in Alert box', async()=>{
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

})