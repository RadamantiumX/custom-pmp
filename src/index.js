import { createPrompt } from '@inquirer/core';
import { useState, useKeypress } from '@inquirer/core';

export const input = createPrompt((config, done)=>{
    const [value, setValue] = useState()

    useKeypress((key, readline) => {
        if(key.name === "enter"){
            done(ansewer)
        }else{
            setValue(readline.line)
        }
    })

    return `? ${config.message} ${value}`
})