import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('Aが100の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: { rs: 0, ra: 100, rb: 0, rc: 0 }
    }))
  })
  afterEach(() => { vi.resetModules() })

  it('戻り値は必ずAになる', () => {
    const results = Array.from({ length: 10000 }, () => gacha())
    results.forEach(result => {
      expect(result).toBe('A')
    })
  })
})