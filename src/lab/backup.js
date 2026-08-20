import { checkbox } from "@inquirer/prompts";

const blankChoice = await checkbox({
    message: 'No choice...',
    choices: [
        {
            value: 'no pick here',
            name: 'Nothing...'
        },
        {
            value: 'Nethier here',
            name: 'Void here...'
        }
    ]
})

console.log(blankChoice)