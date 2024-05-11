import { SettingBase } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
/**
 * Base class for a setting that has a text label, an arbitrary setting value it stores, an a HTML element that represents this setting.
 */
export declare class SettingUIBase {
    _setting: SettingBase;
    _rootElement: HTMLElement;
    constructor(setting: SettingBase);
    /**
     * @returns The setting component.
     */
    get setting(): SettingBase;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
}
