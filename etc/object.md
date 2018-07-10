# 创建对象和继承的几种方式


## 创造对象

### 对象字面量

```
var a = {}

```

### 工厂模式

用函数来封装以特定接口创建对象的细节


```
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	}
	return o;
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer')
var person2 = createPerson("Greg", 27, "Doctor");

```

工厂模式创建对象不需要用`new`

### 构造函数模式

```
function Person(name, age, job){
	this.name = name;
	this.job = job;
	this.age = age;
	this.sayName = function(){
		alert(this.name)
	};
}

var person1 = new Person('Nicholas', 29, 'Software Engineer');
var person2 = new Person('Greg', 27, 'Doctor');

```

构造函数模式与工厂模式不同之处:

* 没有显性地创建对象
* 直接将属性和方法赋值给`this`对象
* 没有`return` 语句
* 创建对象需要用`new`

缺点：

* 每个方法都要在每个实例上重新创建一遍

```
person1.sayName == person2.sayName //false
```

### 原型模式

```
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name)
}

var person1 = new Person();
person1.sayName() // "Nicholas"

var person2 = new Person();
person2.sayName(); //"Nicholas";
alert(person1.sayName == person2.sayName); //true

```

### 组合使用构造函数和原型模式

```
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}
Person.prototype = {
	constructor : Person,
	sayName : function(){
	alert(this.name);
}
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Count,Van"
alert(person2.friends); //"Shelby,Count"
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true

```
构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存

## 继承的几种方式

[js常见的继承方法](https://juejin.im/entry/5993eeaa51882524382f3c0b)
[原型继承](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000)

### 原型链继承

原型继承：把父类的私有+公有的属性和方法，都作为子类公有的属性。
核心：不是把父类私有+公有的属性克隆一份一模一样的给子类的公有吧；他是通过__proto__建立和子类之间的原型链，当子类的实例需要使用父类的属性和方法的时候，可以通过__proto__一级级找上去使用；


```
function Parent(){
   this.x = 199;
   this.y = 299;
}
Parent.prototype.say = function(){
   console.log('say')
}
function Child(){
   this.g = 90;
}
Child.prototype = new Parent();
var p = new Parent();
var c = new Child();
console.dir(c)


```

### `call` 继承


