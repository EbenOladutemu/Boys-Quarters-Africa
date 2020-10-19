module.exports = {
  css: {
    sourceMap: true
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  pwa: {
    name:"Boys Quarters Africa",
    shortName:"BQA",
    themeColor:"#212856",
    description: "We are a Movement resolved to educate, empower & advocate for a new tribe of boys who will deliberately & purposefully transition from Boyhood to Manhood.",
    icons:[
       {
          src:"./img/icons/android-chrome-192x192.png",
          sizes:"192x192",
          type:"image/png"
       },
       {
          src:"./img/icons/android-chrome-512x512.png",
          sizes:"512x512",
          type:"image/png"
       },
       {
          src:"./img/icons/android-chrome-maskable-192x192.png",
          sizes:"192x192",
          type:"image/png",
          purpose:"maskable"
       },
       {
          src:"./img/icons/android-chrome-maskable-512x512.png",
          sizes:"512x512",
          type:"image/png",
          purpose:"maskable"
       }
    ],
    startUrl:"./index.html",
    display:"standalone",
    backgroundColor:"#000000",
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
 }
}