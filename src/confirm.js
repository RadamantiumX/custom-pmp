import { styleText } from 'node:util';
import { createPrompt, 
    useState,
  useKeypress,
  isEnterKey,
  isUpKey,
  isDownKey,
  usePrefix,
  isSpaceKey } from "@inquirer/core";


 export const confirm = createPrompt(
     (config, done) => {
      const [status, setStatus] = useState('idle');
      const [value, setValue] = useState('');
      const prefix = usePrefix({});
      useKeypress((key, rl) => {
        if (isEnterKey(key)) {
          const answer = value ? /^y(i)?/i.test(value) : config.default !== false;
          setValue(answer ? 'yes' : 'no');
          setStatus('done');
          done(answer);
        }else if(isUpKey(key)){
            setValue('yes')
        }else if(isDownKey(key)){
            setValue('no')
        }else {

          setValue(rl.line);
        }
      });
   
      let formattedValue = value;
      let defaultValue = '';
      if (status === 'done') {
        formattedValue = styleText(/^y(i)?/i.test(value) ? 'cyan' : 'red', value);
      } else {
     
        defaultValue = styleText('italic', config.default === false ? ' (y/N) or ⮁ ' : ' (Y/n) or ⮁ ');
      }

      const message = styleText('bold', config.message);
      return `${prefix} ${message}${defaultValue} ${formattedValue}`;
      

    },

   
  );

// const confirmation = confirm({message: "Accept the terms?"})