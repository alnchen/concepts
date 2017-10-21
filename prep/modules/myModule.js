var myModule = {
  curNum: 3,

  printNum: (num) => {
    console.log(num);
  },

  changeCurNum: function(num) {
    this.curNum = num;
  },

  printCurNum: function() {
    console.log(this.curNum);
  }
};

myModule.printCurNum();
myModule.changeCurNum(24);
myModule.printCurNum();
