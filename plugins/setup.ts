import VTooltip from 'v-tooltip';
import Vue from 'vue';
import * as Components from '@/components/common';

Vue.use(VTooltip, {
  defaultClass: 'xb-tooltip',
  defaultDelay: 500,
  defaultPlacement: 'top-center'
});

Object.keys(Components).forEach((component: string) => {
  Vue.component(component, (Components as any)[component]);
});
