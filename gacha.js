import settings from './settings.js'

const pool = [
  ...Array(settings.rs).fill('S'), // Sランクをrs個
  ...Array(settings.ra).fill('A'), // Aランクをra個
  ...Array(settings.rb).fill('B'), // Bランクをrb個
  ...Array(settings.rc).fill('C')  // Cランクをrc個
]

// pool配列からランダムに1つ選んで返す関数
const gacha = () => {
  const index = Math.floor(Math.random() * pool.length) // 0以上pool.length未満の整数をランダムに生成
  return pool[index] // ランダムに選ばれたランクを返す
}

export default gacha
