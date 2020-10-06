const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getTasks, getTask, addTask, deleteTask, updateTask, performTask } = require('./task.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', addTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)
router.put('/:id/start', performTask)

module.exports = router