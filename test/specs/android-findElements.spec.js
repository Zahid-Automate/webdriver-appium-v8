describe("Android Elements Test",()=>{
    it('Find element by accessibility id', async()=>{
        //find element by accessibility id
        const appOption = await $('~App');
        //click on the element
        appOption.click();
        //assert that element is present in new page
        const actionBar = await $('~Action Bar');
        await expect (actionBar).toBeExisting();
    })
})