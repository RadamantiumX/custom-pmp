import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { doStuff } from '../ascii.js';
import { confirm } from '../confirm.js';
import ansiColors from 'ansi-colors';
import tableMultiple from '@bartheleway/inquirer-table-multiple'
import { select } from '@inquirer/prompts';

export async function main() {
  // await doStuff() 
  // 1. Create the interface
  // const rl = readline.createInterface({ input, output });
//   let sentence = []
//   let joinSentence = []
//  let rows = []
  try {
    
    // 2. Ask a question and wait for the response
   //  const pkg = (await rl.question(ansiColors.bold.underline.bgGreen('Enter the packages names: \n\n'))).split(" ").map((item)=>{
   //     rows.push({
   //      value: item.toLowerCase(),
   //      title: item.toUpperCase()
   //     })
   //  });
    
   //   const workspaceSelect =  await tableMultiple({
   //   message: "Select your configuration",
   //   multiple: true,
   //   required: true,
   //   columns: [
   //       {
   //           title: "Api",
   //           value: "api",
   //        },
   //        {
   //           title: "Client",
   //           value: "client"
   //        },
   //        {
   //           title: "Root",
   //           value: "root"
   //        },
   //        {
   //         title: "Dev-Dependency",
   //           value: true
   //        }
   //    ],
   //    rows:[
   //     {
   //        title: "REACT",
   //        value: "react"
   //     },
   //     {
   //        title: "NODE",
   //        value: "node"
   //     }
   //    ]
   //     })
      const pkgManager = await select({
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


    

    /**
     * Example
     * [
  { [choice: { value: 'react', title: 'REACT' }, answers: [ 'api' ] },
  { choice: { value: 'node', title: 'NODE' }, answers: [ 'api' ] },
  { choice: { value: 'nodemon', title: 'NODEMON' }, answers: [ 'api', true ] },
  { choice: { value: 'tsup', title: 'TSUP' }, answers: [ true ] }]
]
     */
    
   //  const confirmActions = await confirm({message:'Want continue?'})
   //  if(!confirmActions) return
    
   
   // await relAnswers.workspaceSelect.map(async (item)=>{
   //   await sentence.push({
   //       packageManager: relAnswers.pkgManager,
   //       package: item.choice.value,
   //       workspaces: item.answers.filter(i => typeof i !== 'boolean').join("-"),
   //       devDep: item.answers.includes(true) ? true : false
   //    })
   // })
   // sentence.map((item)=>{
   //    switch(item.packageManager){
   //       case 'npm':
   //          joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
   //          break;
   //       case 'pnpm':
   //          joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
   //          break;
   //       case 'yarn':
   //          joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
   //          break;     
   //    }
   // })


// console.log(joinSentence)
   
   return
  } catch (err) {
    console.error('An error occurred:', err);
  }
}
//   } finally {
//     // 3. Always close the interface to free up the terminal
//     rl.close();
//   }
// }

main();

// Can be works

// Return example: 
/*
{
  workspaceSelect: [
    { choice: [Object], answers: [Array] },
    { choice: [Object], answers: [Array] },
    { choice: [Object], answers: [Array] }
  ],
  pkgManager: 'npm',
  confirmActions: true
}

Choices & answers return example:

[
  { choice: { value: 'react', title: 'REACT' }, answers: [ 'api' ] },
  { choice: { value: 'node', title: 'NODE' }, answers: [ 'api' ] },
  { choice: { value: 'nodemon', title: 'NODEMON' }, answers: [ 'api', true ] },
  { choice: { value: 'tsup', title: 'TSUP' }, answers: [ true ] }
]

? Select your configuration (Press <space> to select, <Up and Down> to move rows, <Left and Right> to move columns)

┌──────────┬─────────┬─────────┬─────────┬────────────────┐
│ 1-3 of 3 │ Api     │ Client  │ Root    │ Dev-Dependency │
├──────────┼─────────┼─────────┼─────────┼────────────────┤
│ REACT    │ [ [ ] ] │   [ ]   │   [ ]   │   [ ]          │
├──────────┼─────────┼─────────┼─────────┼────────────────┤
│ NODE     │   [ ]   │   [ ]   │   [ ]   │   [ ]          │
├──────────┼─────────┼─────────┼─────────┼────────────────┤
│ NODEMON  │   [ ]   │   [ ]   │   [ ]   │   [ ]          │
└──────────┴─────────┴─────────┴─────────┴────────────────┘
 */