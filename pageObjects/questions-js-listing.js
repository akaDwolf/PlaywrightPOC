// JavaScriptFunctionsPage.js

const { expect } = require('@playwright/test');

export class JavaScriptFunctionsPage {
    /**
     * Constructor that initializes locators on the page
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.prepareDropDown = page.locator('button span', { hasText: 'Prepare' }).first();
        this.questionFormatsLink = page.locator('span', { hasText: 'Question formats' }).first();
        this.userInterfaceCodingHeader = page.locator('h1', { hasText: 'User Interface Coding' });
        this.selectJSOption = page.locator('a', { hasText: 'JavaScript functions' }).first();
        this.jsheadingText = page.locator('h1', { hasText: 'JavaScript Functions' });
        this.makeCounterLink = page.locator('a', { hasText: 'Make Counter' }).first();
        this.makeCounterHeader = page.getByRole('h1', { name: 'Make Counter', exact: true }).first();
        this.codePanel = page.locator('#data-panel-id-right-top').getByRole('code').locator('div').filter({ hasText: 'throw \'Not implemented\';' }).nth(4);
        this.codeIDE = page.getByRole('textbox', { name: 'Editor content;Press Alt+F1' });
        this.correctStausCheck = page.locator('span', {hasText: 'Correct'});
        this.passedStatusCheck = page.locator('span', {hasText: 'passed'}).first();
        this.runButton = page.getByRole('button', { name: 'Run', exact: true });
    }

    async navigate(URL = process.env.URL) {
        await this.page.goto(URL);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyHeadingVisible() {
        await expect(this.heading).toBeVisible();
    }

    async hoverOnPrepareDropdown() {
        await expect(this.prepareDropDown).toBeVisible();
        await this.prepareDropDown.hover({ force: true });
    }

    async clickOnQuestionFormatsLinkUnderPrepareDropDown() {
        await expect.soft(this.questionFormatsLink).toBeVisible();
        await this.questionFormatsLink.click();
    }

    async verifyUserIsOnQuestionPage() {
        await expect.soft(this.userInterfaceCodingHeader).toBeVisible();
    }

    async userSelectsJSOption() {
        await expect.soft(this.selectJSOption).toBeVisible();
        await this.selectJSOption.click();
    }

    async userLandsOnJSPage() {
        await expect.soft(this.jsheadingText).toBeVisible();
    }

    async goToMakeCounterQuestion() {
        await this.makeCounterLink.click();
        await expect(this.page.locator('#data-panel-id-left-column')).toContainText('Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.');
    }

    async insertCodeSnippetInIDE(codeSnippet) {
        await this.page.waitForTimeout(5000);
        await this.codePanel.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.type(codeSnippet, {delay: 150});
    }

    async clickRunButton() {
        await this.runButton.click();
    }

    async verifySuccessCodeStatus(){
        await expect(this.correctStausCheck).toBeVisible();
        await expect(this.passedStatusCheck).toBeVisible();
    }
}
