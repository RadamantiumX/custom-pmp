import ansiColors from 'ansi-colors';
import tableMultiple from '@bartheleway/inquirer-table-multiple'
import { select } from '@inquirer/prompts';
import { confirm } from '../confirm.js';

export async function tableQuiz(){
    try{
    const workspaceSelect =  await tableMultiple({
    message: "Select your configuration",
    multiple: true,
    columns: [
        {
            title: "Api",
            value: "api",
         },
         {
            title: "Client",
            value: "client"
         },
         {
            title: "Root",
            value: "root"
         },
         {
          title: "Dev-Dependency",
            value: true
         }
     ],
     rows:[
      {
         title: "REACT",
         value: "react"
      },
      {
         title: "NODE",
         value: "node"
      }
     ]
      })
      console.log(workspaceSelect)
      return workspaceSelect

    }catch(error){
       console.log(error)
    }
}
/**
 * Example Return:
 [
  { choice: { title: 'REACT', value: 'react' }, answers: [ 'client' ] },
  {
    choice: { title: 'NODE', value: 'node' },
    answers: [ 'api', true ]
  }
]
 * 
 */
tableQuiz()


export async function selectQuiz() {
   try{
      const selectChoices = await select({
      message: "Select your package manager",
      choices: [
         {
            value:"npm",
            description:"Most popular",
            name: "NPM"
         },
         {
            value:"pnpm",
            description:"Fast and professional",
            name: "PNPM"
         },
         {
            value:"yarn",
            description:"Another more",
            name: "YARN"
         }
      ],
      
    })
  return
   }catch(error){
      console.log(error)
   }
}



export async function confirmQuiz(){
   try{
     const confirmChoices = await confirm({
      message: 'Confirm Process?'
     })
     return confirmChoices
   }catch(error){
      console.log(error)
   }
}


// confirmQuiz()