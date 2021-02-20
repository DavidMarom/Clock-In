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
    return async dispatch => {
        try {
            const _ann = await announcementsService.addAnn(ann);
            dispatch({ type: 'ADD_ANN', _ann })
        } catch (err) {
            console.log('SettingsActions: err in updateSettings', err);
        }
    }
}


export function removeAnn(annId) {
    return async dispatch => {
        try {
            await announcementsService.remove(annId);
            dispatch({ type: 'REMOVE_ANN', annId });
        } catch (err) {
            console.log('AnnActions: err in removeAnn', err);
        }
    };
}
