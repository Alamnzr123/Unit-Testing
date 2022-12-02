const sum = (param1, param2) => {
    return param1 + param2;
}

const { expect } = require('chai')

describe('test function', () => {
    it('function sum', () => {
        expect(sum(1, 2)).to.equal(3)
    })
})

