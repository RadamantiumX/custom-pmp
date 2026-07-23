import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render } from '@inquirer/testing';
import { screen, wrapPrompt } from '@inquirer/testing/vitest'
import { confirm } from './confirm.js';
import { confirmQuiz } from './inquirer/index.js';

  vi.mock('./confirm.js', ()=>({
     confirm: vi.fn()
  }))


  describe('confirm inquirer', ()=>{
   
    beforeEach(()=>{
          vi.clearAllMocks()
        })
      it('must work confirm', async ()=>{
           vi.mocked(confirm).mockResolvedValue(true)

       const result = await confirmQuiz()

       expect(confirm).toHaveBeenCalledWith(
        expect.objectContaining({message: 'Confirm Process?'})
       )

       // expect(result).toStrictEqual({confirmChoices: true})
      })
  })