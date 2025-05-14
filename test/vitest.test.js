import { describe, expect, it  } from 'vitest'

import gacha from '../gacha.js'

describe('gacha関数の', () => {
  describe('戻り値は', () => {
    it('文字列である', () => {
      expect(gacha()).toBeTypeOf('string')
    })

    it('1文字である', () => {
      expect(gacha()).toHaveLength(1)
    })

    it('SABCのどれかである', () => {
      expect(gacha()).toBeOneOf(['S', 'A', 'B', 'C'])
    })

    // gacha() 関数を1万回回したら、結果にSもAもBもCも含まれる
    it('100万回 回したら、結果にSもAもBもCも含まれる', () => {
      // Array.fromを使って100万回のgacha()呼び出し結果を持つ配列を作成
      const result = Array.from({ length: 1000000 }, () => gacha())

      // S, A, B, C が含まれているか確認
      expect(result).toContain('S')
      expect(result).toContain('A')
      expect(result).toContain('B')
      expect(result).toContain('C')
    })

  })
})