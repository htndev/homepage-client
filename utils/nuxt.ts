export const registerNuxtHooks = (Component: any) =>
  Component.registerHooks([
    'asyncData',
    'fetch',
    'head',
    'key',
    'layout',
    'loading',
    'middleware',
    'scrollToTop',
    'transition',
    'validate',
    'watchQuery',
    'components'
  ]);
