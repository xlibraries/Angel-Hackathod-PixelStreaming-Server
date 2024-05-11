import type { OptionParametersIds, SettingOption } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { SettingUIBase } from './SettingUIBase';
export declare class SettingUIOption<CustomIds extends string = OptionParametersIds> extends SettingUIBase {
    _selector: HTMLSelectElement;
    _settingsTextElem: HTMLElement;
    constructor(setting: SettingOption<CustomIds>);
    /**
     * @returns The setting component.
     */
    get setting(): SettingOption<CustomIds>;
    get selector(): HTMLSelectElement;
    get settingsTextElem(): HTMLElement;
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * Get label
     */
    get label(): string;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    set options(values: Array<string>);
    get options(): Array<string>;
    set selected(value: string);
    get selected(): string;
    disable(): void;
    enable(): void;
}
