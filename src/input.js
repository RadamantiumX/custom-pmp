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
  try {
    let rows = []
    // 2. Ask a question and wait for the response
    const pkg = (await rl.question(ansiColors.bgGreen('Enter the packages names: '))).split(" ").map((item)=>{
       rows.push({
        value: item.toLowerCase(),
        title: item.toUpperCase()
       })
    });
    
    
    
    const  workspaceConfig = await tableMultiple({
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
   })
   const pkgMng = await select({
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
      ]
    })
   const confirmation = await confirm({message: "Accept the terms...?"})
   workspaceConfig.map((item)=>{
      sentence.push(`${pkgMng} i ${item.choice.value} --filter=${item.answers.filter(i => typeof i !== 'boolean').join("-")} ${item.answers.includes(true) ? "-D" : ""}`)
   })
   // console.log(workspaceConfig)
   // console.log(pkgMng)
   console.log(sentence.join(" & "))
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