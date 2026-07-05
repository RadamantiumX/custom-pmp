import EventEmitter from 'node:events';
import readline from 'node:readline';

// class KeyboardController extends EventEmitter {
//   constructor() {
//     super();
//     readline.emitKeypressEvents(process.stdin);
//     if (process.stdin.isTTY) process.stdin.setRawMode(true);
    
//     // Forward to custom named event routing
//     process.stdin.on('keypress', (str, key) => {
//       this.emit('userInput', key);
//     });
//   }
// }
async function readLineResolver (callFn){
   
    const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
  })

 if (process.stdin.isTTY) {
   process.stdin.setRawMode(true);
 }
// const controller = new KeyboardController();


const query = await rl.question('Enter something: ', callFn)



process.stdin.on('keypress',(chunk,key)=>{
   if(key.name === 'return' || key.name === 'enter'){
    
    console.log('Exit from editor...')
     rl.close()
      process.exit()
   }
})
console.log(query)
return query
}


const getAnswer = async (answer) =>{
   return answer.split(' ')
}

readLineResolver(getAnswer)


// console.log(fn)
//     controller.on('userInput', (key) => {
//         rl.question('Enter something: ', (answer)=>{
//     if(key.name === 'return'){
//         console.log(`The new word is: ${answer}`)
//     } 
//      if (key && key.ctrl && key.name === 'c') {
//          process.exit();
//           rl.close()
//      }

//       })
//   }); 

   
  

