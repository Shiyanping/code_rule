---
sidebarDepth: 0
---

## CSS 规范

### 缩进

使用 tab 缩进（4 个空格）

```css
.element {
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
```

### 分号

每个声明结束都要加分号

```css
.element {
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
```

### 注释

注释统一使用 /\* \*/

```css
.element {
  /* border-radius: 10px; */
  width: 50px;
  height: 50px;
}
```

### 引号

- url 的内容要用引号
- 属性选择器中的属性值需要引号

```css
.element:after {
  content: '';
  background-image: url('logo.png');
}

li[data-type='single'] {
  ...;
}
```

### 命名

- 类名使用小写字母，以中划线分隔
- id 采用驼峰式命名
- scss 中的变量、函数、混合、placeholder 采用驼峰式命名

```css
/* class */
.element-content {
  ...;
}

/* id */
#myDialog {
  ...;
}

/* 变量 */
$colorBlack: #000;

/* 混合 */
@mixin centerBlock {
  ...;
}
```
