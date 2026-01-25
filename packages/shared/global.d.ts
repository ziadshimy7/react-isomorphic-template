declare global {
  interface Window {
    __CSS_ASSETS__: string[];
    __JS_ASSETS__: string[];
    __PRELOADED_STATE__: Record<string, unknown>;
  }
}

export {};
