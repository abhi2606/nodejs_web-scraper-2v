const puppeteer = require('puppeteer');

const url = "https://engineering.salesforce.com/blog/";

const SalesforceEngineering = async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ["--no-sandbox"]
});
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() =>{
    const articles = document.querySelectorAll('article');

    return Array.from(articles).map((article) => {
      const title = article.querySelector('h3 > a').innerHTML.replace(/[\n\t]/g, '');
      const url = article.querySelector('h3 > a').href;
      return {title,url};
    });
  }) ;
  //console.log(allArticles);
  await browser.close();
  return allArticles;
};

//SalesforceEngineering();
module.exports = SalesforceEngineering;
