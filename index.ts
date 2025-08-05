import { chromium } from "playwright";
import { retrieveDatabase } from "./src/notion";

const PROJECTS_DATABASE_ID = process.env.PROJECTS_DATABASE_ID;
const NOTION_TOKEN = process.env.NOTION_TOKEN;

console.log(PROJECTS_DATABASE_ID)
console.log(NOTION_TOKEN)

retrieveDatabase(PROJECTS_DATABASE_ID)

// async function main() {
//   const browser = await chromium.launch({ headless: true });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://google.com");
//   await page.waitForTimeout(1000);
//   console.log("this works!");
//   await browser.close();
// }
// main();
