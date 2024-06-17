const puppeteer = require('puppeteer');
const url = 'https://automationchampion.com/2024/'

const AutomationChampion = async () => {

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

//AutomationChampion();
module.exports =  AutomationChampion;
