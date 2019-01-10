/*
id：定时器id，自定义
aminTime：执行间隔时间
callback：定时执行的函数，返回callback(id,runtime)，id是定时器的时间，runtime是当前运行的时间
maxTime：定时器重复执行的最大时长
afterTimeUp：定时器超时之后的回调函数，返回afterTimeUp(id,usedTime,countTimes)，id是定时器的时间，usedTime是定时器执行的总时间，countTimes是当前定时器运行的回调次数
*/
function runTimer(id,aminTime,callback,maxTime,afterTimeUp){
    let timer=null//当前定时器的系统中的id，用于clearTimeout的执行
    let running=false//防止多次执行
    let usedTime=0//耗时时间
    let startTime=0//开始时间
    let countTimes=0//一共执行了几次
    function getTime(){//获取当前时间
        return new Date().getTime();
    }
    /*
    diffTime：需要扣除的时间
    */
    function timeout(diffTime){//主要函数，定时器本体
        if(!running) return
        let runtime=aminTime-diffTime//计算下一次的执行间隔
        if(getTime()-usedTime>=maxTime){ //超出了最大时间，清空当前定时器并返回
            cleartimer()
            return
        }
        timer=setTimeout(()=>{
            if(getTime()-usedTime>=maxTime){//超出了最大时间，清空当前定时器并返回
                cleartimer()
                return
            }
            countTimes++
            //计算需扣除的时间，并执行下一次的调用
            let tmp=startTime
            callback(id,runtime,countTimes);
            startTime=getTime()
            diffTime=(startTime-tmp)-aminTime
            timeout(diffTime)
        },runtime)
    }
    function cleartimer(){//结束定时器
        running=false
        usedTime=getTime()-usedTime
        afterTimeUp(id,usedTime,countTimes)
        clearTimeout(timer);
        //timer=null
    }
    function starttimer(){//开始定时器
        running=true
        startTime=getTime()
        usedTime=startTime
        timeout(0)
    }
    //f返回开始和结束这两个控制的方法
    return {cleartimer,starttimer}
}
//setTimeInterVal版本
function runIntervalTimer(id,aminTime,callback,maxTime,afterTimeUp){
    let timer=null
    let running=false
    let startTime=0
    let usedTime=0
    let countTimes=0
    function getTime(){
        return new Date().getTime();
    }
    function timeout(){
        if(!running) return
        timer=setInterval(()=>{
            if(getTime()-usedTime>=maxTime){ 
                cleartimer()
            }
            countTimes++
            callback(getTime()-startTime);
            startTime=getTime();
        },aminTime)
    }
    function cleartimer(){
        running=false
        afterTimeUp(getTime()-usedTime,countTimes,id);
        clearInterval(timer);
        //timer=null
    }
    function starttimer(){
        running=true
        startTime=getTime()
        usedTime=startTime
        timeout(0)
    }
    return {cleartimer,starttimer}
}

//requestAnimationFrame版本
function runAnimTimer(aminTime,callback){
    let timer=null
    let running=false
    let count=0
    let startTime=0
    let usedTime=0
    function getTime(){
        return new Date().getTime();
    }
    function timeout(){
        if(!running) return
        count = getTime()-startTime
        if(count>=aminTime){
            callback(count)
            startTime=getTime()
            count=0;
        }
        timer=window.requestAnimationFrame(timeout)
    }
    function cleartimer(){
        running=false
        afterTimeUp(getTime()-usedTime,countTimes)
        window.cancelAnimationFrame(timer);
        timer=null
    }
    function starttimer(){
        running=true
        startTime=getTime()
        usedTime=startTime
        timeout(0)
    }
    return {cleartimer,starttimer}
    
}
module.exports={
    runTimer,
    runAnimTimer,
    runIntervalTimer
}

