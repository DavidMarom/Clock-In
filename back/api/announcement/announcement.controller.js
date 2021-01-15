const announcementService = require('./announcement.service')

// async function getAnnouncement(req, res) {
//     const announcement = await announcementService.getById(req.params.id)
//     res.send(announcement)
// }

async function getAllAnnouncements(req, res) {
    const announcements = await announcementService.query3();
    res.send(announcements);
}

// async function countAnnouncements(req, res) {
//     const count = await announcementService.count()
//     res.send(count);
// }

// async function getAllAnnouncements_page(req, res) {
//     const queryPage = req.query.page;
//     const pageSize = 4;
//     const announcements = await announcementService.query2(queryPage, pageSize);
//     res.send(announcements)
// }

// async function deleteAnnouncement(req, res) {
//     await announcementService.remove(req.params.id)
//     res.end()
// }

// async function updateAnnouncement(req, res) {
//     const announcements = req.body;
//     await announcementService.update(announcements)
//     res.send(announcements)
// }

// async function updateAnnouncement2(req, res) {
//     const announcements = req.body;
//     await announcementService.update2(announcements)
//     res.send(announcements)
// }

module.exports = {
    getAllAnnouncements
}