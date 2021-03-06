const {runIntervalTimer,runTimer}=require("../time")


const chai=require("chai")
const expect=chai.expect
const assert=chai.assert
// describe('runIntervalTimer', function() {
//     describe(`#single runIntervalTimer() with burden ande less burden`, function() {
//         it('less burdened', function(done) {
//             runIntervalTimer("a",100,function(){},1000,function(usedTime,counts){
//                 console.log(counts);
//                 assert.ok(true);
//                 done();
//             }).starttimer()
//         });
//         it('more burdened', function(done) {
//             runIntervalTimer("a",100,function(){
//                 let array=[]
//                 for(let j=0;j<10000000;j++){
//                     array.push(j)
//                 }
//             },1000,function(usedTime,counts){
//                 console.log(counts);
//                 assert.ok(true);
//                 done();
//             }).starttimer()
//         });
//     })
//     describe(`#multi runIntervalTimer() running at the same time`, function() {
//         it('multi runIntervalTimer with no burden', function(done) {
//             let countdown=0
//             for(let i=0;i<10;i++){
//                 runIntervalTimer(i,100,function(){},1000,function(usedTime,counts,id){
//                     console.log(id,counts)
//                     expect(countdown).to.be.equal(id);
//                     countdown++
//                     if(countdown>=10) done()
//                 }).starttimer()
//             }
//         });
//         it('multi runIntervalTimer with burden', function(done) {
//             let countdown=0
//             for(let i=0;i<10;i++){
//                 runIntervalTimer(i,100,function(){
//                     let array=[]
//                     for(let j=0;j<10000000;j++){
//                         array.push(j)
//                     }
//                 },1000,function(usedTime,counts,id){
//                     console.log(`id${counts}`)
//                     assert.ok(true);
//                     countdown++
//                     if(countdown>=10) done()
//                 }).starttimer()
//             }
//         });
//     })
// });

describe('runTimer', function() {
    describe(`#single runTimer() stop at any time`, function() {
        it(' stop at any time', function(done) {
            let timer;
            let stop=false
            setTimeout(()=>{
                stop=true
            },200)
            timer=runTimer("a",100,function(id,runtime,counts){
                if(stop){
                   timer.cleartimer()
                }
            },1000,function(id,usedTime,counts){
                expect(usedTime).to.be.lessThan(300)
                done();
            })
            timer.starttimer()
        });
    });
    describe(`#single runTimer() stop at any counts`, function() {
        it(' stop at any counts', function(done) {
            let timer;
            timer=runTimer("a",100,function(id,runtime,counts){
                if(counts===2){
                   timer.cleartimer()
                }
            },1000,function(id,usedTime,counts){
                expect(counts).to.be.equal(2) 
                done(); 
            })
            timer.starttimer()
        });
    });
    describe(`#single runTimer() with burden ande less burden`, function() {
        it('less burdened', function(done) {
            runTimer("a",100,function(){},1000,function(usedTime,counts){
                console.log(counts);
                assert.ok(true);
                done();
            }).starttimer()
        });
        it('more burdened', function(done) {
            runTimer("a",100,function(){
                let array=[]
                for(let j=0;j<10000000;j++){
                    array.push(j)
                }
            },1000,function(usedTime,counts){
                console.log(counts);
                assert.ok(true);
                done();
            }).starttimer()
        });
    })
    describe(`#multi runTimer() running at the same time `, function() {
        it('multi runTimer with no burden', function(done) {
            let countdown=0
            for(let i=0;i<10;i++){
                runTimer(i,100,function(){},1000,function(usedTime,counts,id){
                    console.log(id,counts)
                    assert.ok(true);
                    countdown++
                    if(countdown>=10) done()
                }).starttimer()
            }
        });
        it('multi runTimer with burden', function(done) {
            let countdown=0
            for(let i=0;i<10;i++){
                runTimer(i,100,function(){
                    let array=[]
                    for(let j=0;j<10000000;j++){
                        array.push(j)
                    }
                },1000,function(usedTime,counts,id){
                    console.log(id,counts)
                    assert.ok(true);
                    countdown++
                    if(countdown>=10) done()
                }).starttimer()
            }
        });
    })
});


