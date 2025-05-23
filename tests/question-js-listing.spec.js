import { test, expect } from '@playwright/test';
import { JavaScriptFunctionsPage } from '../pageObjects/questions-js-listing';
import testdata from "../test-data/code.json" with { type: "json" };

test('User selects Question formats and click on JavaScript Functions', async ({ page }) => {
    const jsFNPage = new JavaScriptFunctionsPage(page)
    await test.step("Step 1 | User launches the URL", async() =>{
        await jsFNPage.navigate();
    });

    await test.step("Step 2 | User hovers over on Prepare Drop Down and Clicks on Question formats link", async() =>{
        await jsFNPage.hoverOnPrepareDropdown();
        await jsFNPage.clickOnQuestionFormatsLinkUnderPrepareDropDown();
    });

    await test.step("Step 3 | User Lands on the Question Formats page", async() =>{
        await jsFNPage.verifyUserIsOnQuestionPage();
    });

    await test.step("Step 4 | User Select Java Script Options", async () => {
        await jsFNPage.verifyUserIsOnQuestionPage();
        await jsFNPage.userSelectsJSOption();
    });

    await test.step("Step 5 | User Lands on Java Script Programming Page", async () => {
        await jsFNPage.userLandsOnJSPage();
    });

    await test.step("Step 6 | User Select Make Counter Program", async () => {
        await jsFNPage.goToMakeCounterQuestion();
    });

    await test.step("Step 7 | User Enters the code in IDE", async () => {
        await jsFNPage.insertCodeSnippetInIDE(testdata.snippet);
    });
    
    await test.step("Step 8 | User clicks on the RUN button post providing the code input", async() =>{
        await jsFNPage.clickRunButton();
    });

    await test.step("Step 9 | User verifes the output status", async () => {
        await jsFNPage.verifySuccessCodeStatus();
    });
    
});


