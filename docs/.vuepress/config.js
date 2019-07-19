module.exports = {
  base: '/code_rule/',
  title: '前端开发规范',
  dest: './dist',
  description: '规范前端团队的代码规范',
  head: [['link', { rel: 'icon', href: `/logo.jpg` }]],
  themeConfig: {
    repo: 'Shiyanping/code_rule',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'vuepress',
    editLinkText: '欢迎大家来补充',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '博客',
        link: 'https://shiyanping.github.io/'
      }
    ],
    sidebar: [
      './name_rule',
      './html',
      './css',
      './javascript'
    ]
  }
};
