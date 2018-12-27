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
describe('timer', function() {
//   describe('#multi runIntervalTimer()', function() {
//     it('1countdown 10000ms, shoud less than 10s', function(done) {
//         let times=0
//         function getTimes(){
//             times++;
//             if(times>=4){
//                 done();
//             }
//         }
//         runIntervalTimer("a",1000,function(){},10000,function(usedTime,counts){
//             console.log(usedTime);
//             expect(usedTime-10000).to.be.lessThan(10);
//             getTimes()
//         }).starttimer()
//         runIntervalTimer("b",1000,function(){},10000,function(usedTime,counts){
//             console.log(usedTime);
//             expect(usedTime-10000).to.be.lessThan(10);
//             getTimes()
//         }).starttimer()
//         runIntervalTimer("c",1000,function(){},10000,function(usedTime,counts){
//             console.log(usedTime);
//             expect(usedTime-10000).to.be.lessThan(10);
//             getTimes()
//         }).starttimer()
//         runIntervalTimer("d",1000,function(){},10000,function(usedTime,counts){
//             console.log(usedTime);
//             expect(usedTime-10000).to.be.lessThan(10);
//             getTimes()
//         }).starttimer()
//     });
//   });
  describe('#multi runTimer()', function() {
    it('1countdown 10000ms, shoud less than 10s', function(done) {
        let times=0
        function getTimes(){
            times++;
            if(times>=8){
                done();
            }
        }
        runTimer("a",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("b",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("c",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("d",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("e",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("f",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("g",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
        runTimer("h",1000,function(){},10000,function(usedTime,counts){
            console.log(usedTime);
            expect(usedTime-10000).to.be.lessThan(10);
            getTimes()
        }).starttimer()
    });
  });
});