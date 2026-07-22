import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render } from '@inquirer/testing';
import { screen, wrapPrompt } from '@inquirer/testing/vitest'
import {tableMultiple} from '@bartheleway/inquirer-table-multiple'
import { select } from '@inquirer/prompts';
import { confirm } from './confirm.js';

import { tableQuiz, selectQuiz, confirmQuiz } from './inquirer/index.js';


 const tableAnswers = [{
   choice: {
     value: "react",
     title: "REACT"
   },
   answers: ["api"]
}]

vi.mock('@bartheleway/inquirer-table-multiple', () => ({
  // const actual = await importOriginal<typeof import('@bartheleway/inquirer-table-multiple')>();
  // return { ...actual, default: wrapPrompt(actual.default) };
  tableMultiple: vi.fn()
}));

describe('table inquirer', ()=>{

  beforeEach(()=>{
        vi.clearAllMocks()
      })

  it("must works table ", async()=>{

      vi.mocked(tableMultiple).mockResolvedValue(tableAnswers)

      const result = await tableQuiz()

      expect(result).toBeUndefined()
  })

})


describe('select inquirer', ()=>{
   it('must works select', async ()=>{
    const result = selectQuiz()
    expect(screen.getScreen()).toContain('Select your package manager')
    screen.keypress('return')

    await result
   })

})

// describe('confirm inquirer', ()=>{
//     it('must work confirm', async ()=>{
//       const result = confirmQuiz()
//       expect(screen.getScreen()).toContain('Confirm Process?')
//       screen.keypress('return')

//       await result
//     })
// })

describe('custom confirm', ()=>{
   it('handle a custom confirm', async()=>{
      const { answer, events, getScreen } = await render(confirm, {
         message: 'Confirm Process?'
      })

      expect(getScreen()).toMatchInlineSnapshot(`"? Confirm Process? (Y/n) or ⮁"`)

      events.keypress('return')
      expect(getScreen()).toMatchInlineSnapshot(`"? Confirm Process? yes"`);
   })
})

// describe('table test inquirer', ()=>{
//      it('table testing split', async()=>{
//        const result = tableQuiz()

//          expect(screen.getScreen()).toMatchInlineSnapshot([
//          '"? Select your configuration (Press <space> to select, <Up and Down> to move rows, <Left and Right> to move columns)',
//          '',
//          '┌──────────┬─────────┬─────────┬─────────┬────────────────┐',
//          '│ 1-2 of 2 │ Api     │ Client  │ Root    │ Dev-Dependency │',
//          '├──────────┼─────────┼─────────┼─────────┼────────────────┤',
//          '│ REACT    │ [ [ ] ] │   [ ]   │   [ ]   │   [ ]          │',
//          '├──────────┼─────────┼─────────┼─────────┼────────────────┤',
//          '│ NODE     │   [ ]   │   [ ]   │   [ ]   │   [ ]          │',
//          '└──────────┴─────────┴─────────┴─────────┴────────────────┘"'
//        ].join('\n'))
//        screen.keypress('space')

//        await screen.next()
//        expect(screen.getScreen()).toMatchInlineSnapshot([
//          '"? Select your configuration',
//          '',
//          '┌──────────┬─────────┬─────────┬─────────┬────────────────┐',
//          '│ 1-2 of 2 │ Api     │ Client  │ Root    │ Dev-Dependency │',
//          '├──────────┼─────────┼─────────┼─────────┼────────────────┤',
//          '│ REACT    │ [ [×] ] │   [ ]   │   [ ]   │   [ ]          │',
//          '├──────────┼─────────┼─────────┼─────────┼────────────────┤',
//          '│ NODE     │   [ ]   │   [ ]   │   [ ]   │   [ ]          │',
//          '└──────────┴─────────┴─────────┴─────────┴────────────────┘"'
//        ].join('\n'))

//       screen.keypress('return')

//       await result
//      })
//  })

 

