import readlineSync from "readline-sync"

function askRiddle(riddleObj){
    console.log(riddleObj.name);
    console.log(riddleObj.taskDescription);
    let bool = true
    while (bool){
        let answer
    try{
        riddleObj.choices.forEach((op,i)=>{
            console.log(i+1,op);
        })
        console.log("Select a location for the answer in the opthans");
        answer = readlineSync.question()
        answer-=1
        answer = String(answer)
    }catch{
         console.log("print answer");
         answer = readlineSync.question()
    }
    if (answer === riddleObj.correctAnswer){
        console.log("correct!");
        bool = false
    }else{
        console.log("try ageine");
        
    }
}
}

function measureSolveTime(fn){
      let time1 = Date.now()
      let time_secunds1 = Math.floor(time1/1000)
      fn()
      let time2 = Date.now()
      let time_secunds2 = Math.floor(time2/1000)
      return time_secunds2-time_secunds1
}

export {askRiddle,measureSolveTime}













