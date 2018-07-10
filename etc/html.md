
# HTML

## 目录

* HTML 常见元素和理解
* HTML版本
* HTML元素分类
* HTML元素嵌套关系
* HTML元素默认样式和定制化

## HTML常见的元素

### head里出现的元素

* meta
* title
* style
* link
* script
* base

### body里出现的元素

* div/section/article/aside/header/footer (区域)
* p (段落)
* span/em/strong （行内）
* table/thead/tbody/tr/td (表格)
* ul/ol/li/dl/dt/dd (列表)
* a
* form/input/select/textarea/button (表单)


`<em>`: emphasis(强调)
`<aside>`: sidebars(侧栏 )
`<thead>`: head of table
`<td>`: defines a cell of a table that contains data 	
`<dl>`: a description list
`<dt>`: specifies a term in a description or definition list
`<dd>`: provides the details about or the definition of the preceding term 



* <meta charset="utf-8">
	* charset(characterset) 字符集
* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

 [viewport MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

如果一个移动屏幕宽640px, 没有`width=device-width`，页面可能被渲染成一个980px的虚拟视口，并且将缩小去适应到640px的宽度。
 ![html_1](./html_1.png)


* <base href="/">
 * 指定基础路径, 所有路径都是以这个路径为基准 

### HTML重要的属性

* a[href, target]

```
<a href="http://www.qq.com">腾讯网</a>
<a href="http://www.taobao.com" target="_blank">淘宝网</a> <!--打开一个新标签 -->

```
* img[src, alt]
* table td[colspan, rowspan]

```
...
  <td colspan="2">数据1</td> <!--占据两列-->
...
  <td rowspan="2">数据1</td> <!--占据两行-->
...

```
* form[target, method, enctype]

```
<form method="GET" action="http://www.qq.com"></form>
```

* input[type, value]

```
 <p>
    <input type="text" name="text1" />
</p>
<p>
    <input type="password" name="password" />
</p>
<p>
    <input type="radio" name="radio1" id="radio1-1" />  <!--这里两个input的name是相同的，代表两个选项只能选一个-->
    <label >选项一</label>
    <input type="radio" name="radio1" id="radio1-2" />
    <label for="radio1-2">选项二</label> <!--这里的for可以让label和input里id进行关联，选label里的字，可以选中input-->
</p>
```

* button[type]

```
<button type="button">普通按钮</button>
<button type="submit">提交按钮一</button>  <!--将表单进行提交-->
<input type="submit" value="提交按钮二"/> 
<button type="reset">重置按钮</button>

```

* select > option[value]
* label[for]

[简单的demo](./1.html)

### 如何理解HTML

* HTML "文档"
* 描述文档的“结构”
* 有区块和大纲


## HTML版本

* HTML4/4.01(SGML)
* XHTML(XML) 
* HTML5 

### HTML5 新增内容

[new tag in h5](https://www.htmlgoodies.com/tutorials/html5/new-tags-in-html5.html)

[h5 MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[h5 cheatsheet](https://www.wpkube.com/html5-cheat-sheet/)

* 新增语义化标签
	* section/article 区域
	* nav 导航
	* aside 不重要内容
	* header/footer 头尾
	* main
	* 等

![html_2](./html_2.gif)

* 表单增强(新的input类型)
  * 日期、 时间 、 搜索（date, datetime, search）

 ![html_3](html_3.png)
  
* 绘画元素
	* canvas

* 媒体元素
	* video
	* audio
* 离线储存
	* localStorage: 长期储存数据，浏览器关闭后数据不丢失
	* sessionStorage: 浏览器关闭后自动删除

* 新技术
	* websocket
	* webworker
	* Geolocation 等
