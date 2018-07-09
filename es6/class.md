# Class and Module


[Class && Module](https://wohugb.gitbooks.io/ecmascript-6/content/docs/class.html)

## Class

ES5 通过构造函数，定义并生成新对象

```
function Point(x,y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return `(${this.x}, ${this.y})`;
}

```

ES6 

```
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

}

var point = new Point(2,3);
point.toString() // (2, 3)

```

Class之间可以通过extends关键字，实现继承。

```
class ColorPoint extends Point {}
```

```
class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 等同于super.constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color+' '+super();
  }

}

```

在constructor方法内，super指代父类的constructor方法；在toString方法内，super指代父类的toString方法。

# Module的基本用法


在ES6之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。

## export && import

* export命令用于用户自定义模块，规定对外接口
* import命令用于输入其他模块提供的功能，同时创造命名空间（namespace），防止函数名冲突

ES6允许将独立的JS文件作为模块，也就是说，允许一个JavaScript脚本文件调用另一个脚本文件。该文件内部的所有变量，外部无法获取，必须使用export关键字输出变量。下面是一个JS文件，里面使用export关键字输出变量。

```
//第一种写法
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;


//第二种写法
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};

// main.js

import {firstName, lastName, year} from './profile';

function sfirsetHeader(element) {
  element.textContent = firstName + ' ' + lastName;
}

```

如果想为输入的变量重新取一个名字，import语句中要使用as关键字

```
import { lastName as surname } from './profile';

```

## 模块的整体输入，module命令

```
//export命令除了输出变量，还可以输出方法或类（class）
// circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

// main.js
import { area, circumference } from 'circle';
console.log("圆面积：" + area(4));
console.log("圆周长：" + circumference(14));

//上面写法是逐一指定要输入的方法。另一种写法是整体输入
import * as circle from 'circle';
console.log("圆面积：" + circle.area(4));
console.log("圆周长：" + circle.circumference(14));


//module命令可以取代import语句，达到整体输入模块的作用。
// main.js
module circle from 'circle';
console.log("圆面积：" + circle.area(4));
console.log("圆周长：" + circle.circumference(14));

```

## export default命令

如果想要输出匿名函数，可以使用export default命令.
其他模块输入该模块时，import命令可以为该匿名函数指定任意名字。

```
// export-default.js
export default function () {
    console.log('foo');
}


// import-de加载的时候，视同匿名函数加载
//default.js
import customName from './export-default';
customName(); // 'foo'
```
需要注意的是，这时import命令后面，不使用大括号

export default命令用在非匿名函数前，也是可以的。加载的时候，视同匿名函数加载

```
//customName 为默认方法
import customName, { otherMethod } from './export-default'; 
```

## 模块的继承

假设有一个circleplus模块，继承了circle模块。

```
// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
    return Math.exp(x);
}

```
上面代码中的“export *”，表示输出circle模块的所有属性和方法，export default命令定义模块的默认方法