
# AJAX

[XMLHttpRequest](https://wangdoc.com/javascript/bom/xmlhttprequest.html)

# 定义

AJAX 是Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页


AJAX 包括以下几个步骤
* 创建XMLHttpRequest实例
*　发出HTTP请求
* 接受服务器传回的请求
* 更新网页数据

```
//创建XMLHttpRequest实例
var xhr = new XMLHttpRequest();


// URL相对于执行代码的当前页面（当然也可以使用绝对路径）
//调用 open() 方法并不会真正发送请求，而只是启动一个请求以备发送。
xhr.open('GET', 'https://www.baidu.com/',true);

//要发送特定的请求，必须像下面这样调用 send() 方法：
xhr.open("get", "example.txt", false);
xhr.send(null);


//然后，指定回调函数，监听通信状态（readyState属性）的变化。

ajax.onreadystatechange = handleStateChange;

function handleStateChange() {
  // ...
}
```

注意，AJAX 只能向**同源网址**（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错

Example:

```

//创建XML实例
var xhr = new XMLHttpRequest();
 
 
xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);

```

## XMLHttpRequest.readyState

[XMLHttpRequest.readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

![alt text][./img/ajax_1.png]

通信过程中，每当实例对象发生状态变化，它的`readyState`属性的值就会改变。这个值每一次变化，都会触发`readyStateChange`事件。

```
var xhr = new XMLHttpRequest();

if (xhr.readyState === 4) {
  // 请求结束，处理服务器返回的数据
} else {
  // 显示提示“加载中……”
}

```

## XMLHttpRequest.onreadystatechange

* 指向一个监听函数
* 当`readyState`变化时，触发这个监听函数

```
var xhr = new XMLHttpRequest();
xhr.open( 'GET', 'http://example.com' , true );
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  }
  console.log(xhr.responseText);
};
xhr.send();

```