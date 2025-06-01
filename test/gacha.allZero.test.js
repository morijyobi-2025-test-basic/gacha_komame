import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import gacha from '../gacha.js'

describe('S:0, A:0, B:0, C:0 の場合', () => {
  beforeEach(() => {
    vi.mock('../settings.js', () => ({
      default: {
        get rs() { return 0 },
        get ra() { return 0 },
        get rb() { return 0 },
        get rc() { return 0 }
      }
    }))
  })
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('何も出ない（undefinedを返す）', () => {
    expect(gacha()).toBeUndefined()
  })
})