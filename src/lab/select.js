import { select } from "@inquirer/prompts";


const selectionChoice = await select({
    message: 'Choice any',
    choices:[
        {
            name:'NPM',
            value: 'npm'
        },
        {
            name: 'PNPM',
            value: 'pnpm'
        }
    ]
})