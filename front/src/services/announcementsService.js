import httpService from './httpService'

function getAnnouncements(filter, currPage) {
    return httpService.get(`announcements/${filter}?page=${currPage}`);
}
