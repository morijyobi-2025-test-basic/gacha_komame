import { describe, expect, it, vi, beforeEach, afterEach} from 'vitest'

import gacha from '../gacha.js'

describe('settingsの排出割合について', () => {
  describe('Sが100の場合', () => {
    beforeEach(() => {

      vi.mock('../settings.js', () => {
        return {
          default: {
            rs: 100,
            ra: 0,
            rb: 0,
            rc: 0
          }
        }

      })

    })


    afterEach(() => {
      vi.resetModules()
    })


    it('戻り値は必ずSになる', () => {
      const results = Array.from({ length: 10000 }, () => gacha())

      results.forEach(result => {
        expect(result).toBe('S')
      })
    })
    

  })

})
