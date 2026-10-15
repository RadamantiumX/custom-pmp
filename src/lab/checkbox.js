import { checkbox, Separator, select } from "@inquirer/prompts"
import ansiColors from "ansi-colors"
import { sentenceMaker } from "./reduce.js"
const pkgs = ["nodemon", "react", "cors"]
const ws = [
  {
    name: "API",
    value: ["api"],
    
  },
   {
    name: "CLIENT",
    value: ["client"],
    
  },
   {
    name: "ROOT",
    value: ["root"],
    
  },
]

const dev = [
  {
    name:"DEV",
    value: [true]
  }
]
function mergedArrays(packageArray, wsArray){
  const combine = packageArray.reduce((acc, curr, index)=>{  
      const mixed = wsArray.map((w)=>{
        w = { name: w.name, value: [w.value, curr].flat()  }
        return w
       })
        acc.push(new Separator(ansiColors.bgCyan(curr.toUpperCase())),...mixed)
        return acc
    },[])

    return combine
}
   

const isValidAmountOfChoices = async(answers, arrayPkg) =>{
   console.log(answers.value)
   const outsider = []
       answers.map((a)=>{
           outsider.push(a.value[1])
        })
      
      const isNotExistOnValues = arrayPkg.find((value, index, array)=>{
           const testing = outsider.includes(value)
           return !testing
      })
      if(isNotExistOnValues){
        return `You miss select choices on ${ansiColors.blueBright(isNotExistOnValues.toLocaleUpperCase())} package`
      }
      return true
}

const mixedWs = mergedArrays(pkgs, ws)
// const mixedDev = mergedArrays(pkgs, dev)

const question = await checkbox({
     message: 'Select any choice',
    choices: mixedWs,
    loop: false,
    validate:(answers) => {isValidAmountOfChoices(answers, pkgs); console.log(answers)},
    theme:{
      style:{
        renderSelectedChoices:()=> { return 'Done' },
        
      },
    
    }
  })   
 
//  const anotherQuestion = await checkbox({
//    message: 'Its dev?',
//    choices: mixedDev, 
//    loop: false,
//    theme:{
//        style:{
//            renderSelectedChoices:()=> { return 'Done' },
        
//          },
    
//        }
//  })

//  const pkgMng = await select({
//     message: "Select the package manager",
//     choices:[
//       {
//         name: "NPM",
//         value: "npm"
//       },
//        {
//         name: "PNPM",
//         value: "pnpm"
//       },
//        {
//         name: "YARN",
//         value: "yarn"
//       },
//     ]
//  })
// const smtMaker = await sentenceMaker(question, anotherQuestion, pkgMng)

// console.log(smtMaker)
/**
 * example response (with workspace):
 * [
  [ 'api', 'react' ],
  [ 'client', 'react' ],
  [ 'api', 'node' ],
  [ 'api', 'nodemon' ]
]

example response (with dev, only answer):
[ [ true, 'nodemon' ] ]
 */
// TODO: merge the workspaces answers with the dev answers