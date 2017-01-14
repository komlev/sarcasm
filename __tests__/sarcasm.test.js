const sarcasm = require('../src/index').sarcasm
describe('sarcasm', () => {
  it('should return something', () => {
    expect(sarcasm()).toBeDefined()
  })

  it('should return string', () => {
    expect(typeof sarcasm()).toBe('string')
  })

  it('should return sarcastic line', () => {
    expect(sarcasm()).toBe('This is great project')
  })
})
