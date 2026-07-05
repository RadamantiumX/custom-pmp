import readline from 'node:readline'
// import { isSpaceKey } from '@inquirer/core'

   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
  })
let saved = []
 rl.question('Please enter your email: ', (answer)=>{
     
     saved.push(answer)
     rl.close
 })
 
 saved.length === 0 ? console.log('\nAwaiting the entries') : saved.map((item, key)=>{
   console.log(`${key} - ${item}`)
 })


// function rawMode(){
// let parts = []
// readline.emitKeypressEvents(process.stdin);
//     // Enable raw mode to capture individual keypresses immediately
// if (process.stdin.isTTY) {
//   process.stdin.setRawMode(true);
// }

// console.log('Press any key to continue...');


//     process.stdin.on('keypress', (chunk,key)=>{
//        rl.question('Enter something: ', (answer)=>{
    
//     console.log(answer)

//       console.log(parts)
//     if(key.name === 'space'){
//      parts.push(answer)
//      console.log('Space key pressed')
//     }

//       if (key && key.ctrl && key.name === 'c') {
//     process.exit();

//   }

//    process.stdin.setRawMode(false);
//   process.stdin.pause();
// })

// })


// }

// rawMode()
