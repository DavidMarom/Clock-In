const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getAllAnnouncements, addAnnouncement, deleteAnnouncement } = require('./announcement.controller')
const router = express.Router()

router.get('/', getAllAnnouncements)
// router.get('/count', countAnnouncements)
// router.put('/update2', updateAnnouncement)
// router.get('/:filter', getAnnouncements)
// router.get('/:id', getAnnouncement)
router.put('/add', addAnnouncement)
router.delete('/:id', deleteAnnouncement)

module.exports = router