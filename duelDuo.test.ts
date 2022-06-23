
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const titleDisplayed = await title.isDisplayed();
    expect(titleDisplayed).toBe(true);
})

test('clicking the "Draw" button populates choices', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.sleep(3000);
    const choices = await driver.findElement(By.id('choices'));
    const choicesDisplayed = await choices.isDisplayed();
    expect(choicesDisplayed).toBe(true);
})

test('clicking the "Add to Duo" button places bot in "player-duo" choices', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();
    await driver.sleep(1000);
    const playerDuo = await driver.findElement(By.id('player-duo'));
    const playerDisplayed = await playerDuo.isDisplayed();
    expect(playerDisplayed).toBe(true);
})

test('clicking the "Removed from Duo" button places bot back in choices', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//button[text()="Remove from Duo"]')).click();
    await driver.sleep(1000);
    const cardClassFive = await driver.findElement(By.xpath('//*[@id="choices"]/div[5]'));
    const cardClassFiveDisplayed = await cardClassFive.isDisplayed();
    expect(cardClassFiveDisplayed).toBe(true);
})

