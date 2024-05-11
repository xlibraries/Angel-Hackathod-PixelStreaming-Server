import type { NumericParametersIds, SettingNumber } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { SettingUIBase } from './SettingUIBase';
/**
 * A number spinner with a text label beside it.
 */
export declare class SettingUINumber<CustomIds extends string = NumericParametersIds> extends SettingUIBase {
    _spinner: HTMLInputElement;
    _settingsTextElem: HTMLElement;
    constructor(setting: SettingNumber<CustomIds>);
    /**
     * @returns The setting component.
     */
    get setting(): SettingNumber<CustomIds>;
    get settingsTextElem(): HTMLElement;
    /**
     * Get the HTMLInputElement for the button.
     */
    get spinner(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * Set the number in the spinner (will be clamped within range).
     */
    set number(newNumber: number);
    /**
     * Get value
     */
    get number(): number;
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
