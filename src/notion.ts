import { Client } from "@notionhq/client";

export async function retrieveDatabase(databaseId: any) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const pages = [];
  let cursor = undefined;

  const shouldContinue = true;
  while (shouldContinue) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    });
    pages.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }

  console.log(`${pages.length} pages successfully fetched.`);
  console.log("************");
  console.log(pages);
}
