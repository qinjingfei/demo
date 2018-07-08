
# Promise 对象


## 定义

所谓Promise对象，就是代表了未来某个将要发生的事件（通常是一个异步操作）。它的好处在于，有了Promise对象，就可以将**异步**操作以**同步**操作的流程表达出来，**避免**了层层嵌套的回调函数.

[回调函数](https://github.com/HarleyWang93/blog/issues/19)

[callback hell](http://callbackhell.com/)

[Promise对象](https://wohugb.gitbooks.io/ecmascript-6/content/docs/
promise.html)

[Promise对象](http://javascript.ruanyifeng.com/advanced/promise.html)

## 基本用法

```
// f1和f2都是callback function
var p1 = new Promise(f1);
p1.then(f2);
```
`f1`的异步操作执行完成，就会执行`f2`

`Promise` 使得`f1`和`f2`变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。

```
// 传统写法
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // ...
      });
    });
  });
});

// Promise 的写法
(new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);

```

下面是Promise对象的基本用法。
```
var promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(value) {
  // failure
})
```

下面是一个使用Promise对象的简单例子。

```
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

timeout(100).then(() => {
  console.log('done');
});
```


下面是一个用Promise对象实现的Ajax操作的例子

```

var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.status === 200) { 
              resolve(this.response); 
          } else { 
              reject(new Error(this.statusText)); 
          }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});

```

`Promise.prototype.then`方法返回的是一个新的`Promise`对象，因此可以采用链式写法。

```
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // proceed
});

```