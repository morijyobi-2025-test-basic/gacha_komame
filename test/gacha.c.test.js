import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('Cが100の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: { rs: 0, ra: 0, rb: 0, rc: 100 }
    }))
  })
  afterEach(() => { vi.resetModules() })

  it('戻り値は必ずCになる', () => {
    const results = Array.from({ length: 10000 }, () => gacha())
    results.forEach(result => {
      expect(result).toBe('C')
    })
  })
})