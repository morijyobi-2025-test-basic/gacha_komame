import { describe, expect, it  } from 'vitest'

import settings from '../settings.js'

describe('settings.js について', () => {
  const rs = settings.rs
  const ra = settings.ra
  const rb = settings.rb
  const rc = settings.rc


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

  describe('rsの値は', () => {
    it('整数である', () => {
      expect(rs % 1).toBe(0)
    })
  })
  describe('raの値は', () => {
    it('整数である', () => {
      expect(ra % 1).toBe(0)
    })
  })
  describe('rbの値は', () => {
    it('整数である', () => {
      expect(rb % 1).toBe(0)
    })
  })

  describe('rcの値は', () => {
    it('整数である', () => {
      expect(rc % 1).toBe(0)
    })
  })



})