import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('S:50, A:50, B:0, C:0 の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: {
        get rs() { return 50 },
        get ra() { return 50 },
        get rb() { return 0 },
        get rc() { return 0 }
      }
    }))
  })
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('SかAしか出ない', () => {
    const results = Array.from({ length: 1000 }, () => gacha())
    results.forEach(result => {
      expect(['S', 'A']).toContain(result)
    })
  })
})
