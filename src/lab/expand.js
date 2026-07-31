import { expand } from '@inquirer/prompts';
// Or
// import expand from '@inquirer/expand';

const answer = await expand({
  message: 'Conflict on file.js',
  default: 'y',
  expanded:true,
  choices: [
    {
      key: 'y',
      name: 'Overwrite',
      value: 'overwrite',
    },
    {
      key: 'a',
      name: 'Overwrite this one and all next',
      value: 'overwrite_all',
    },
    {
      key: 'd',
      name: 'Show diff',
      value: 'diff',
    },
    {
      key: 'x',
      name: 'Abort',
      value: 'abort',
    },
  ],
});