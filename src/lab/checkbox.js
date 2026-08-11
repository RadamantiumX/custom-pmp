import { checkbox, Separator } from "@inquirer/prompts"
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
       acc.push(new Separator(curr.toUpperCase()),...mixed)
       return acc
   },[]) 


const question = await checkbox({
  message: 'Select any choice',
  choices: combine,
  loop: false
})   


console.log(question)