const puppeteer = require('puppeteer');
const url = 'https://salesforcecodex.com/'

const salesforcecodex = async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() =>{
    const articles = document.querySelectorAll('article');

    return Array.from(articles).map((article) => {
      const title = article.querySelector('h2 > a').innerHTML;
      const url = article.querySelector('h2 > a').href;
      return {title,url};
    });
  }) ;
  console.log(allArticles);
}

//salesforcecodex();
module.exports = salesforcecodex ;