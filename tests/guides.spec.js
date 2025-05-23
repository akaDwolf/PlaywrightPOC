import { test, expect } from '@playwright/test';
import { JavaScriptFunctionsPage } from '../pageObjects/questions-js-listing';
import testdata from "../test-data/guide.json" with { type: "json" };
import { GudidesPage } from '../pageObjects/guides';

test('User navigates through Guides and select Front End Interview Playbook', async ({ page }) => {
    const jsFNPage = new JavaScriptFunctionsPage(page);
    const guides = new GudidesPage(page);

    await test.step("Step 1 | User launches the URL", async() =>{
        await jsFNPage.navigate();
    });

    await test.step("Step 2 | User hovers over on Prepare Drop Down and scroll to Guides option", async() =>{
        await guides.hoverOnPrepareDropdown();
        await guides.scrollToGuidesOption();
    });

    await test.step("Step 3 | User selects Front End Interview Playbook and clicks on it", async () => {
        await guides.selectFrontEndInterviewPlayBook();
    });

    await test.step("Step 4 | User lands on the Front End Interview Section and verifies all the content", async () => {
        await guides.verifyFrontEndInterviewPage();
        await guides.verifyGuideSections();
    });

    await test.step("Step 5 | User verifies all the section contents", async () => {
        await guides.verifyAllSections(testdata['page-section-contents']);
    });

    await test.step("Step 6 | User selects Front End Introduction", async () => {
        await guides.selectFrontEndIntroduction();
    });

    await test.step("Step 7 | User verifies all the contents present in the page", async () => {
        await guides.verifyAllAnchorLinksVisible();
    });

    
});


