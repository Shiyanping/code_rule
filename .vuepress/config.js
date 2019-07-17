module.exports = {
  base: '/',
  title: '开发工具集',
  dest: './dist',
  description: '将开发中经常用到的工具，第三方库，插件进行一个总结，以便后续开发使用。',
  head: [['link', { rel: 'icon', href: `/logo.jpg` }]],
  themeConfig: {
    repo: 'Shiyanping/fe-tool',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'vuepress',
    editLinkText: '欢迎大家来补充',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '博客',
        link: 'https://shiyanping.github.io/'
      },
      {
        text: '简历',
        link: 'https://shiyanping.github.io/resume/'
      }
    ],
    sidebar: [
      {
        title: '开发工具',
        collapsable: false,
        children: ['tools/developTools', 'tools/chrome', 'tools/vscode', 'tools/mac']
      },
      {
        title: '前端库/框架',
        collapsable: false,
        children: ['library/library', 'library/frame']
      },
      {
        title: '学习资源',
        collapsable: false,
        children: ['study/document', 'study/website', 'study/books', 'study/team']
      },
      {
        title: '博客',
        collapsable: false,
        children: ['blog/noMyBlog', 'blog/myBlog']
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'other/language',
          'other/js/',
          'other/css/'
          // {
          //   title: 'CSS总结',
          //   collapsable: false,
          //   children: ['other/css/border', 'other/css/reset', 'other/css/oftenUse']
          // }
        ]
      }
      // {
      //   title: 'JS总结',
      //   collapsable: false,
      //   children: [['vuex/', 'Introduction'], 'vuex/init', 'vuex/api', 'vuex/plugin']
      // }
    ]
  }
};
