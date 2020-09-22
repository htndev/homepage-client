<template>
  <div>
    <xb-header />
    <nuxt />
    <xb-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import XbHeader from '@/components/Header.vue';
import XbFooter from '@/components/Footer.vue';
import { registerNuxtHooks } from '@/utils/nuxt';
registerNuxtHooks(Component);

@Component({ components: { XbHeader, XbFooter } })
export default class DefaultLayout extends Vue {}
</script>
