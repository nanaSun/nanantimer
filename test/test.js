const {runIntervalTimer,runTimer}=require("../time")

var expect=require('expect.js');
describe('timer', function() {
    // for(let i=0;i<12;i++){
    //     describe(`#multi ${i} runIntervalTimer()`, function() {
    //         it('1countdown 10000ms, shoud less than 10s', function(done) {
    //             runIntervalTimer("a",1000,function(){},10000,function(usedTime,counts){  
    //                 console.log("runIntervalTimer"+i,usedTime-10000);        
    //                 expect(usedTime-10000).to.be.lessThan(10);
    //                 done()
    //             }).starttimer()
    //         });
    //     })
    // }
    for(let i=0;i<12;i++){
        describe('#multi runTimer()', function() {
            it('1countdown 10000ms, shoud less than 10s', function(done) {
                runTimer("a",1000,function(){},10000,function(usedTime,counts){
                    console.log("runTimer",usedTime-10000);
                    expect(usedTime-10000).to.be.lessThan(10);
                    done()
                }).starttimer()
            });
        });
    }
});