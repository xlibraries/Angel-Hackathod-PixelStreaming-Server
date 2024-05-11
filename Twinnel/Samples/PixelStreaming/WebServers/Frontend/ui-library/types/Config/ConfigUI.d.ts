import { Config, FlagsIds, SettingsChangedEvent } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { SettingUIFlag } from './SettingUIFlag';
import { SettingUINumber } from './SettingUINumber';
import { SettingUIText } from './SettingUIText';
import { SettingUIOption } from './SettingUIOption';
export declare const LightMode: "LightMode";
type ExtraFlags = typeof LightMode;
export type FlagsIdsExtended = FlagsIds | ExtraFlags;
export declare class ConfigUI {
    private customFlags;
    private flagsUi;
    private numericParametersUi;
    private textParametersUi;
    private optionParametersUi;
    constructor(config: Config);
    /**
     * Create custom UI settings that are not provided by the Pixel Streaming library.
     */
    createCustomUISettings(useUrlParams: boolean): void;
    /**
     * Creates UI wrapper components for each setting element in config.
     * @param config
     */
    registerSettingsUIComponents(config: Config): void;
    /**
     * Make DOM elements for a settings section with a heading.
     * @param settingsElem The parent container for our DOM elements.
     * @param sectionHeading The heading element to go into the section.
     * @returns The constructed DOM element for the section.
     */
    buildSectionWithHeading(settingsElem: HTMLElement, sectionHeading: string): HTMLElement;
    /**
     * Setup flags with their default values and add them to the `Config.flags` map.
     * @param settingsElem - The element that contains all the individual settings sections, flags, and so on.
     */
    populateSettingsElement(settingsElem: HTMLElement): void;
    /**
     * Add a SettingText element to a particular settings section in the DOM and registers that text in the text settings map.
     * @param settingsSection The settings section HTML element.
     * @param settingText The textual settings object.
     */
    addSettingText(settingsSection: HTMLElement, settingText?: SettingUIText): void;
    /**
     * Add a SettingFlag element to a particular settings section in the DOM and registers that flag in the Config.flag map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingFlag(settingsSection: HTMLElement, settingFlag?: SettingUIFlag<FlagsIdsExtended>): void;
    /**
     * Add a numeric setting element to a particular settings section in the DOM and registers that flag in the Config.numericParameters map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingNumeric(settingsSection: HTMLElement, setting?: SettingUINumber): void;
    /**
     * Add an enum based settings element to a particular settings section in the DOM and registers that flag in the Config.enumParameters map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingOption(settingsSection: HTMLElement, setting?: SettingUIOption): void;
    onSettingsChanged({ data: { id, target, type } }: SettingsChangedEvent): void;
    /**
     * Add a callback to fire when the flag is toggled.
     * @param id The id of the flag.
     * @param onChangeListener The callback to fire when the value changes.
     */
    addCustomFlagOnSettingChangedListener(id: ExtraFlags, onChangeListener: (newFlagValue: boolean) => void): void;
    /**
     * Set the label for the flag.
     * @param id The id of the flag.
     * @param label The new label to use for the flag.
     */
    setCustomFlagLabel(id: ExtraFlags, label: string): void;
    /**
     * Get the value of the configuration flag which has the given id.
     * @param id The unique id for the flag.
     * @returns True if the flag is enabled.
     */
    isCustomFlagEnabled(id: ExtraFlags): boolean;
}
export {};
