const { Users, Books } = require('../models')

module.exports = {
  index: async (req, res) => {
    try {
      const user = await Users.findAll({
        include: [{
          model: Books,
          as: 'books',
        }]
      });

      res.json({
        data: user,
        message: 'get all user success'
      })
    } catch (error) {
      res.json(error)
    }
  },
  detail: async (req, res) => {
    try {
      const id = req.params.id

      const user = await Users.findByPk(id)
      console.log(id)
      res.json({
        data: user,
        message: 'get detail user success'
      })
    } catch (error) {
      res.json(error)
    }
  },

  store: async (req, res) => {
    try {
      const { fullname, phone, address } = req.body

      const user = await Users.create({
        fullname,
        phone,
        address
      })

      console.log(req.body)
      res.json({
        data: user,
        message: 'store user success'
      })
    } catch (error) {
      res.json(error)
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id
      const { fullname, phone, address } = req.body

      const user = await Users.update({
        fullname,
        phone,
        address
      }, {
        where: {
          id
        }
      })
      console.log(id)
      res.json({
        data: user,
        message: 'update user success'
      })
    } catch (error) {
      res.json(error)
    }
  },

  destroy: async (req, res) => {
    try {
      const id = req.params.id

      const user = await Users.destroy({
        where: {
          id
        }
      })
      console.log(id)
      res.json({
        data: user,
        message: 'delete user success'
      })
    } catch (error) {
      res.json(error)
    }
  }
}
