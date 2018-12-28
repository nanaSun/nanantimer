const {runIntervalTimer,runTimer}=require("../time")

var expect=require('expect.js');
describe('timer', function() {
  describe('#multi runIntervalTimer()', function() {
    it('1countdown 10000ms, shoud less than 10s', function(done) {
        let times=0
        function getTimes(){
            times++;
            if(times>=12){
                done();
            }
        }
        for(let i=0;i<12;i++){
            runIntervalTimer("a",1000,function(){},10000,function(usedTime,counts){
                console.log("runIntervalTimer",usedTime-10000);
                expect(usedTime-10000).to.be.lessThan(10);
                getTimes()
            }).starttimer()
        }
    });
  });
  describe('#multi runTimer()', function() {
    it('1countdown 10000ms, shoud less than 10s', function(done) {
        let times=0
        function getTimes(){
            times++;
            if(times>=12){
                done();
            }
        }
        for(let i=0;i<12;i++){
            runTimer("a",1000,function(){},10000,function(usedTime,counts){
                console.log("runTimer",usedTime-10000);
                expect(usedTime-10000).to.be.lessThan(10);
                getTimes()
            }).starttimer()
        }
    });
  });
});