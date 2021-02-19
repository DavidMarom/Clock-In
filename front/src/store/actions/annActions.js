import { announcementsService } from '../../services/announcementsService';

export function loadAnn() {
    return async dispatch => {
        try {
            const allAnn = await announcementsService.getAnnouncements();
            dispatch({ type: 'LOAD_ANN', allAnn });
        } catch (err) {
            console.log('SettingsActions: err in loadAnnouncements', err);
        }
    };
}

export function addAnn(ann) {
    console.log('In annActions.js (store actions)', ann);
    return async dispatch => {
        try {
            const _ann = await announcementsService.addAnn(ann);
            dispatch({ type: 'ADD_ANN', _ann })
        } catch (err) {
            console.log('SettingsActions: err in updateSettings', err);
        }
    }
}