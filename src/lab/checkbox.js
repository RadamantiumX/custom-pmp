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

   const combine = pkgs.reduce((acc, curr, index)=>{  
      const mixed = ws.map((w)=>{
        w = { name: w.name, value: [w.value, curr].flat()  }
        return w
       })
        acc.push(new Separator(ansiColors.bgCyan(curr.toUpperCase())),...mixed)
        return acc
    },[]) 

  
  const question = await checkbox({
    message: 'Select any choice',
    choices: combine,
    loop: false,
    validate: async(answers)=>{
      const outsider = []
       answers.map((a)=>{
          outsider.push(a.value[1])
       })
      const isNotExistOnValues = pkgs.find((value, index, array)=>{
           const testing = outsider.includes(value)
           return !testing
      })
      if(isNotExistOnValues){
        return `You miss select choices on ${isNotExistOnValues} package`
      }
      return true
      },
    theme:{
      style:{
        renderSelectedChoices:(selectedChoices)=> { return 'Done' },
        key: (text)=> {console.log(); return 'clear';}
      },
    
    }
  })   


//   console.log(outsider)
// const arr = [ 'react', 'react', 'node', 'node']

// const verify = pkgs.find((value, index, array)=>{
//        const testing = arr.includes(value)
//        return !testing
//     })

// if(verify){
//   console.log(`This value [${verify}] doesn't existe on array`)
// }else{
//   console.log('All values are incorporated...')
// }