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

// export function updateSettings(set) {
//     return async dispatch => {
//         try {
//             const _set = await settingsService.update(set);
//             dispatch({ type: 'UPDATE_SET', _set })
//         } catch (err) {
//             console.log('SettingsActions: err in updateSettings', err);
//         }
//     }
// }