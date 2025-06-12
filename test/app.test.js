import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import app from '../app.js'

let server

beforeAll((done) => {
  server = app.listen(0, done)
})

afterAll((done) => {
  server.close(done)
})

describe('/gacha API', () => {
  it('GET /gacha: 200, Content-Type, JSON, key=result, value=SABC', async () => {
    const res = await request(server).get('/gacha')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/application\/json/)
    expect(typeof res.body).toBe('object')
    expect(Object.keys(res.body)).toHaveLength(1)
    expect(res.body).toHaveProperty('result')
    expect(['S', 'A', 'B', 'C']).toContain(res.body.result)
  })

  it('POST /gacha: 404', async () => {
    const res = await request(server).post('/gacha')
    expect(res.status).toBe(404)
  })

  it('PUT /gacha: 404', async () => {
    const res = await request(server).put('/gacha')
    expect(res.status).toBe(404)
  })

  it('DELETE /gacha: 404', async () => {
    const res = await request(server).delete('/gacha')
    expect(res.status).toBe(404)
  })
})

describe('Other URLs', () => {
  const methods = ['get', 'post', 'put', 'delete']
  for (const method of methods) {
    it(`${method.toUpperCase()} /unknown: 404`, async () => {
      const res = await request(server)[method]('/unknown')
      expect(res.status).toBe(404)
    })
  }
})

describe('ガチャのランダム性', () => {
  it('1000回引いて全てのランクが1回以上出る', async () => {
    const results = { S: 0, A: 0, B: 0, C: 0 }
    for (let i = 0; i < 1000; i++) {
      const res = await request(server).get('/gacha')
      results[res.body.result]++
    }
    expect(results.S).toBeGreaterThan(0)
    expect(results.A).toBeGreaterThan(0)
    expect(results.B).toBeGreaterThan(0)
    expect(results.C).toBeGreaterThan(0)
  })
})

describe('レスポンス型チェック', () => {
  it('resultは1文字の文字列である', async () => {
    const res = await request(server).get('/gacha')
    expect(typeof res.body.result).toBe('string')
    expect(res.body.result.length).toBe(1)
  })
})

describe('レスポンスタイム', () => {
  it('GET /gacha のレスポンスが200ms以内', async () => {
    const start = Date.now()
    const res = await request(server).get('/gacha')
    const elapsed = Date.now() - start
    expect(elapsed).toBeLessThanOrEqual(200)
    expect(res.status).toBe(200)
  })
})
