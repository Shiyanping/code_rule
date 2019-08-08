---
sidebarDepth: 0
---

## Eslint 配置文件

为了大家方便，我将之前长长的 eslint 进行了更换，因为时间原因和使用方面的原因，没将自己的 eslint 上传成 eslint-config，直接使用腾讯的 eslint-config-alloy。

**开干：**

以下是之前写的[前端开发规范](https://juejin.im/post/5d300e0fe51d4577407b1dff)配套的 eslint，使用了腾讯的 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)，加上对某些规则进行了修改，如 2 个空格，可以直接使用 new Vue()。主要是针对 vue 的 eslint，如果需要配置 JS、TS、react 的，可以打开 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) 根据说明配置。

具体每一条规则什么意思都可以在[腾讯 eslint 文档](https://alloyteam.github.io/eslint-config-alloy/)中查看，写的很简洁明了，还有示例。

大家可以复制一下下面的配置，然后转到我新写的[手摸手带你实践标准的前端规范](https://juejin.im/post/5d3aa57f6fb9a07ed524e5a6)，直接开搞，把之前的前端规范进行实践一下。

**重点来咯，放大招：**

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint-config-alloy/vue", "prettier"],

  // 可以添加自己的规则，可以参考 eslint-config-vue 和 腾讯的 eslint
  // https://github.com/vuejs/eslint-config-vue
  // https://alloyteam.github.io/eslint-config-alloy/
  rules: {
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    // vue 中 script 的空格
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],
    // vue 中 template 的空格
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    // 缩进使用 tab
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1
      }
    ],
    // 可以直接只用 new Vue()
    "no-new": 0,
    // 线上禁用debugger
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // parseInt 可以不传第二个参数
    radix: 0
  }
};
```

目前大概就这些，希望小伙伴们在实践中有觉得不舒服的，可以给我反馈一下，我再改，规则还是要通过实践才之后具体适不适合大部分人，谢谢各位了~

## 阅读完后两部曲

非常感谢各位花时间阅读完，衷心希望各位小伙伴可以花少量的时间帮忙做两件事：

- 动动你的手指，帮忙点个 star 吧，你的点赞是对我最大的动力。

- 希望各位关注一下我的公众号，新的文章第一时间发到公众号，公众号主要发一些个人随笔、读书笔记、还有一些技术热点和实时热点，并且还有非常吸引人的我个人自费抽奖活动哦~

![](https://user-gold-cdn.xitu.io/2019/7/16/16bfa1cb0db942ad?w=2800&h=800&f=jpeg&s=152910)
