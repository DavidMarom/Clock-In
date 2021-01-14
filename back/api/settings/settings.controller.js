const settingsService = require('./settings.service')

async function getSettings(req, res) {
    const settings = await settingsService.query(req.query)
    res.send(settings)
}

async function updateSet(req, res) {
    console.log(req.body);
    const set  = await settingsService.update2(req.body)
    res.send(set)
}

module.exports = {
    getSettings,
    updateSet
}