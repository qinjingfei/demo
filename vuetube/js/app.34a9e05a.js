(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],u=0,v=[];u<n.length;u++)r=n[u],o[r]&&v.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},i=[];function r(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d688836"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=o[t]=[e,s]});e.push(a[2]=s);var i,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=r(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,a[1](r)}o[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,l.appendChild(c)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),o=a.n(s);o.a},"0e2e":function(t,e,a){"use strict";var s=a("4590"),o=a.n(s);o.a},4590:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/dashboard"}},[t._v("VueTube")]),t._m(0)],1),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[t.isAuthenticated?a("div",{staticClass:"field"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.showCategoryForm=!t.showCategoryForm}}},[t._v("\n                  Add category\n                ")])]),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.showMovieForm=!t.showMovieForm}}},[t._v("Add movie")])]),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-danger",on:{click:t.logout}},[t._v("Log out")])])])]):a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("router-link",{staticClass:"button is-primary",attrs:{to:"/signup"}},[t._v("Signup")])],1),a("p",{staticClass:"control"},[a("router-link",{staticClass:"button is-info",attrs:{to:"/login"}},[t._v("Login")])],1)])])])])]),a("div",{staticClass:"modal",class:{"is-active":t.showCategoryForm}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addCategory(e)}}},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._m(1)])]),a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.showCategoryForm=!t.showCategoryForm}}})]),a("div",{staticClass:"modal",class:{"is-active":t.showMovieForm}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addMovie(e)}}},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"input",attrs:{type:"text",placeholder:"URL"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),a("div",{staticClass:"field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.category=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"empty",selected:""}},[t._v("Choose category")]),t._l(t.categories,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n              "+t._s(e.title)+"\n            ")])})],2)]),t._m(2)])]),a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.showMovieForm=!t.showMovieForm}}})]),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("button",{staticClass:"button is-success"},[t._v("Add")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("button",{staticClass:"button is-success"},[t._v("Add")])])}],r=a("8aa5"),n=a.n(r),l={data:function(){return{isAuthenticated:!1,showCategoryForm:!1,showMovieForm:!1,title:"",url:"",category:"empty",categories:[]}},firestore:function(){return{categories:et.collection("categories")}},created:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e&&(t.isAuthenticated=!0,t.$router.push("dashboard"))})},methods:{addCategory:function(){var t={title:this.title};et.collection("categories").add(t),this.showCategoryForm=!1,this.title=""},addMovie:function(){if(this.title&&"empty"!==this.category){var t={title:this.title,url:this.url};et.collection("categories").doc(this.category).collection("movies").add(t),this.title="",this.url="",this.category="empty",this.showMovieForm=!1}else alert("You have to fill out all the fields!")},logout:function(){var t=this;n.a.auth().signOut().then(function(){t.isAuthenticated=!1,t.$router.push("login")})}}},c=l,u=(a("034f"),a("2877")),d=Object(u["a"])(c,o,i,!1,null,null,null);d.options.__file="App.vue";var v=d.exports,p=a("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},_=b,C=(a("0e2e"),Object(u["a"])(_,h,g,!1,null,"52d4bec5",null));C.options.__file="HelloWorld.vue";var y=C.exports,w={name:"home",components:{HelloWorld:y}},k=w,j=Object(u["a"])(k,m,f,!1,null,null,null);j.options.__file="Home.vue";var x=j.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h1",{staticClass:"title"},[t._v("Sign up")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(0),t.error?a("article",{staticClass:"message is-danger"},[a("div",{staticClass:"message-body"},[t._v("\n                    "+t._s(t.error)+"\n                ")])]):t._e()])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-success"},[t._v("Submit")])])])}],$={name:"signup",data:function(){return{email:"",password:"",isAuthenticated:!1,error:null}},created:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e&&(t.isAuthenticated=!0,t.$router.push("dashboard"))})},methods:{signup:function(){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(e){return t.error=e.message})}}},P=$,S=Object(u["a"])(P,A,E,!1,null,null,null);S.options.__file="Signup.vue";var N=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h1",{staticClass:"title"},[t._v("Log in")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(0),t.error?a("article",{staticClass:"message is-danger"},[a("div",{staticClass:"message-body"},[t._v("\n                    "+t._s(t.error)+"\n                ")])]):t._e()])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-success"},[t._v("Submit")])])])}],F={name:"login",data:function(){return{email:"",password:"",isAuthenticated:!1,error:null}},created:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e&&(t.isAuthenticated=!0,t.$router.push("dashboard"))})},methods:{login:function(){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(e){return t.error=e.message})},logout:function(){var t=this;n.a.auth().signOut().then(function(){t.isAuthenticated=!1})}}},T=F,D=Object(u["a"])(T,O,M,!1,null,null,null);D.options.__file="Login.vue";var L=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Dashboard")]),a("div",{staticClass:"tabs"},[a("ul",[a("li",{class:{"is-active":"Newest"===t.activeCategory}},[a("a",{on:{click:function(e){t.setCategory("Newest")}}},[t._v("Newest")])]),t._l(t.categories,function(e){return a("li",{class:{"is-active":t.activeCategory===e.title}},[a("a",{on:{click:function(a){t.setCategory(e.title)}}},[t._v(t._s(e.title))])])})],2)]),"Newest"===t.activeCategory?a("tab-movie",{attrs:{category:"Newest",categories:t.categories}}):t._e(),t._l(t.categories,function(e){return t.activeCategory===e.title?a("tab-movie",{key:e.id,attrs:{category:e.id}}):t._e()})],2)},W=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline"},t._l(t.movies,function(e){return a("div",{key:e.id,staticClass:" column is-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("iframe",{attrs:{src:t.embedable(e.url),width:"100%",height:"200",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),a("div",{staticClass:"content"},[t._v("\n                "+t._s(e.title)+"\n            ")]),a("div",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item button is-danger",on:{click:function(a){t.deleteMovie(e)}}},[t._v("\n                    Delete\n                ")])])])])}))},z=[],B=(a("28a5"),a("ac6a"),{name:"TabMovie",props:{category:String,categories:Array},data:function(){return{movies:[]}},mounted:function(){var t=this;if("Newest"===this.$props.category)for(var e=function(){var e=t.categories[a].id;et.collection("categories").doc(e).collection("movies").get().then(function(a){a.forEach(function(a){t.movies.length<7&&t.movies.push({title:a.data().title,url:a.data().url,id:a.id,category:e})})})},a=0;a<this.categories.length;a++)e()},firestore:function(){if("Newest"!==this.$props.category)return{movies:et.collection("categories").doc(this.$props.category).collection("movies")}},methods:{embedable:function(t){return"https://youtube.com/embed/".concat(t.split("=")[1])},deleteMovie:function(t){if("Newest"===this.category){var e;et.collection("categories").doc(t.category).collection("movies").doc(t.id).delete();for(var a=0;a<this.movies.length;a++)if(t.id===this.movies[a].id){e=a;break}this.movies.splice(e,1)}else et.collection("categories").doc(this.category).collection("movies").doc(t.id).delete()}}}),J=B,U=Object(u["a"])(J,H,z,!1,null,null,null);U.options.__file="TabMovie.vue";var V=U.exports,Y={name:"dashboard",components:{TabMovie:V},data:function(){return{categories:[],activeCategory:"Newest"}},firestore:function(){return{categories:et.collection("categories")}},methods:{setCategory:function(t){this.activeCategory=t}}},R=Y,q=Object(u["a"])(R,I,W,!1,null,null,null);q.options.__file="Dashboard.vue";var K=q.exports;s["a"].use(p["a"]);var X=new p["a"]({base:"",routes:[{path:"/",name:"home",component:x},{path:"/signup",name:"signup",component:N},{path:"/login",name:"login",component:L},{path:"/dashboard",name:"dashboard",component:K},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),G=a("2f62");s["a"].use(G["a"]);var Q=new G["a"].Store({state:{},mutations:{},actions:{}}),Z=a("0ff2");a("e71f");a.d(e,"db",function(){return et}),s["a"].config.productionTip=!1,s["a"].use(Z["a"]);var tt={apiKey:"AIzaSyCkPOJ4dDh3PbI9nuTWt62B3Y8S-_pzXe4",authDomain:"vuetube-89add.firebaseapp.com",databaseURL:"https://vuetube-89add.firebaseio.com",projectId:"vuetube-89add",storageBucket:"vuetube-89add.appspot.com",messagingSenderId:"179042310881"};n.a.initializeApp(tt);var et=n.a.firestore(),at={timestampsInSnapshots:!0};et.settings(at),new s["a"]({router:X,store:Q,render:function(t){return t(v)}}).$mount("#app")},c21b:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.34a9e05a.js.map