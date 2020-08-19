import { Context, Middleware, Transition } from '@nuxt/types';
import Vue from 'vue';
import { MetaInfo } from 'vue-meta';
import { Route } from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    created?(): void;
    beforeCreate?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    beforeDestroy?(): void;
    destroyed?(): void;
    asyncData?(ctx: Context): Promise<Record<string, any> | void> | Record<string, any> | void;
    fetch?(ctx: Context): Promise<void> | void;
    fetchDelay?: number;
    fetchOnServer?: boolean | (() => boolean);
    head?(): MetaInfo;
    key?: string | ((to: Route) => string);
    layout?: string | ((ctx: Context) => string);
    loading?: boolean;
    middleware?: Middleware | Middleware[];
    scrollToTop?: boolean;
    transition?: string | Transition | ((to: Route, from: Route) => string);
    validate?(ctx: Context): Promise<boolean> | boolean;
    watchQuery?: boolean | string[] | ((newQuery: Route['query'], oldQuery: Route['query']) => boolean);
    meta?: { [key: string]: any };
  }
}

declare module '*.vue' {
  export default Vue;
}
