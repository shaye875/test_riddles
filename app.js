import allriders from "./riddels/allriders.js"
import { createPlayer, addSolveTime, showStats } from "./utils/player.js"
import { askRiddle, measureSolveTime } from "./utils/riddel.js"
import readLineSync from "readline-sync"
function game() {
    console.log("welcome");
    const name = readLineSync.question("what is your name: ")
    const player = createPlayer(name)
    for (let r of allriders) {
        let time = measureSolveTime(() => { askRiddle(r) })
        addSolveTime(player, time)

    }
    showStats(player)

}


game()