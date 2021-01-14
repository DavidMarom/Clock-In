import httpService from './httpService'

function getSettings() {
    return httpService.get(`settings/`);
}
function update(set) {
    return httpService.put(`settings/update`,set);
}

export const settingsService = {
    getSettings,
    update
}