import { expect, test } from 'vitest'
import gacha from '../gacha.js'

test('gacha関数の戻り値はSである', () => {
    expect(gacha()).toBe('S')
  })