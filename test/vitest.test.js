import { describe, expect, it, vi } from 'vitest'

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

  describe('Math.ramdom（）について', () =>{
    it('0.01の場合', () => {
      // sがでる
      // Math.ramdomが0.01を必ず返すようにspyOnする
      vi.spyOn(Math, 'random').mockReturnValue(0.01)
      expect(gacha()).toBe('S')
    })
    it('0.0499999の場合', ()  =>{
      // sがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.0499999)
      expect(gacha()).toBe('S')

    })
    it('0.05の場合', () =>{
      // Aがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.05)
      expect(gacha()).toBe('A')

    })
    it('0.14の場合', () =>{
      // Aがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.14)
      expect(gacha()).toBe('A')

    })
    it('0.15の場合', () =>{
      // Bがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.15)
      expect(gacha()).toBe('B')

    })
    it('0.34の場合', () =>{
      // Bがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.34)
      expect(gacha()).toBe('B')

    })
    it('0.35の場合', () =>{
      // Cがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.35)
      expect(gacha()).toBe('C')

    })
    it('0.60の場合', () =>{
      // Cがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.60)
      expect(gacha()).toBe('C')

    })
    it('0.99の場合', () =>{
      // Cがでる
      vi.spyOn(Math, 'random').mockReturnValue(0.99)
      expect(gacha()).toBe('C')

    })

  })

})
