// 'use strict'
//this references the object it is inside of.

globalThis.color = "red"
// color = "red"

var myCar = {
  color: "Blue",
  logColor: function(){
    var self = this
    console.log("In logColor - this.color: "+this.color) 
    console.log("In logColor - self.color: "+self.color);
    (function(){
      console.log("In IIFE - this.color: "+this.color)
      console.log("in IIFE - self.color: "+self.color)
    })()
  }
}

myCar.logColor()