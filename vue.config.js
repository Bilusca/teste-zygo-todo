module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Organizador de Tarefas - ZYGO";
      return args;
    });
  },
  pwa: {
    name: "Organizador de tarefas - ZYGO",
    themeColor: "#892cdc",
    msTileColor: "#892cdc",
    appleMobileWebAppCache: "yes",
    workboxPluginMode: "GenerateSW",
    manifestOptions: {
      name: "Organizador de tarefas - ZYGO",
      shortName: "TODO - ZYGO",
      backgroundColor: "#892cdc",
      display: "standalone",
      scope: "/",
      startUrl: "/"
    },
    workboxOptions: {
      navigateFallback: "/index.html",
      skipWaiting: true
    }
  }
};
