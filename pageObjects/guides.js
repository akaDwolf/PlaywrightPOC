// JavaScriptFunctionsPage.js
const { expect } = require('@playwright/test');

export class GudidesPage {
    /**
     * Constructor that initializes locators on the page
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.prepareDropDown = page.locator('button span', { hasText: 'Prepare' }).first();
        this.selectGuidesOption = page.locator('button', {hasText: 'Guides'}).first();
        this.frontEndInterview = page.locator("//span[contains(text(), 'Front End Interview')]");
        this.frontendHeader = page.locator("div.flex.items-center.gap-4").last();
        this.sectionTitles = page.locator("h2.text-pretty.text-xl");
        this.subHeadingText= page.locator(`//span[contains(text(), 'The definitive guide to front end interviews.')]`)
        this.selectFrontEndIntroductionSection = page.locator(`a[href="/front-end-interview-playbook/introduction"]`);
        this.frontEndIntroductionPageSection = page.locator(`a.scroll-mt-28[href^="#"]`);

    }


    async hoverOnPrepareDropdown() {
        await expect(this.prepareDropDown).toBeVisible();
        await this.prepareDropDown.hover({ force: true });
    }

    async scrollToGuidesOption() {
        await this.selectGuidesOption.hover();
    }

    async selectFrontEndInterviewPlayBook() {
        await this.frontEndInterview.click();
    }

    async verifyFrontEndInterviewPage() {
        await expect(this.frontendHeader).toBeVisible();
    }

    async verifyGuideSections() {

        await expect.soft(this.subHeadingText).toBeVisible();

        const count = await this.sectionTitles.count();

        for (let i = 0; i < count; i++) {
            const heading = this.sectionTitles.nth(i);
            await expect(heading, `Heading index ${i} should be visible`).toBeVisible();
        }
    }
    
    

    async verifyAllSections(expectedHeaders) {


        for (const headingText of expectedHeaders) {
            const heading = this.page.locator(`//h2[contains(normalize-space(text()), '${headingText}')]`);
            await expect(heading, `Heading '${headingText}' should be visible`).toBeVisible();
        }
    }

    async selectFrontEndIntroduction(){
        await this.selectFrontEndIntroductionSection.click();
    }

    async verifyAllAnchorLinksVisible() {
        const count = await this.frontEndIntroductionPageSection.count();
        for (let i = 0; i < count; i++) {
            const anchor = this.frontEndIntroductionPageSection.nth(i);
            await expect(anchor, `Anchor link at index ${i} should be visible`).toBeVisible();
        }
    }

}
