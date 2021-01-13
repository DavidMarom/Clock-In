import httpService from './httpService'

function getSettings() {
    return httpService.get(`settings/`);

}


export const settingsService = {
    getSettings
}