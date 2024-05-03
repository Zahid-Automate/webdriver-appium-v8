class AddNoteScreen {
    get skipButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'); 
    }

    get addNoteText(){
        return $('//*[@text="Add note"]');
    }

    get text(){
        return $('//*[@text="Text"]');
    }

    get textEditing(){
        return $('//*[@text="Editing"]');
    }

    get editTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get addNotesToBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editNoteIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.back();
        await driver.back();
    }
}

module.exports = new AddNoteScreen();