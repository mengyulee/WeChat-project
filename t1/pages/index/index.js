//index.js
//获取应用实例
const app = getApp()
let timer;
let numAi = 0;
Page({
  data: {
    winNum: 0,
    imageAiSrc: '',
    imageUserSrc: '?',
    str: '',
    srcs: [
      '剪刀',
      '石头',
      '布'
    ]
  },
  onLoad: function(options) {
    this.timerGo();
  },
  changeForChoose: function (e) {
    this.setData({ imageUserSrc: this.data.srcs[e.currentTarget.id]})
    clearInterval(timer)

    let user = this.data.imageUserSrc;
    let ai = this.data.imageAiSrc;
    if (user == '剪刀' && ai == '石头' || user == '石头' && ai == '布' || user == '布' && ai == '剪刀') {
      this.setData({ str: '你输了！' })
    } else if (ai == '剪刀' && user == '石头' || ai == '石头' && user == '布' || ai == '布' && user == '剪刀') {
      this.setData({ str: '你赢了！'})
      this.data.winNum++;
      this.setData({winNum: this.data.winNum})
    } else {
      this.setData({ str: '平局！' });
    }
  },
  again: function() {
    this.setData({ str: '' });
    this.setData({ imageUserSrc: '?' });
    this.timerGo();
  },
  timerGo: function() {
    timer = setInterval(this.move, 50);
  },
  move: function() {
    let thisPage = this;
    if (numAi >= 3) {
      numAi = 0;
    }
    thisPage.setData({ imageAiSrc: thisPage.data.srcs[numAi] })
    numAi++;
  }
})
