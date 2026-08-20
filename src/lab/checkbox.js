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

const mixed = mergedArrays(pkgs, ws)

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
  
  const question = await checkbox(checkConfig)   


console.log(question)