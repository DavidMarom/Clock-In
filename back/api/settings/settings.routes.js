const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getSettings,updateSet} = require('./settings.controller')
const router = express.Router()


console.log('██in settings routes');
router.get('/', getSettings)
// router.get('/count', countUsers)
router.put('/update', updateSet)
// router.get('/:filter', getUsers)
// router.get('/:id', getUser)
// router.put('/:id', requireAuth , updateUser)
// router.delete('/:id', requireAdmin, deleteUser)

module.exports = router