import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('Bが100の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: { rs: 0, ra: 0, rb: 100, rc: 0 }
    }))
  })
  afterEach(() => { vi.resetModules() })

  it('戻り値は必ずBになる', () => {
    const results = Array.from({ length: 10000 }, () => gacha())
    results.forEach(result => {
      expect(result).toBe('B')
    })
  })
})