import httpService from './httpService'

async function getAnnouncements() {
    try {

        const res = await httpService.get(`announcement/`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function addAnn(req) {
    try {
        const res = await httpService.put(`announcement/add`,req);
        return res;
    } catch (err) {
        console.log(err);
    }
}

function remove(annId) {
    return httpService.delete(`announcement/${annId}`)
}


export const announcementsService = {
    getAnnouncements,
    addAnn,
    remove
};

