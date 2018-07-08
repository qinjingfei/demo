# 变量的解构赋值

[阮一峰变量的解构赋值](https://wohugb.gitbooks.io/ecmascript-6/content/docs/destructuring.html)


ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

## 数组的解构解构

```

// ES6允许写成下面这样。
var [a, b, c] = [1, 2, 3];



//本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
var [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

var [,,third] = ["foo", "bar", "baz"];
third // "baz"

var [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

//如果解构不成功，变量的值就等于`undefined`
var [foo] = [];
var [foo] = 1;
var [foo] = 'Hello';
var [foo] = false;
var [foo] = NaN;
var [bar, foo] = [1];


//不完全解构
var [x, y] = [1, 2, 3];
x // 1
y //2

//如果对undefined或null进行解构，会报错。
// 报错
var [foo] = undefined;
var [foo] = null;

//这是因为解构只能用于数组或对象。其他原始类型的值都可以转为相应的对象，但是，undefined和null不能转为对象，因此报错。


//解构赋值允许指定默认值。
var [foo = true] = [];
foo // true
[x, y='b'] = ['a'] // x='a', y='b'
[x, y='b'] = ['a', undefined] // x='a', y='b'


//解构赋值不仅适用于var命令，也适用于let和const命令
var [v1, v2, ..., vN ] = array;
let [v1, v2, ..., vN ] = array;
const [v1, v2, ..., vN ] = array;

//对于Set结构，也可以使用数组的解构赋值。

[a, b, c] = new Set(["a", "b", "c"])
a // "a"


```

## 对象的解构赋值

```

var { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"


//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
var { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

var { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined


//如果变量名与属性名不一致，必须写成下面这样。
var { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"

//和数组一样，解构也可以用于嵌套结构的对象。
var o = {
  p: [
    "Hello",
    { y: "World" }
  ]
};

var { p: [x, { y }] } = o;
x // "Hello"
y // "World"


//对象的解构也可以指定默认值。

var { x = 3 } = {};
x // 3

var {x, y = 5} = {x: 1};
console.log(x, y) // 1, 5

```

## 用途

*　交换变量的值

```
[x, y] = [y, x];
```

* 从函数返回多个值

```
// 返回一个数组

function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = example();

```

* 函数参数的定义

```

function f([x]) { ... }

f(['a'])

function f({x, y, z}) { ... }

f({x:1, y:2, z:3})

```

这种写法对提取JSON对象中的数据，尤其有用。


* 函数参数的默认值

```
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};

```

* 遍历Map结构

```

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

```

* 输入模块的指定方法

```
const { SourceMapConsumer, SourceNode } = require("source-map");

```