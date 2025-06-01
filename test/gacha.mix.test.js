import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('settingsの排出割合について', () => {
  describe('S:25, A:25, B:25, C:25の場合', () => {
    beforeEach(() => {
      vi.mock('../settings.js', () => ({
        default: {
          get rs() { return 25 },
          get ra() { return 25 },
          get rb() { return 25 },
          get rc() { return 25 }
        }
      }))
    })
    afterEach(() => {
      vi.resetAllMocks()
    })
    it('4種類がほぼ均等に出る', () => {
      const results = Array.from({ length: 10000 }, () => gacha())
      const counts = { S: 0, A: 0, B: 0, C: 0 }
      results.forEach(result => {
        counts[result]++
      })
      expect(counts.S).toBeGreaterThan(2000)
      expect(counts.A).toBeGreaterThan(2000)
      expect(counts.B).toBeGreaterThan(2000)
      expect(counts.C).toBeGreaterThan(2000)
      expect(counts.S).toBeLessThan(3000)
      expect(counts.A).toBeLessThan(3000)
      expect(counts.B).toBeLessThan(3000)
      expect(counts.C).toBeLessThan(3000)
    })
  })
})
