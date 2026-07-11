import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import tableMultiple from '@bartheleway/inquirer-table-multiple'
import ansiColors from 'ansi-colors';
import { select } from '@inquirer/prompts';
import { doStuff } from './ascii.js';
import { confirm } from './confirm.js';

async function main() {
  await doStuff() 
  // 1. Create the interface
  const rl = readline.createInterface({ input, output });
  let sentence = []
  let joinSentence = []
  try {
    let rows = []
    // 2. Ask a question and wait for the response
    const pkg = (await rl.question(ansiColors.bold.underline.bgGreen('Enter the packages names: \n\n'))).split(" ").map((item)=>{
       rows.push({
        value: item.toLowerCase(),
        title: item.toUpperCase()
       })
    });
    
    
    const answers = {
    workspaceSelect:  await tableMultiple({
    message: "Select your configuration",
    multiple: true,
    required: true,
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
            title: ansiColors.bgCyan(ansiColors.white("Dev-Dependency")),
            value: true
         }
     ],
     rows:rows
      }),
      pkgManager:await select({
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
    }
    /**
     * [
  { choice: { value: 'react', title: 'REACT' }, answers: [ 'api' ] },
  { choice: { value: 'node', title: 'NODE' }, answers: [ 'api' ] },
  { choice: { value: 'nodemon', title: 'NODEMON' }, answers: [ 'api', true ] },
  { choice: { value: 'tsup', title: 'TSUP' }, answers: [ true ] }
]

     */
    const confirmActions = await confirm({message: `Selected configuration:
      - package manager: ${answers.pkgManager}
      - packages [workspace]: ${answers.workspaceSelect.map((item)=>(`${item.choice.value} ${item.answers.includes(true) ? "(Dev)" : ""}[${item.answers.filter(i => typeof i !== 'boolean').join(" - ")}]`))}
      \n ¿Continue with the process?`})
    if(!confirmActions) return
   //  const  workspaceConfig = await tableMultiple({
   //  message: "Select your configuration",
   //  multiple: true,
   //  required: true,
    
   //  columns: [
   //      {
   //          title: "Api",
   //          value: "api",
   //       },
   //       {
   //          title: "Client",
   //          value: "client"
   //       },
   //       {
   //          title: "Root",
   //          value: "root"
   //       },
   //       {
   //          title: ansiColors.bgCyan(ansiColors.white("Dev-Dependency")),
   //          value: true
   //       }
   //   ],
   //   rows:rows
   // })
   // const pkgMng = await select({
   //    message: "Select your package manager",
   //    choices: [
   //       {
   //          value:"npm",
   //          description:"Most popular",
   //          name: "NPM"
   //       },
   //       {
   //          value:"pnpm",
   //          description:"Fast and professional",
   //          name: "PNPM"
   //       },
   //       {
   //          value:"yarn",
   //          description:"Another more",
   //          name: "YARN"
   //       }
   //    ]
   //  })
   // const confirmation = await confirm({message: "Accept the terms...?"})
   // workspaceConfig.map((item)=>{
   //    sentence.push(`${pkgMng} i ${item.choice.value} --filter=${item.answers.filter(i => typeof i !== 'boolean').join("-")} ${item.answers.includes(true) ? "-D" : ""}`)
   // })
   // console.log(workspaceConfig)
   // console.log(pkgMng)
   // console.log(sentence.join(" & "))
   // console.log(answers)
   // console.log(answers.workspaceSelect)
   answers.workspaceSelect.map((item)=>{
      sentence.push({
         packageManager: answers.pkgManager,
         package: item.choice.value,
         workspaces: item.answers.filter(i => typeof i !== 'boolean').join("-"),
         devDep: item.answers.includes(true) ? true : false
      })
   })
   sentence.map((item)=>{
      switch(item.packageManager){
         case 'npm':
            joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
            break;
         case 'pnpm':
            joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
            break;
         case 'yarn':
            joinSentence.push(`${item.packageManager} i ${item.package} ${item.devDep ? "-D": ""}`)
            break;     
      }
   })



   console.log(joinSentence.join(" && "))
   return
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // 3. Always close the interface to free up the terminal
    rl.close();
  }
}

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

 */