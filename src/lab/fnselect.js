import { select } from "@inquirer/prompts";

const firstFn = () => {
    console.log('Is the first FN')
    return
}

const secondFn = () => {
    console.log('Is the second FN')
    return
}


async function mainFunction (){
   const choose = await select({
      message: 'Select any choice',
      choices: [
        {
            name: 'First',
            value: 'first'
        },
        {
            name: 'Second',
            value: 'second'
        },
        {
            name: 'Third',
            value: 'third'
        }
      ]
   })

   switch(choose){
       case 'first':
        firstFn();
        break;
       case 'second':
        secondFn();
        break;
       default:
        console.log('The last one');
        return;  
   }
}

mainFunction()