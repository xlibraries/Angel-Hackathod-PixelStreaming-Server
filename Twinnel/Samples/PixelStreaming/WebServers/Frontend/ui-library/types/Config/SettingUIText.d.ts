import type { SettingText, TextParametersIds } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { SettingUIBase } from './SettingUIBase';
export declare class SettingUIText<CustomIds extends string = TextParametersIds> extends SettingUIBase {
    _textbox: HTMLInputElement;
    _settingsTextElem: HTMLElement;
    constructor(setting: SettingText<CustomIds>);
    /**
     * @returns The setting component.
     */
    get setting(): SettingText<CustomIds>;
    get settingsTextElem(): HTMLElement;
    get textbox(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set text(inValue: string);
    /**
     * Get value
     */
    get text(): string;
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
