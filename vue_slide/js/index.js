var app = new Vue({
  el: "#app",
  data:{
    imagebox:[{
  src:"https://s25.postimg.cc/vjnp8gmy7/banner_00.jpg",
    desc: 0
  },{
    src:"https://s25.postimg.cc/3wazud9hb/banner_01.jpg",
    desc: 1
  },{
    src:"https://s25.postimg.cc/6qe57u6in/banner_02.jpg",
    desc:2
  },{
    src:"https://s25.postimg.cc/is9j1z81b/banner_03.jpg",
    desc:3
  },{
    src:"https://s25.postimg.cc/lz42llkrj/banner_04.jpg",
    desc: 4
  },{
    src:"https://s25.postimg.cc/j50x85avj/banner_05.jpg",
    desc: 5
  }],
    timer:null,
    currentIndex: 0
  },
  mounted:function(){
    this.go()
  },
  methods:{
    go: function(){
      this.timer= setInterval(this.play,4000)
    },
    stop: function(){
      clearInterval(this.timer)
      this.timer=null
    },
    change: function(index){
      this.currentIndex=index
    },
    play: function(){
      this.currentIndex++
      if(this.currentIndex>this.imagebox.length-1) this.currentIndex=0
    },
    isActive: function (index){
     return index===this.currentIndex?'active':''
    }
  }
})