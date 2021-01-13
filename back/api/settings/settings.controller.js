const settingsService = require('./settings.service')

async function getSettings(req, res) {
    console.log('settings controller');

    const settings = await settingsService.query(req.query)
    res.send(settings)
}

module.exports = {
    getSettings
}