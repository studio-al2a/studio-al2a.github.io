declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    immediate?: boolean;
  }

  export type UpdateCallback = () => void;

  export function registerSW(options?: RegisterSWOptions): UpdateCallback;
  export default registerSW;
}
