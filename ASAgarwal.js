const puppeteer = require('puppeteer');
const url = 'https://www.asagarwal.com/blog/'

const ASAgarwal = async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() =>{
    const data =[];
    const articles = document.querySelectorAll('.uael-post__title').forEach((item) => {
      const title = item.querySelector('a').innerText;
      const url = item.querySelector('a').href;
      data.push({title : title, url: url});
    });
    return data;
  }) ;
  console.log(allArticles);
};

//ASAgarwal();
module.exports = ASAgarwal;
