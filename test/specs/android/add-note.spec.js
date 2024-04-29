describe ('Add Notes',()=>{
    it('Skip tutorial', async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add note , Save changes and Verify note', async()=>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue('Fav Animation list');

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Aiman\nFilocity\nKayden');

        // save the changes
        await driver.back();
        await driver.back();

        // verify edit button is present on the screen
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Aiman\nFilocity\nKayden');


    });

    it('Delete the note and verify', async()=>{
        await expect($('//*[@text="Fav Animation list"]')).toBeDisplayed();
        await $('//*[@text="Fav Animation list"]').click();
        await $('//*[@content-desc="More"]').click();

        await expect ($('//*[@text="Delete"]')).toBeDisplayed();
        await $('(//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon"])[7]').click();
        await $('//*[@text="OK"]').click();

        //Verify deleted note is present in trash
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await expect ($('//*[@text="Trash Can"]')).toBeDisplayed();
        await $('//*[@text="Trash Can"]').click();

        await expect($('//*[@text="Fav Animation list"]')).toBeDisplayed();

    })
})