---
sidebarDepth: 0
---

## 手摸手带你实践标准的前端规范

### 概述

掘金上发了"制定自己团队的前端开发规范"帖子之后，有好多人给我说光写规范可不行，要进行实践，这篇文章就是告诉大家怎么将我们之前写的规范进行实践，光说不练假把式，我们要在项目中强制执行这些规范。

主要使用 `husky`+`lint-staged`+`eslint` 对我们的规范进行实践，首先给大家介绍一下这几个工具都是干什么用的。

- eslint：就不多做介绍了，大家应该都知道，我们制定的规范需要用一些配置来实现，这个时候用 eslint 是最好不过的了。

- husky：可以用于实各种 `Git Hook`。这里主要用到 `pre-commit` 这个 hook，在执行 commit 之前，运行一些自定义操作。

- lint-staged：用于对 Git 暂存区中的文件执行代码检测。

知道了这几个包的作用之后，我们开始从头给一个项目实现一套在提交代码之前的 eslint 检测。

### ESlint

首先开始配置一下自己的 eslint，大家不要着急，我下面会放出来我之前规范配套的 eslint 配置，直接复制粘贴就行。

进入你的项目中，我这里新建一个项目开始配置

```bash
# 要遵循文件夹命名规范
mkdir eslint_test
cd eslint_test
# 一路回车就行
npm init
# 安装 eslint 和 babel-eslint
npm i eslint babel-eslint -D
```

接着我们在项目的根目录下创建 eslint 的相关文件：

```bash
# eslint 要忽略的文件
touch .eslintignore
# eslint 的规则
touch .eslintrc.js
```

在 `.eslintignore` 文件中填写 eslint 要过滤的文件

```
build/*.js
src/assets
public
dist
```

打开这个链接 [https://juejin.im/post/5d3130be6fb9a07eb74b7621](https://juejin.im/post/5d3130be6fb9a07eb74b7621)，去 copy 一下我根据之前规范制定的 eslint 配置，复制之后，粘贴到 `.eslintrc.js` 中。

接下来我们要配置一下 package.json 里面的执行脚本：

```json
"scripts": {
  "lint": "eslint --ext .js --fix"
}
```

主要是检测 js 代码，然后通过 `--fix` 把 eslint 能解决的问题都在检测的时候解决掉，比如格式，比如变量合并。

OK 了，eslint 的规范我们已经制定完了，接下来就要在 git 提交代码的时候对我们所写的代码进行检测了。

### husky+lint-staged

先安装一下我们需要的 npm 包：

```bash
npm i lint-staged husky -D
```

接下来要在 package.json 里面配置一下我们的 git 钩子：

```json
{
  "name": "eslint_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint --ext .js --fix"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.js": ["eslint --fix", "git add"]
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-eslint": "^10.0.2",
    "eslint": "^6.1.0",
    "husky": "^3.0.1",
    "lint-staged": "^9.2.1"
  }
}
```

husky 里面定义了 git 的钩子函数，我们主要在 commit 之前进行检查，所以用到了 pre-commit 这个钩子。

lint-staged 在 pre-commit 的时候执行，定义了对 git 暂存区中的文件执行的任务，我们这里只对 js 文件做 eslint 的格式化校验。

但是这里有个小坑，大家一定要注意一下：

**因为 pre-commit 这个钩子是需要配合 git 去用的，它主要对文件夹 `.git/hooks/pre-commit` 文件做手脚，当我们从 git 上拉下来项目时，如果之前没对 hooks 下的文件做修改，那 hooks 下的文件都是以 sample 结尾的，这个时候钩子函数是不起作用的，当我们安装了 husky 之后，husky 会自动对 hooks 下面的文件做修改，当你安装完 husky 之后，再打开 `.git/hooks` 文件夹，你会发现所有的钩子文件，都会存在一份带有.sample 的，一份不带.sample 的，不带.sample 的文件就是 husky 创建的，这个才会让 git 钩子起作用。所以我们最好是先拉项目，然后再安装 husky，否则可能会导致 husky 失效。如果你是新开发项目，开发完后才提交到 git，开发完之后，你可以先关联 git 仓库，然后重新安装一下 husky 这个包就可以了。**

这一套配置下来就可以把我们之前制定的前端规范强制执行了，怎么样，你会将这一套用到自己的项目中吗？目前我自己就在用，感觉还是很不错的，可以规避很多细节上的问题，如果你还没用上这一套，那你就需要赶快去实践一下了。

## 阅读完后两部曲

非常感谢各位花时间阅读完，衷心希望各位小伙伴可以花少量的时间帮忙做两件事：

- 动动你的手指，帮忙点个 star 吧，你的点赞是对我最大的动力。

- 希望各位关注一下我的公众号，新的文章第一时间发到公众号，公众号主要发一些个人随笔、读书笔记、还有一些技术热点和实时热点，并且还有非常吸引人的我个人自费抽奖活动哦~

![](https://user-gold-cdn.xitu.io/2019/7/16/16bfa1cb0db942ad?w=2800&h=800&f=jpeg&s=152910)
