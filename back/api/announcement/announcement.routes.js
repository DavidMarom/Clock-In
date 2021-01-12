const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getAllAnnouncements, countAnnouncements, updateAnnouncement, getAnnouncements, getAnnouncement, updateAnnouncement,deleteAnnouncement} = require('./user.controller')
const router = express.Router()

router.get('/', getAllAnnouncements)
router.get('/count', countAnnouncements)
router.put('/update2', updateAnnouncement)
router.get('/:filter', getAnnouncements)
router.get('/:id', getAnnouncement)
router.put('/:id', requireAuth , updateAnnouncement)
router.delete('/:id', requireAdmin, deleteAnnouncement)

module.exports = router