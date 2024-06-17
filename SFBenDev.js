const puppeteer = require('puppeteer');

const url = 'https://www.salesforceben.com/category/developers/';

const SFBenDev = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() =>{
    const articles = document.querySelectorAll('article');

    return Array.from(articles).map((article) => {
      const title = article.querySelector('div > div.text > div.top > div.title').innerHTML;
      const url = article.querySelector('a').href;
      return {title,url};
    });
  }) ;
  console.log(allArticles);
};

//SFBenDev();
module.exports =  SFBenDev;
