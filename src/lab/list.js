import { spawn } from 'node:child_process';

function listingDeps(){
    try{
        const cliIo = spawn('npm list --json --depth=0',{
            stdio: ['overlapped'],
            shell: true,
          })
        cliIo.stdout.on('data', (data)=>{
            const parseData = JSON.parse(data)
               console.log(parseData)
            //  for(const[key, value] of Object.entries(parseData.dependencies)){
            //      console.log(key)
            // }
        })
        
         cliIo.stderr.on('error', (error)=>{
         console.log(`The error appear on: ${error}`)
     })

     cliIo.on('close', (code)=>{
         console.log(`The installation is closed with code: ${code}`)
     })

    }catch(error){
        console.log(error)
    }
}

listingDeps()