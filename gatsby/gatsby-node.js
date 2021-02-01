import path from "path";

async function turnWorkIntoPages({ graphql, actions }) {
  const workTemplate = path.resolve("./src/templates/Work.js");
  const { data } = await graphql(`
    query {
      works: allSanityWork {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);

  data.works.nodes.forEach((work) => {
    actions.createPage({
      path: `work/${work.slug.current}`,
      component: workTemplate,
      context: {
        slug: work.slug.current,
        stefan: "did this himself",
      },
    });
  });
}

export async function createPages(params) {
  await turnWorkIntoPages(params);
}
