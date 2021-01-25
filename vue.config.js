module.exports = {
  pwa: {
    name: "Organizador de tarefas - ZYGO",
    themeColor: "#892cdc",
    msTileColor: "#892cdc",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      name: "Organizador de tarefas - ZYGO",
      shortName: "TODO - ZYGO",
      backgroundColor: "#892cdc",
      display: "standalone",
      startUrl: "index.html"
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      setConfig: {
        debug: true
      },
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname == "/",
          method: "GET",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "myAppCache"
          }
        }
      ]
    }
  }
};
