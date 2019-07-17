---
sidebarDepth: 0
---

## HTML 规范

### 语法：

- 缩进使用 tab（4 个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线（-）做分隔符；
- 不要在自动闭合标签结尾处使用斜线；

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company_logo.png" alt="Company" />

    <!-- 属性名全小写，用中划线（-）做分隔符 -->
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

### 标准模式

在开头规定 doctype，来启动标准模式，doctype 要大写。

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

### 规定字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  ...
</html>
```

### IE 兼容模式

用 meta 标签指定页面应该使用什么版本的 IE 来渲染。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  </head>
  ...
</html>
```

### 减少标签数量

在编写 HTML 代码时，需要尽量避免多余的父节点；

```html
<!-- bad -->
<span class="avatar">
  <img src="..." />
</span>

<!-- good -->
<img class="avatar" src="..." />
```

### 语义化标签

html 的标签能使用语义化的，尽量使用语义化标签，避免一个页面都是 div 或者 p 标签

```html
<!-- bad -->
<div>
  <p></p>
</div>

<!-- good -->
<header></header>
<footer></footer>
```
