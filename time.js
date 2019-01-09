//setTimeout版本
function runTimer(id,aminTime,callback,maxTime,afterTimeUp){
    let timer=null
    let running=false
    let usedTime=0
    let startTime=0
    let countTimes=0
    function getTime(){
        return new Date().getTime();
    }
    function timeout(diffTime){
        if(!running) return
        let runtime=aminTime-diffTime
        timer=setTimeout(()=>{
            if(getTime()-usedTime>=maxTime){ 
                cleartimer()
                return
            }
            countTimes++
            let tmp=startTime
            callback(runtime);
            startTime=getTime()
            diffTime=(startTime-tmp)-aminTime
            timeout(diffTime)
        },runtime)
    }
    function cleartimer(){
        running=false
        usedTime=getTime()-usedTime
        afterTimeUp(usedTime,countTimes,id)
        clearTimeout(timer);
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

