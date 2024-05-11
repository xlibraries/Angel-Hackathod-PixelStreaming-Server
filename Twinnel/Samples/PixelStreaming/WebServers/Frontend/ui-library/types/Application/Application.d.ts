import { PixelStreaming, AggregatedStats, LatencyTestResults, InitialSettings, MessageStreamerList } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.4';
import { OverlayBase } from '../Overlay/BaseOverlay';
import { ActionOverlay } from '../Overlay/ActionOverlay';
import { TextOverlay } from '../Overlay/TextOverlay';
import { AFKOverlay } from '../Overlay/AFKOverlay';
import { Controls } from '../UI/Controls';
import { SettingsPanel } from '../UI/SettingsPanel';
import { StatsPanel } from '../UI/StatsPanel';
import { VideoQpIndicator } from '../UI/VideoQpIndicator';
import { ConfigUI } from '../Config/ConfigUI';
import { PanelConfiguration, UIElementConfig } from '../UI/UIConfigurationTypes';
import { DataChannelLatencyTestResult } from "@epicgames-ps/lib-pixelstreamingfrontend-ue5.4/types/DataChannel/DataChannelLatencyTestResults";
/**
 * Configuration of the internal video QP indicator element.
 * By default, one will be made, but if needed this can be disabled.
 *
 * Note: For custom UI elements to react to the QP being changed, use a PixelStreaming
 * object's addEventListener('videoEncoderAvgQP', ...) or removeEventListener(...).
 */
export type VideoQPIndicatorConfig = {
    disableIndicator?: boolean;
};
/**
 * UI Options can be provided when creating an Application, to configure it's internal
 * and external behaviour, enable/disable features, and connect to external UI.
 */
export interface UIOptions {
    stream: PixelStreaming;
    onColorModeChanged?: (isLightMode: boolean) => void;
    /** By default, a settings panel and associate visibility toggle button will be made.
      * If needed, this behaviour can be configured. */
    settingsPanelConfig?: PanelConfiguration;
    /** By default, a stats panel and associate visibility toggle button will be made.
      * If needed, this behaviour can be configured. */
    statsPanelConfig?: PanelConfiguration;
    /** If needed, the full screen button can be external or disabled. */
    fullScreenControlsConfig?: UIElementConfig;
    /** If needed, XR button can be external or disabled. */
    xrControlsConfig?: UIElementConfig;
    /** Configuration of the video QP indicator. */
    videoQpIndicatorConfig?: VideoQPIndicatorConfig;
}
/**
 * An Application is a combination of UI elements to display and manage a WebRTC Pixel Streaming
 * connection. It includes features for controlling a stream with mouse and keyboard,
 * managing connection endpoints, as well as displaying stats and other information about it.
 */
export declare class Application {
    stream: PixelStreaming;
    _rootElement: HTMLElement;
    _uiFeatureElement: HTMLElement;
    currentOverlay: OverlayBase | null;
    disconnectOverlay: ActionOverlay;
    connectOverlay: ActionOverlay;
    playOverlay: ActionOverlay;
    infoOverlay: TextOverlay;
    errorOverlay: TextOverlay;
    afkOverlay: AFKOverlay;
    controls: Controls;
    settingsPanel: SettingsPanel;
    statsPanel: StatsPanel;
    videoQpIndicator: VideoQpIndicator;
    configUI: ConfigUI;
    onColorModeChanged: UIOptions["onColorModeChanged"];
    protected _options: UIOptions;
    /**
     * @param options - Initialization options
     */
    constructor(options: UIOptions);
    createOverlays(): void;
    /**
     * Set up button click functions and button functionality
     */
    createButtons(): void;
    /**
     * Configure the settings with on change listeners and any additional per experience settings.
     */
    configureSettings(): void;
    registerCallbacks(): void;
    /**
     * Gets the rootElement of the application, video stream and all UI are children of this element.
     */
    get rootElement(): HTMLElement;
    /**
     * Gets the element that contains all the UI features, like the stats and settings panels.
     */
    get uiFeaturesElement(): HTMLElement;
    /**
     * Shows the disconnect overlay
     * @param updateText - the text that will be displayed in the overlay
     */
    showDisconnectOverlay(updateText: string): void;
    /**
     * Update the disconnect overlays span text
     * @param updateText - the new countdown number
     */
    updateDisconnectOverlay(updateText: string): void;
    /**
     * Activates the disconnect overlays action
     */
    onDisconnectionAction(): void;
    /**
     * Hides the current overlay
     */
    hideCurrentOverlay(): void;
    /**
     * Shows the connect overlay
     */
    showConnectOverlay(): void;
    /**
     * Shows the play overlay
     */
    showPlayOverlay(): void;
    /**
     * Shows the text overlay
     * @param text - the text that will be shown in the overlay
     */
    showTextOverlay(text: string): void;
    /**
     * Shows the error overlay
     * @param text - the text that will be shown in the overlay
     */
    showErrorOverlay(text: string): void;
    /**
     * Shows or hides the settings panel if clicked
     */
    settingsClicked(): void;
    /**
     * Shows or hides the stats panel if clicked
     */
    statsClicked(): void;
    /**
     * Activates the connect overlays action
     */
    onConnectAction(): void;
    /**
     * Activates the play overlays action
     */
    onPlayAction(): void;
    /**
     * Shows the afk overlay
     * @param countDown - the countdown number for the afk countdown
     */
    showAfkOverlay(countDown: number, dismissAfk: () => void): void;
    /**
     * Show the Connect Overlay or auto connect
     */
    showConnectOrAutoConnectOverlays(): void;
    /**
     * Show the webRtcAutoConnect Overlay and connect
     */
    onWebRtcAutoConnect(): void;
    /**
     * Set up functionality to happen when receiving a webRTC answer
     */
    onWebRtcSdp(): void;
    /**
     * Shows a text overlay to alert the user the stream is currently loading
     */
    onStreamLoading(): void;
    /**
     * Event fired when the video is disconnected - displays the error overlay and resets the buttons stream tools upon disconnect
     * @param eventString - the event text that will be shown in the overlay
     * @param allowClickToReconnect - true if we want to allow the user to click to reconnect. Otherwise it's just a message.
     */
    onDisconnect(eventString: string, allowClickToReconnect: boolean): void;
    /**
     * Handles when Web Rtc is connecting
     */
    onWebRtcConnecting(): void;
    /**
     * Handles when Web Rtc has connected
     */
    onWebRtcConnected(): void;
    /**
     * Handles when Web Rtc fails to connect
     */
    onWebRtcFailed(): void;
    onLoadFreezeFrame(shouldShowPlayOverlay: boolean): void;
    onPlayStream(): void;
    onPlayStreamError(message: string): void;
    onPlayStreamRejected(onRejectedReason: unknown): void;
    onVideoInitialized(): void;
    /**
     * Set up functionality to happen when calculating the average video encoder qp
     * @param QP - the quality number of the stream
     */
    onVideoEncoderAvgQP(QP: number): void;
    onInitialSettings(settings: InitialSettings): void;
    onStatsReceived(aggregatedStats: AggregatedStats): void;
    onLatencyTestResults(latencyTimings: LatencyTestResults): void;
    onDataChannelLatencyTestResults(result: DataChannelLatencyTestResult): void;
    onPlayerCount(playerCount: number): void;
    handleStreamerListMessage(messageStreamingList: MessageStreamerList, autoSelectedStreamerId: string, wantedStreamerId: string): void;
    /**
     * Set light/dark color mode
     * @param isLightMode - should we use a light or dark color scheme
     */
    setColorMode(isLightMode: boolean): void;
}
