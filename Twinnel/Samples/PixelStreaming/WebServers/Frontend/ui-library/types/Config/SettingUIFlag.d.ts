import type { FlagsIds, SettingFlag } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { SettingUIBase } from './SettingUIBase';
export declare class SettingUIFlag<CustomIds extends string = FlagsIds> extends SettingUIBase {
    _checkbox: HTMLInputElement;
    _settingsTextElem: HTMLElement;
    onChangeEmit: (changedValue: boolean) => void;
    constructor(setting: SettingFlag<CustomIds>);
    /**
     * @returns The setting component.
     */
    get setting(): SettingFlag<CustomIds>;
    get settingsTextElem(): HTMLElement;
    get checkbox(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set flag(inValue: boolean);
    /**
     * Get value
     */
    get flag(): boolean;
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * Get label
     */
    get label(): string;
}
