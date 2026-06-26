import { styleText } from 'node:util';
import {
  createPrompt,
  useState,
  useKeypress,
  isEnterKey,
  usePrefix,

} from '@inquirer/core';

const confirm = createPrompt(
  (config, done) => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState('');
    const prefix = usePrefix({});

    useKeypress((key, rl) => {
      if (isEnterKey(key)) {
        const answer = value ? /^s(i)?/i.test(value) : config.default !== false;
        setValue(answer ? 'si' : 'no');
        setStatus('done');
        done(answer);
      } else {
        setValue(rl.line);
      }
    });

    let formattedValue = value;
    let defaultValue = '';
    if (status === 'done') {
      formattedValue = styleText('cyan', value);
    } else {
      defaultValue = styleText('dim', config.default === false ? ' (s/N)' : ' (S/n)');
    }

    const message = styleText('bold', config.message);
    return `${prefix} ${message}${defaultValue} ${formattedValue}`;
  },
);

/**
 *  Which then can be used like this:
 */
const answer = await confirm({ message: 'Quieres continuar?' });

console.log(answer)