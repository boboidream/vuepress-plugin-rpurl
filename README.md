# vuepress-plugin-rpurl

## install
```bash
npm install boboidream/vuepress-plugin-rpurl -D
```

## Use
### Default
```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: ['rpurl']
}
```

The Default configuration is for vuepress-plugin-autobar, it clean the cumbersome parameter.

Default Rule: `[[/nav[\.\-_]*\d*[\.\-_]*/gi, ''], [/\d+[\.\-_]*/gi, '']]`

* before use:
`/nav.10.js/10-core/mian-xiang-dui-xiang/mian-xiang-dui-xiang.html`

* after use:
`/js/core/mian-xiang-dui-xiang/mian-xiang-dui-xiang.html`

### Customize
You can customize your replace rules. Example:

```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: ['rpurl', [/regex/i, 'new world']]
  // or multiple rules
  // plugins: ['rpurl', [[/regex1/, 'world'], [/regex2/gi, 'world2']]]
}
```

