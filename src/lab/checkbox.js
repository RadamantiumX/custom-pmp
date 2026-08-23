import { checkbox, Separator } from "@inquirer/prompts"
import ansiColors from "ansi-colors"

const pkgs = ["react", "node", "nodemon"]
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
  console.log(answers)
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

const mixed = mergedArrays(pkgs, dev)

  const checkConfig = {
     message: 'Select any choice',
    choices: mixed,
    loop: false,
    validate:(answers) => isValidAmountOfChoices(answers, pkgs),
    theme:{
      style:{
        renderSelectedChoices:()=> { return 'Done' },
        
      },
    
    }
  }
  
// const question = await checkbox(checkConfig)   
//   const anotherQuestion = await checkbox({
//      message: 'Is dev?',
//      choices: mixed,
//      loop: false,
//       theme:{
//        style:{
//          renderSelectedChoices:()=> { return 'Done' },
        
//        },
    
//      }
//  })
const anotherQuestion = await checkbox({
  message: 'Its dev?',
  choices: mixed, 
  loop: false,
  theme:{
      style:{
          renderSelectedChoices:()=> { return 'Done' },
        
        },
    
      }
})
 console.log(anotherQuestion)

// console.log(question)

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