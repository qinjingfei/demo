
# Vue图片轮播

[codepen](https://codepen.io/jingfei/pen/PaVyom)

[Vue轮播效果](https://qinjingfei.github.io/demo/vue_slide/index.html)

## 功能

 *  需要实现图片自动轮播（每过几秒切换一张图片）
 *  需要实现切换图片之间的动画效果

## 要点

 * 图片轮播

 * 动画效果


## 知识点

 * `setInterval()` 和 `clearInterval()`

 语法

 ```
  //setInterval()
  let intervalID = window.setInterval(func, delay, [ param1, param2, ...]);
  let intervalID = window.setInterval(code, delay);
  //clearInterval()
  window.clearInterval(intervalID)
 ```
 `intervalID` 是此重复操作的唯一辨识符，可以作为参数传给`clearInterval()`。

 [setInterval更多](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)

 * vue如何渲染组建后自动执行某个函数?(Vue生命周期)
 简单来说在created或者mounted中添加函数

 ```
 mounted:function(){
    this.go()
  }
 ```
 具体请看 [Vue生命周期](https://cn.vuejs.org/v2/guide/instance.html "Vue生命周期")
 它可以总共分为8个阶段：
 beforeCreate（创建前）,created（创建后）,beforeMount(载入前),mounted（载入后）, beforeUpdate（更新前）,updated（更新后）,beforeDestroy（销毁前）,destroyed（销毁后）

 图片如下[![](https://cn.vuejs.org/images/lifecycle.png)](https://cn.vuejs.org/images/lifecycle.png)

 * CSS transition的使用

 对CSS transition 不熟悉
 
 ```
 transition: property duration timing-function delay;
 ```

 ```
.list-enter-to {
  transition: all 2s ease;
  transform: translateX(0);
 }
 ```
 [transition time-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp "transition time-function")

 * Vue transition-group的使用

 这个是最坑的，弄了半天,说一下要注意的点吧
 transition-group 总是需要提供唯一的 **key** 属性值
 `v-show="index===currentIndex"`要放到`<li>`中，不是`<img>`中

 ```
 <transition-group tag="ul" name="list" class="imagebox">
    <li v-for="(item,index) in imagebox" :key="index" v-show="index===currentIndex">
     <a href="#">
       <img :src="item.src":alt="item.desc" @mouseenter="stop" @mouseleave=go >
      </a>
    </li>
  </transition-group>
```

 [Vue transition-group](https://cn.vuejs.org/v2/guide/transitions.html "Vue transition-group")

## Bugs
 说一下目前还存在的bug
 * `transition`变化的效果持续两秒，但是如果通过下面虚线来切换图片的时间少于两秒，图片不会切换

 在纯JS中可以使用`transitionend`停止

 ```
key.addEventListener('transitionend', removeTransition);
 ```
 [具体请看Drum Kit中的代码](https://github.com/qinjingfei/JS30/blob/master/01%20-%20JavaScript%20Drum%20Kit/index-FINISHED.html)

 但是VueJS里目前还不知道怎么解决

 * 图片切换只能从右向左，但是通过虚线切换图片的时候，图片切换效果有时会是从左往右切换
 
## 一些有用的链接

 [Vue 的生命周期](https://cn.vuejs.org/v2/guide/instance.html "Vue 的生命周期")
 [transition time-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp "transition time-function")
 [Vue transition-group](https://cn.vuejs.org/v2/guide/transitions.html "Vue transition-group")
 [vue实现轮播](https://segmentfault.com/a/1190000008828755 "vue实现轮播")
