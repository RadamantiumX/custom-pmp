import { tableQuiz, confirmQuiz, selectQuiz } from "./index.js";

export async function coreFn(){
    const tableQ = await tableQuiz()
    const seleQ = await selectQuiz()
    const confQ = await confirmQuiz()

    console.log(tableQ)
    console.log(seleQ)
    console.log(confQ)
    return
}

coreFn()