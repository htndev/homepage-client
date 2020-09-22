<template>
  <div>
    <introduce />
    <about />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
import Introduce from '@/components/Introduce.vue';
import About from '@/components/About.vue';
import { MetaInfo } from 'vue-meta';

registerNuxtHooks(Component);

@Component({
  components: {
    Introduce,
    About
  }
})
export default class Homepage extends Vue {
  head() {
    return {
      title: this.$t('index-page-title')
    } as MetaInfo;
  }
}
</script>
