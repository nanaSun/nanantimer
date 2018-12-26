const {runIntervalTimer,runTimer}=require("../time")


// let b=runTimer("b",1000,function(count){
//     //console.log("baction",count)
// },1000)
// b.starttimer()



// let c=runTimer("c",1000,function(count){
//     //console.log("caction",count)
// },1000)
// c.starttimer()
// let d=runIntervalTimer("d",1000,function(count){
//     //console.log("daction",count)
// },1000)
// d.starttimer()
// let e=runIntervalTimer("e",1000,function(count){
//     //console.log("eaction",count)
// },1000)
// e.starttimer()

// let f=runTimer("f",1000,function(count){
//     //console.log("faction",count)
// },1000)
// f.starttimer()
// let g=runIntervalTimer("g",1000,function(count){
//     //console.log("eaction",count)
// },1000)
// g.starttimer()
// let h=runIntervalTimer("h",1000,function(count){
//     //console.log("haction",count)
// },1000)
// h.starttimer()
// let i=runTimer("i",1000,function(count){
//     //console.log("haction",count)
// },1000)
// i.starttimer() 

var assert = require('assert');
var expect=require('expect.js');
describe('Array', function() {
  describe('#runIntervalTimer()', function() {
    it('should return 1000 ', function(done) {
        let starttimer=new Date().getTime(),endTime;
        let a=runIntervalTimer("a",1000,function(count){
            if(count===1){
                endTime=new Date().getTime()-starttimer
                //assert.equal(, );
                let res=expect(endTime-starttimer).to.be.greaterThan(2000);
                done(res)
            }
        },2000)
        a.starttimer()
    });
  });
});