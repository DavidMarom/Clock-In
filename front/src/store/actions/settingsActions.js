import { settingsService } from '../../services/settingsService';

export function loadSettings() {

    return async dispatch => {
        try {
            const settings = await settingsService.getSettings();
            dispatch({ type: 'LOAD_SETTINGS', settings });
        } catch (err) {
            console.log('SettingsActions: err in loadSettings', err);

        }
    };
}