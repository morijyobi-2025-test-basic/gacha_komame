import { describe, expect, it  } from 'vitest'

import { rs, ra, rb, rc } from '../settings.js'

describe('settings.js について', () => {


  describe('rsの値', () => {
    it('0より大きい', () => {
      expect(rs).toBeGreaterThan(0)
    })

    it('100より小さい', () => {
      expect(rs).toBeLessThan(100)
    })
  })

  describe('raの値', () => {
    it('0より大きい', () => {
      expect(ra).toBeGreaterThan(0)
    })


    it('100より小さい', () => {
      expect(ra).toBeLessThan(100)
    })
  })

  describe('rbの値', () => {
    it('0より大きい', () => {
      expect(rb).toBeGreaterThan(0)
    })

    it('100より小さい', () => {
      expect(rb).toBeLessThan(100)
    })
  })

  describe('rcの値', () => {
    it('0より大きい', () => {
      expect(rc).toBeGreaterThan(0)
    })

    it('100より小さい', () => {
      expect(rc).toBeLessThan(100)
    })
  })

  describe('割合の合計値', () => {
    it('100である', () => {
      expect(rs + ra + rb + rc).toBe(100)
    })
  })

  describe('確率の勾配', () => {
    it('S < A < B < C の順になっている', () => {
      expect(rs).toBeLessThan(ra)  // rs < ra
      expect(ra).toBeLessThan(rb)  // ra < rb
      expect(rb).toBeLessThan(rc)  // rb < rc
    })
  })

})