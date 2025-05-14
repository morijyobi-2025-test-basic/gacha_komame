// 割合の定数を読み込む
import {rs, ra, rb, rc } from './settings.js'

const gacha = () => {
  // S, A, B, Cのいずれかをランダムに返す
  // Sはrs, Aはra, Bはrb, Cはrc の確率で出る
  const random = Math.random()
  if (random < rs) {
    return 'S'
  } else if (random < rs + ra) {
    return 'A'
  } else if (random < rs + ra + rb) {
    return 'B'
  } else if (random < rs + ra + rb + rc) {
    return 'C'
  }
}

export default gacha