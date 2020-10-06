
/**
 * Replace String with mapObj {key: val}
 * key => val
 * @param {String} str
 * @param {Array} mapArr
 * @returns
 */
function replaceAll(str, mapArr){
  mapArr.map(map => {
    str = str.replace(map[0], (matched) => {
      return map[1]
    })
  })

  return str
}

/**
 * Translate chinese to pinyin.
 * Compatible with vuepress-pluin-permalink-pinyin.
 * @param {Array} navArr
 */
function replaceNav(navArr, options) {
  navArr.map(nav => {
    if (nav.link) {
      nav.link = replaceAll(nav.link, options)
    }
    if (nav.items) {
      replaceNav(nav.items,options)
    }
  })
}


module.exports = (options, ctx) => {
  /**
 * Options for vuepress-plugin-autobar
 * nav.02.xxx => xxx
 * 01._-xxx => xxx
 */
  if (JSON.stringify(options) === '{}') {
    options = [[/nav[\.\-_]*\d*[\.\-_]*/gi, ''], [/\d+[\.\-_]+(?!html)/gi, '']]
  } else if (!(options[0] instanceof Array)) {
    options = [options]
  }
  
  return {
    async ready() {
      const {themeConfig} = ctx.getSiteData ? ctx.getSiteData() : ctx;

      // replace nav url
      if (themeConfig.nav && themeConfig.nav.length) {
        replaceNav(themeConfig.nav, options)
      }
    },
    // replace page url
    extendPageData ($page) {
      // $page.path was encoded by VuePress already.
      // Make sure original so I decode it once.
      const pathStr = decodeURIComponent($page.path)

      $page.path = replaceAll(pathStr, options)
    }
  }
}
