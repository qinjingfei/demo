var app = new Vue({
  el: "#app",
  data:{
    imagebox:[{
  src:"https://www.dropbox.com/s/edjyasopki8vc5r/banner_00.jpg?raw=1",
    desc: 0
  },{
    src:"https://www.dropbox.com/s/ko8ghjj2dkf5hna/banner_01.jpg?raw=1",
    desc: 1
  },{
    src:"https://www.dropbox.com/s/63v21atzawg5ik5/banner_02.jpg?raw=1",
    desc:2
  },{
    src:"https://www.dropbox.com/s/q6kq66dtkglrq78/banner_03.jpg?raw=1",
    desc:3
  },{
    src:"https://www.dropbox.com/s/jgsjrz7pa82t4lx/banner_04.jpg?raw=1",
    desc: 4
  },{
    src:"https://www.dropbox.com/s/ahykalk1ka3meaf/banner_05.jpg?raw=1",
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