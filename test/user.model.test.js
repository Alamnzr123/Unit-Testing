// // GET DATA

// const { expect } = require('chai')
// const { Users } = require('../src/models')

// describe('Test User models', async () => {
//     it('get all users', async() => {
//         const user = await Users.findAll();
//         console.log(user)
//         expect(user).to.be.an('array');
//     })
// })


// CREATE DATA

const { expect } = require('chai')
const { Users } = require('../src/models')
const { faker } = require('@faker-js/faker')

const { Op } = require('sequelize')

describe('Test User models', async () => {

    // agar data tidak menyimpan ke DB
    afterEach(async() => {
        await Users.destroy({
            where: {
                fullname: {
                    [Op.like]: '%testing%'
                }
            }
        })
    })



    it('model: get all users', async () => {
        const user = await Users.findAll();
        console.log(user)
        expect(user).to.be.an('array');
    })

    it('model: insert user', async () => {
        const dummy = {
            fullname: `testing-${faker.name.fullName()}`,
            phone: `testing-${faker.phone.number()}`,
            address: `testing-${faker.address.cityName()}`,
        }

        const user = await Users.create(dummy);
        expect(user).to.be.an('object')
        console.log(user)
    })
})