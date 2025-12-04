function createPlayer(name){
    return {
        name:name,
        times:[]
    }
}

function addSolveTime(player, seconds){
    player.times.push(seconds)
}

function showStats(player){
    let total = 0
    player.times.forEach((num)=>{
        total+=num
    })
    console.log(`${player.name} total seconds is ${total}`);
    console.log(`your averge averge is ${total/player.times.length}`); 
}

export {createPlayer,addSolveTime,showStats}
