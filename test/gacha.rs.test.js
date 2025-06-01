import { describe, expect, it, vi, beforeEach, afterEach} from 'vitest'

// settingsがモック化された後で、gacha.jsをインポート
import gacha from '../gacha.js'

describe('settingsの排出割合について', () => {
  describe('Sが100の場合', () => {
    beforeEach(() => {
      // テスト用に設定を上書きするモック関数を作成
      vi.mock('../settings.js', () => {
        return {
          default: {
            get rs() { return 100 },
            get ra() { return 0 },
            get rb() { return 0 },
            get rc() { return 0 }
          }
        }
      })
    })

    afterEach(() => {
      // モックをリセット
      vi.resetAllMocks()
    })

    it('戻り値は必ずSになる', () => {
      // ランダム性があっても10000回実行したも全て'S'になるはず
      const results = Array.from({ length: 10000 }, () => gacha())

      // 全ての結果が'S'であることを確認
      results.forEach(result => {
        expect(result).toBe('S')
      })
    })
  })
})
