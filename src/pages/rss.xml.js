import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: "Gabe Szekely's Blog",
    // `<description>` field in output xml
    description:
      "Engineering blog focusing on software development, engineering hot takes, algorithms, frontend development, the programmer's lifestyle, and more.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
