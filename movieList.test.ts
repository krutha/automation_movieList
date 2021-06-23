import { Builder, Capabilities, By } from "selenium-webdriver"
import { afterAll,beforeAll } from'@jest/globals'
const {test}=require('@jest/globals')
const chromedriver=require('chromedriver')
const driver=new Builder().withCapabilities(Capabilities.chrome()).build();
beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
});
test('add movie to the page', async () => {
let searchBar = await driver.findElement(By.name('q'));
 await searchBar.sendKeys('harryPotter\n')
  searchBar = await driver. findElement(By.name('q'));
  await searchBar.clear();
  await driver.sleep(4000);



     await searchBar.sendKeys('finding nemo\n');
     await searchBar.sendKeys('harrypoter\n');
     await driver.sleep(4000);
  await driver.findElement(By.xpath('//button[contains(@class,"x")]')).click();
  await driver.findElement(By.xpath('//button[contains(@class,"n")]')).click();
//   searchBar=await driver.findElement(By.name("q"));

})