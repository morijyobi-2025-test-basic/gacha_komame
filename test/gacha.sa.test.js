import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('S=50, A=50の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: { rs: 50, ra: 50, rb: 0, rc: 0 }
    }))
  })
  afterEach(() => { vi.resetModules() })

  it('SとAがほぼ半々で出る', () => {
    const results = Array.from({ length: 10000 }, () => gacha())
    const sCount = results.filter(r => r === 'S').length
    const aCount = results.filter(r => r === 'A').length
    expect(sCount).toBeGreaterThan(4500)
    expect(aCount).toBeGreaterThan(4500)
  })
})