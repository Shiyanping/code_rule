---
sidebarDepth: 0
---

## JavaScript 规范

### 缩进

使用 tab 缩进（4 个空格）

```js
if (x < y) {
  x += 10;
} else {
  x += 1;
}
```

### 变量命名

- 标准变量采用驼峰式命名
- 'ID'在变量名中全大写
- 'URL'在变量名中全大写
- 'Android'在变量名中大写第一个字母
- 'iOS'在变量名中小写第一个，大写后两个字母
- 常量全大写，用下划线连接
- 构造函数，大写第一个字母
- jquery 对象必须以'\$'开头命名

```js
var thisIsMyName;

var goodID;

var reportURL;

var AndroidVersion;

var iOSVersion;

var MAX_COUNT = 10;

function Person(name) {
  this.name = name;
}

// not good
var body = $('body');

// good
var $body = $('body');
```

### 变量声明

一个函数作用域中所有的变量声明尽量提到函数首部，用一个 var 声明，不允许出现两个连续的 var 声明。如果可以使用 let 和 const 的，要使用 let 和 const。

```js
function doSomethingWithItems(items) {
  // use one var
  let value = 10,
    result = value + 10,
    i,
    len;

  for (i = 0, len = items.length; i < len; i++) {
    result += 10;
  }
}
```

### 单行长度

不要超过 80，但如果编辑器开启 word wrap 可以不考虑单行长度。

### 分号

统一要加分号。

### 空格

以下几种情况不用写空格：

- 对象的属性名后
- 函数调用括号前
- 无论是函数声明还是函数表达式，'('前不要空格
- 数组的'['后和']'前
- 对象的'{'后和'}'前
- 运算符'('后和')'前

以下几种情况一定要写空格：

- 三元运算符'?:'前后
- 代码块'{'前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try,catch, finally, with, return, typeof
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'\*'后
- 对象的属性值前
- for 循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

例：

```js
// not good
var a = {
  b: 1
};

// good
var a = {
  b: 1
};

// not good
++x;
y++;
z = x ? 1 : 2;

// good
++x;
y++;
z = x ? 1 : 2;

// not good
var a = [1, 2];

// good
var a = [1, 2];

// not good
var a = (1 + 2) * 3;

// good
var a = (1 + 2) * 3;

// good
var doSomething = function(a, b, c) {
  // do something
};

// good
doSomething(item);

// not good
for (i = 0; i < 6; i++) {
  x++;
}

// good
for (i = 0; i < 6; i++) {
  x++;
}
```

### 空行

以下几种情况一定要有空行

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 文件最后保留一个空行

```js
var x = 1;

// 注释前要有空行
if (x >= 1) {
  var y = x + 1;
}
```

### 换行

换行的地方，行末必须有','或者运算符；

以下几种情况不需要换行：

- 下列关键字后：else, catch, finally
- 代码块'{'前

以下几种情况需要换行：

- 代码块'{'后和'}'前
- 变量赋值后

```js
// not good
var a = {
    b: 1
    , c: 2
};

x = y
    ? 1 : 2;

// good
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;

// good
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

// not good
function test()
{
    ...
}

// good
function test() {
    ...
}

// not good
var a, foo = 7, b,
    c, bar = 8;

// good
var a,
    foo = 7,
    b, c, bar = 8;
```

### 注释

#### 单行注释

- 注释单独一行的情况下，注释的//后面要跟一个空格
- 注释如果和代码同一行，代码分号结束后，要跟一个空格，注释的//后也要跟一个空格

例：

```js
// 调用函数
foo();

var maxCount = 10; // 这是一个变量
```

#### 多行注释

多行注释使用下面这种形式：

```js
/**
 * 代码注释1
 * 代码注释2
 */
```

建议在以下几种情况使用：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的 HACK 代码
- 业务逻辑强相关的代码

#### 函数注释

复杂的函数，所有类，都必须进行函数注释，函数注释使用业界统一的规范，方便后续使用 jsdoc 生成文档。

例：

```js
/**
 * 获取任务的名称
 * @param id {Number} 传入需要获取名称的人物id
 * @return {String} 返回的姓名
 * @author shi 2015/07/21 可以不写
 * @version 1.1.0 可以不写
 * @example 示例代码，可以不写
 */
function getTaskName(id) {
  let name = 'test';
  return name;
}
```

### 引号

最外层统一使用单引号

```js
// not good
var x = 'test';

// good
var y = 'foo',
  z = '<div id="test"></div>';
```

### 对象，数组

- 对象属性名不需要加引号；

- 对象以缩进的形式书写，不要写在一行；

- 数组、对象最后不要有逗号。

```js
// not good
var a = {
  b: 1
};

var a = { b: 1 };

var a = {
  b: 1,
  c: 2
};

// good
var a = {
  b: 1,
  c: 2
};
```

### 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：`if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, `with`。

```js
// not good
if (condition) doSomething();

// good
if (condition) {
  doSomething();
}
```

### undefined

永远不要直接使用 undefined 进行变量判断；

使用 typeof 和字符串'undefined'对变量进行判断。

```js
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

### 不允许存在多层嵌套的条件判断和循环（最多三层）

条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是**谨记不要写太长的三目运算符。**

例：

```js
// bad
if (x === 10) {
  return 'valid';
} else {
  return 'invalid';
}

// good
return x === 10 ? 'valid' : 'invalid';

// bad
if (!x) {
  if (!y) {
    x = 1;
  } else {
    x = y;
  }
}

// good
x = x || y || 1;
```

简单解释一下逻辑运算符，逻辑运算符主要有两种，一个是 `||` 逻辑或，一个是 `&&` 逻辑与。

- 逻辑或 ||：当前一个为真时，返回前一个值，前一个为假时返回后一个值。

```js
var x = 1;
console.log(x || 2); // 1

var y = 0;
console.log(y || 2); // 2
```

- 逻辑与 &&：当前一个为真时，返回后一个值，前一个为假时返回前一个值。

```js
var x = 1;
console.log(x && 2); // 2

var y = 0;
console.log(y && 2); // 0
```

### 其他 ESlint

- for-in 里一定要有 hasOwnProperty 的判断；
- 不要在内置对象的原型上添加方法，如 Array, Date；
- 变量不要先使用后声明；
- 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；
- 不要在同个作用域下声明同名变量；
- 不要在一些不需要的地方加括号，例：delete(a.b)；
- 不要使用未声明的变量；
- debugger 不要出现在提交的代码里；
- 数组中不要存在空元素；
- 不要在循环内部声明函数；
- 不要像这样使用构造函数；
- 不要声明了变量却不使用；

```js
// good
for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    // be sure that obj[key] belongs to the object and was not inherited
    console.log(obj[key]);
  }
}

// not good
Array.prototype.count = function(value) {
  return 4;
};

// not good
function test() {
  console.log(x);

  var x = 1;
}

// not good
new Person();

// good
var person = new Person();

// not good
delete obj.attr;

// good
delete obj.attr;

// not good
var a = [1, , , 2, 3];

// not good
var nums = [];

// not good
for (var i = 0; i < 10; i++) {
  (function(i) {
    nums[i] = function(j) {
      return i + j;
    };
  })(i);
}
```

### 其他

- 换行符统一用'LF'；
- 对上下文 this 的引用只能使用'\_this', 'that', 'self'其中一个来命名；
- 行尾不要有空白字符；
- 不允许有空的代码块。

```js
// not good
function Person() {
  // not good
  var me = this;

  // good
  var _this = this;

  // good
  var that = this;

  // good
  var self = this;
}

if (condition) {
}
```
