const AddNoteScreen = require("./add-note.screen.spec");

describe ('Add Notes',()=>{
    it('Skip tutorial', async()=>{
        await AddNoteScreen.skipButton.click();
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add note , Save changes and Verify note', async()=>{
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.text.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // add note title
        await AddNoteScreen.editTitle.setValue('Fav Animation list');

        // add note body
        await AddNoteScreen.addNotesToBody.addValue('Aiman\nFilocity\nKayden');

        // save the changes
        await AddNoteScreen.saveNote();

        // verify edit button is present on the screen
        await expect(AddNoteScreen.editNoteIcon).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText('Aiman\nFilocity\nKayden');

    });

    xit('Delete the note and verify', async()=>{
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