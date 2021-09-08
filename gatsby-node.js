exports.createPages = async function ({actions, graphql}) {
  const {data} = await graphql(`
    query {
      server {
        queryRecipe {
          id
          slug
        }
      }
    }
  `);
  data.server.queryRecipe.forEach((recipe) => {
    actions.createPage({
      path: '/recipe/' + recipe.slug,
      component: require.resolve(`./src/templates/recipe.js`),
      context: {id: recipe.id},
    });
  });
};
