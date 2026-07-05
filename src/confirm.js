import { styleText } from 'node:util';
import { createPrompt, 
    useState,
  useKeypress,
  isEnterKey,
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
        } else {
          setValue(rl.line);
        }
      });
   
      let formattedValue = value;
      let defaultValue = '';
      if (status === 'done') {
        formattedValue = styleText(/^y(i)?/i.test(value) ? 'cyan' : 'red', value);
      } else {
     
        defaultValue = styleText('italic', config.default === false ? ' (y/N)' : ' (Y/n)');
      }

      const message = styleText('bold', config.message);
      return `${prefix} ${message}${defaultValue} ${formattedValue}`;
      

    },

   
  );

  // const confirmation = confirm({message: "Accept the terms"})