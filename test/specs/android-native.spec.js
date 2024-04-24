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
})