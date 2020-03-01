const puppeteer = require("puppeteer");

const chalk = require("chalk");

//var fs = require("fs");
const scrollPageToBottom = require('puppeteer-autoscroll-down');


// MY OCD of colorful console.logs for debugging... IT HELPS

const error = chalk.bold.red;

//const success = chalk.keyword("green");

(async () => {

  try {

    // open the headless browser

    var browser = await puppeteer.launch({ headless: false });

    // open a new page

    var page = await browser.newPage();

    await page.setViewport({width: 1920,height: 1000000});

    // enter url in page

    await page.goto(`https://www.bing.com/news/search?q=yourSearchquery&FORM=NWRFSH`);

    //await page.waitFor(3000);

    await page.waitFor(1000);

    await page.waitForSelector('li#tf span.tl');

    await page.click('li#tf span.tl');

    await page.waitForSelector('li#tf li:nth-child(2) > a');

    await page.click('li#tf li:nth-child(2) > a');

    await page.waitFor(2000);

    await page.waitForSelector("div#algocore div:nth-child(1) > div > div.caption > div.t_s > div.t_t > a");

    await page.hover('div#algocore');

    //const scrollstep = 260;
    //const lastPosition = await scrollPageToBottom(page,scrollstep);

    /* var x = await page.evaluate(() => {

      window.scrollTo(0,190000);

    }) */

    await page.waitFor(2000)

    var news = await page.evaluate(() => {

      var titleNodeList = {}

      for (var i = 1; i < 95; i++){

      var link = document.querySelector('div#algocore div:nth-child('+i+') > div > div.caption > div.t_s > div.t_t > a').getAttribute("href");

      var title = document.querySelector('div#algocore div:nth-child('+i+') > div > div.caption > div.t_s > div.t_t > a').innerText.trim();

      var desc = document.querySelector('div#algocore div:nth-child('+i+') > div > div.caption > div.t_s > div.snippet').innerText.trim();

      var auth = document.querySelector('div#algocore div:nth-child('+i+') > div > div.caption > div.t_s > div.t_t > a').getAttribute("data-author");

      //var imgsrc = document.querySelector('div#algocore > div:nth-child(1) > div > div.image > a > img').getAttribute("src");

      var timeLine = document.querySelector('div#algocore div:nth-child('+i+') > div > div.caption > div.source > span:nth-child(3)').innerText.trim();

      titleNodeList[i] = {title: title, link: link, description: desc, author: auth,time: timeLine}

      //console.log(titleNodeList)

      }

      return titleNodeList;



      //console.log('hey'+ titleNodeList);

      /* var ageList = document.querySelectorAll(`span.age`);

      var scoreList = document.querySelectorAll(`span.score`);

      var titleLinkArray = [];



        titleLinkArray[i] = {

          title: titleNodeList[i].innerText.trim(),

          link: titleNodeList[i].getAttribute("href"),

          age: ageList[i].innerText.trim(),

          score: scoreList[i].innerText.trim()

        };

      }

      return titleLinkArray; */

    });

    //console.log(news);

    //console.log(news.length);

    await browser.close();

    // Writing the news inside a json file

    news = JSON.stringify(news);
    //news = news.toString();
    console.log(news);

    /* fs.writeFile("hackernews.json", JSON.stringify(news), function(err) {

      if (err) throw err;

      console.log("Saved!");

    });

    console.log(success("Browser Closed"));

  } */}

  catch (err) {

    // Catch and display errors

    console.log(error(err));

    await browser.close();

    console.log(error("Browser Closed"));

  }
    const browser1 = await puppeteer.launch({headless : false});

    //const navigationPromise = page.waitForNavigation();

    const page1 = await browser1.newPage();

    await page1.setViewport({ width: 1500, height: 900 })

    await page1.goto('https://firebase.google.com/');

    await page1.click('devsite-user > div > a');

    await page1.waitForSelector('input#identifierId');

    await page1.click('input#identifierId');

    await page1.type('input#identifierId','testaccapp1234');

    await page1.waitForSelector('div#identifierNext > div.ZFr60d.CeoRYc');

    await page1.click('div#identifierNext > div.ZFr60d.CeoRYc');

    //await page.waitForSelector('div#initialView > div.xkfVF');

    //await page.click('div#initialView > div.xkfVF');
    await page1.waitFor(1000);

    await page1.waitForSelector('input[name="password"]');

    await page1.click('input[name="password"]');

    await page1.type('input[name="password"]','actingpause');

    await page1.click('div#initialView > div.xkfVF');

    await page1.waitForSelector('div#passwordNext span > span');

    await page1.click('div#passwordNext span > span');

    await page1.waitForSelector('div.devsite-top-logo-row-wrapper-wrapper > div > div > a');

    await page1.click('div.devsite-top-logo-row-wrapper-wrapper > div > div > a');

    await page1.waitForSelector('div:nth-child(4) > project-card > mat-card > div.spacer');

    await page1.click('div:nth-child(4) > project-card > mat-card > div.spacer');

    await page1.waitForSelector('div#nav-develop-tree-content fb-navbar-item:nth-child(2) > a > div');

    await page1.click('div#nav-develop-tree-content fb-navbar-item:nth-child(2) > a > div');

    await page1.waitForSelector('div#main fs-animate-changes:nth-child(1) > f7e-data-tree > div > div > div.database-key-value');

    await page1.hover('div#main fs-animate-changes:nth-child(1) > f7e-data-tree > div > div > div.database-key-value');

    await page1.waitForSelector('div#main fs-animate-changes:nth-child(1) > f7e-data-tree > div > div > div.database-buttons > mat-icon.material-icons.mat-icon.notranslate.mat-icon-no-color.ng-star-inserted');

    await page1.click('div#main fs-animate-changes:nth-child(1) > f7e-data-tree > div > div > div.database-buttons > mat-icon.material-icons.mat-icon.notranslate.mat-icon-no-color.ng-star-inserted');

    await page1.waitForSelector('div#field_value > input');

    await page1.click('div#field_value > input', { clickCount: 3 });

    await page1.keyboard.press('Backspace');

    //await page.evaluate( () => document.getElementById("div#field_value > input").value = "");
    //await page1.waitFor(1000);
    await page1.keyboard.sendCharacter(news);
    //await page1.waitFor(1000);
    //await page.waitForSelector('div#main mat-card-actions');

    //await page1.click('div#field_path > label');
    //await page1.waitFor(1000);
    await page1.hover('#main > ng-transclude > div > div > div > f7e-data > div > div > data > div > mat-card > div:nth-child(3) > f7e-inline-editor > mat-card > mat-card-content > form > mat-card-actions > div > button.f7e-update-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted > div.mat-button-ripple.mat-ripple')
    await page1.waitForSelector('#main > ng-transclude > div > div > div > f7e-data > div > div > data > div > mat-card > div:nth-child(3) > f7e-inline-editor > mat-card > mat-card-content > form > mat-card-actions > div > button.f7e-update-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted > div.mat-button-ripple.mat-ripple');

    //await page1.hover('div#main button[type="submit"].f7e-update-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused > span')
    await page1.waitFor(2000);
    await page1.click('#main > ng-transclude > div > div > div > f7e-data > div > div > data > div > mat-card > div:nth-child(3) > f7e-inline-editor > mat-card > mat-card-content > form > mat-card-actions > div > button.f7e-update-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted > div.mat-button-ripple.mat-ripple');
    await browser1.close();
})();
