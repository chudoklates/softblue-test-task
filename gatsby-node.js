async function getResource(endpoint) {
  try {
    const response = await fetch(`${process.env.API_LINK}${endpoint}`);

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
   * @type {import('./src/types').Comment[]}
   */
  const comments = await getResource("/comments");

  /**
   * @type {import('./src/types').Experience[]}
   */
  const experience = await getResource("/experience");

  actions.createPage({
    path: "/",
    component: require.resolve(`./src/templates/Home.js`),
    context: {
      services,
      comments,
      experience,
    },
  });

  actions.createPage({
    path: "/experience",
    component: require.resolve(`./src/templates/Content.js`),
    context: {
      title: "Services",
      comments,
    },
  });

  actions.createPage({
    path: "/services",
    component: require.resolve(`./src/templates/Content.js`),
    context: {
      title: "Experience",
      comments,
    },
  });
};
