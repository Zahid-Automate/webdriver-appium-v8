describe('iOS find element', () => {
    it('find elememt by accessibility id', async() => {
        // Click on Alert Views
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');


    });
});

