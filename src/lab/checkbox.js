import { checkbox, Separator } from "@inquirer/prompts"



const pkgs = ["react", "node", "nodemon", "tsup", "volter", "input", "prompts"]
const ws = [
  {
    name: "API",
    value: ["api", "react", "node", "nodemon", "tsup", "volter", "input", "prompts"]
  },
   {
    name: "CLIENT",
    value: ["client","react", "node", "nodemon", "tsup", "volter", "input", "prompts"]
  },
   {
    name: "ROOT",
    value: ["root","react", "node", "nodemon", "tsup", "volter", "input", "prompts"]
  },
]

// TODO: Maybe this can works
pkgs.map((p, key)=>{
   ws.map((w)=>{
      const sliced = w.value.slice(key + 1, key + 2)
      sliced.unshift(w.value[0])
      console.log(sliced)
   })
})


// async function check() {
//    const choiceArr = []
   
//    pkgs.map((pkg, key)=>{
//     let newWs = []
//     newWs = [...ws]
//     if(newWs.length !== 0){
//        newWs.map((item)=>{item.value.push(pkgs[key])})
//     }
//     choiceArr.push(new Separator(pkg.toUpperCase()), ...newWs)
   
//    })
 
   
//   const answers =  await checkbox({
//    message: `Select a package manager: `,
//    choices:choiceArr,
//    loop: false
// })

// console.log(answers) 
// return
// }


//   await check()

