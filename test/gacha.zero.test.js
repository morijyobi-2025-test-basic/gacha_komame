import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('全て0の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: { rs: 0, ra: 0, rb: 0, rc: 0 }
    }))
  })
  afterEach(() => { vi.resetModules() })

  it('戻り値がundefinedまたはnullになる', () => {
    const result = gacha()
    expect(result === undefined || result === null).toBe(true)
  })
})