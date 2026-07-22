import tableMultiple from '@bartheleway/inquirer-table-multiple'
import ansiColors from 'ansi-colors';
import { select } from '@inquirer/prompts';
import { rows } from './config.js';

export const answers = {
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