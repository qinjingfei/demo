
# let 和 const 命令

[let和const命令](https://wohugb.gitbooks.io/ecmascript-6/content/docs/let.html)


## `let` 的用法

* `let`声明的变量只在它所在的代码块有效。

```

{
    let a = 10;
    var b = 1;
}

a // ReferenceError: a is not defined.
b //1
```

* `let`适合在for loop中使用

```
// without let
var a = [];
for (var i = 0; i < 10; i++) {
  var c = i;
  a[i] = function () {
    console.log(c);
  };
}
a[6](); // 9


//with let
var a = [];
for (var i = 0; i < 10; i++) {
  let c = i;
  a[i] = function () {
    console.log(c);
  };
}
a[6](); // 6
```
* `let`不会**变量提升**


```
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
```

* `let` 不允许在相同作用域内，重复声明同一个变量

```

// 报错
{
    let a = 10;
    var a = 1;
}

// 报错
{
    let a = 10;
    let a = 1;
}
```


* `let`实际上为JavaScript新增了块级作用域。

```
function f1() {
  let n = 5;       //第一次声明
  if (true) {      //一直成立
      let n = 10;  // 相当于第二次声明，报错（同上）
  }
  console.log(n); // 5
}

```

如果使用var定义变量n，最后输出的值就是10。

## `const` 的用法

* `const`声明的常量。（一旦声明，常量的值就不能改变）

* `const` 只在声明所在的块级作用域内有效。

```
if (condition) {
    const MAX = 5;
}

// 常量MAX在此处不可得
```

* `const` 不可重复声明