
//import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');
const url = "https://developer.salesforce.com/content-archive?content-type=Blogs";

const SalesforceDeveloperBlog = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allCards = await page.evaluate(() => {
    const data =[];
    for (let i = 5; i <= 14; i++) {

      const card = document.querySelector("#maincontent > div > dw-content-archive").shadowRoot.querySelector("div > div.content-container > dx-card-expanded:nth-child("+i+")").shadowRoot.querySelector("div > dx-card-title").shadowRoot.querySelector("h3 > a");

      const title = card.innerHTML;
      const url = card.href;

      data.push({title : title, url: url});
    }
    return data;
  });
  await browser.close(); // Close the browser when done
  return allCards; // Return the scraped data
  //console.log(allCards);
};


module.exports =  SalesforceDeveloperBlog ;