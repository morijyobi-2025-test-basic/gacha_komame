import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('settingsの排出割合について', () => {
  describe('Cが100の場合', () => {
    beforeEach(() => {
      vi.mock('../settings.js', () => ({
        default: {
          get rs() { return 0 },
          get ra() { return 0 },
          get rb() { return 0 },
          get rc() { return 100 }
        }
      }))
    })
    afterEach(() => {
      vi.resetAllMocks()
    })
    it('戻り値は必ずCになる', () => {
      const results = Array.from({ length: 10000 }, () => gacha())
      results.forEach(result => {
        expect(result).toBe('C')
      })
    })
  })
})
