async function getResource(endpoint) {
  try {
    const response = await fetch(
      `https://${process.env.GATSBY_API_TOKEN}.mockapi.io/blog/api${endpoint}`
    );

    return response.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * @param {import('gatsby').NodePluginArgs} nodeArgs
 */
exports.createPages = async function ({ actions }) {
  /**
   * @type {import('./src/types').Service[]}
   */
  const services = await getResource("/services");

  /**
   * @type {import('./src/types').Experience[]}
   */
  const experience = await getResource("/experience");

  actions.createPage({
    path: "/",
    component: require.resolve(`./src/templates/Home.js`),
    context: {
      services,
      experience,
    },
  });

  actions.createPage({
    path: "/experience",
    component: require.resolve(`./src/templates/Content.js`),
    context: {
      title: "Experience",
    },
  });

  actions.createPage({
    path: "/services",
    component: require.resolve(`./src/templates/Content.js`),
    context: {
      title: "Services",
    },
  });
};
