import { DataChannelLatencyTestResult } from "@epicgames-ps/lib-pixelstreamingfrontend-ue5.4/types/DataChannel/DataChannelLatencyTestResults";
/**
 * DataChannel Latency test UI elements and results handling.
 */
export declare class DataChannelLatencyTest {
    _rootElement: HTMLElement;
    _latencyTestButton: HTMLInputElement;
    _latencyTestResultsElement: HTMLElement;
    /**
     * Get the button containing the stats icon.
     */
    get rootElement(): HTMLElement;
    get latencyTestResultsElement(): HTMLElement;
    get latencyTestButton(): HTMLInputElement;
    /**
     * Populate the UI based on the latency test's results.
     * @param result The latency test results.
     */
    handleTestResult(result: DataChannelLatencyTestResult): void;
    handleTestStart(): void;
}
