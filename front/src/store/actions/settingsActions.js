import { settingsService } from '../../services/settingsService';

export function loadSettings() {
    return async dispatch => {
        try {
            const allSettings = await settingsService.getSettings();
            dispatch({ type: 'LOAD_SETTINGS', allSettings });
        } catch (err) {
            console.log('SettingsActions: err in loadSettings', err);
        }
    };
}

export function updateSettings(set) {
    return async dispatch => {
        const _set = await settingsService.update(set);
        dispatch({ type: 'UPDATE_SET', _set })
    };
}