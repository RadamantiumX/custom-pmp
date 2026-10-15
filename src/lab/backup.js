// import { checkbox } from "@inquirer/prompts";

// const blankChoice = await checkbox({
//     message: 'No choice...',
//     choices: [
//         {
//             value: 'no pick here',
//             name: 'Nothing...'
//         },
//         {
//             value: 'Nethier here',
//             name: 'Void here...'
//         }
//     ]
// })

// console.log(blankChoice)
export const flagChoices = {
  npm: [
    {
      name: "DEV",
      value: [true],
    },
    {
      name: "OPTIONAL",
      value: [true],
    },
    {
      name: "EXACT VERSION",
      value: [true],
    },
  ],
  pnpm:[
     {
      name: "DEV",
      value: [true],
    },
    {
      name: "OPTIONAL",
      value: [true],
    },
    {
      name: "EXACT VERSION",
      value: [true],
    },
  ],
  yarn:[
     {
      name: "DEV",
      value: [true],
    },
    {
      name: "OPTIONAL",
      value: [true],
    },
    {
      name: "EXACT VERSION",
      value: [true],
    },
  ]
};

console.log(flagChoices["npm"]) // TODO: this works