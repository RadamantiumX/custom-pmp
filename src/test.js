import { styleText } from 'node:util';
import {
  createPrompt,
  useState,
  useKeypress,
  isEnterKey,
  usePrefix,
  isSpaceKey

} from '@inquirer/core';
// import { input } from '@inquirer/prompts';
import tableMultiple from '@bartheleway/inquirer-table-multiple'
import ansiColors from 'ansi-colors';
// TODO: The posible solution it's the readline node package
//  const confirm = createPrompt(
//     (config, done) => {
//      const [status, setStatus] = useState('idle');
//      const [value, setValue] = useState('');
//      const prefix = usePrefix({});
//      useKeypress((key, rl) => {
//        if (isEnterKey(key)) {
//          const answer = value ? /^y(i)?/i.test(value) : config.default !== false;
//          setValue(answer ? 'yes' : 'no');
//          setStatus('done');
//          done(answer);
//        } else {
//          setValue(rl.line);
//        }
//      });
   
//      let formattedValue = value;
//      let defaultValue = '';
//      if (status === 'done') {
//        formattedValue = styleText('cyan', value);
//      } else {
     
//        defaultValue = styleText('dim', config.default === false ? ' (y/N)' : ' (Y/n)');
//      }

//      const message = styleText('bold', config.message);
//      return `${prefix} ${message}${defaultValue} ${formattedValue}`;
      

//    },

   
//  );

/**
 * Readline example
 * rl.on('line', (input)=>{
    console.log(`You pres ENTER: ${input}`)
    if(input === "exit"){
        rl.close()
    }
})
 */

const input = createPrompt((config, done)=>{
      const [status, setStatus] = useState('idle');
      const [value, setValue] = useState('');
      const prefix = usePrefix({ status });
       const parcial = []
       
       useKeypress((key, rl) => {
        
      if(isSpaceKey(key)){
        const chunk = parcial.push(value)
        console.log(`The results of parcial is: ${parcial}`)
      }  
      
      if (isEnterKey(key)) {
        const answer = value;
        setValue(answer);
        setStatus('done');
        done(answer);
      
      } else {
        setValue(rl.line);
        
      }
    });
   
    let formattedValue = value;
    
    if (status === 'done') {
      formattedValue = styleText('cyan', value);
    } 

    const message = styleText('bold', config.message);
    return `${prefix} ${message} ${formattedValue}`;
})
/**
 *  Which then can be used like this:
 */



//  const answer = await confirm({ message: 'Quieres continuar?' });
const answerIn = await input({message: 'Enter your input:'})

//  console.log(answerIn)

// async function cmdExe(){
//    const questions = await tableMultiple({
//        message: "Select your configuration",
//     multiple: true,
//     required: true,
    
//     columns: [
//         {
//             title: "Api",
//             value: "api",
//          },
//          {
//             title: "Client",
//             value: "client"
//          },
//          {
//             title: "Root",
//             value: "root"
//          },
//          {
//             title: ansiColors.bgCyan(ansiColors.white("Dev-Dependency")),
//             value: "true"
//          }
//      ],
//      rows:[
//         {
//             value: "nodemon",
//             title: "NODEMON"
//         },
//         {
//             value: "node",
//             title: "NODE"
//         }
//      ]
//    })

//    const answer = await confirm({ message: 'Quieres continuar?' });

//    return
// }

// cmdExe()