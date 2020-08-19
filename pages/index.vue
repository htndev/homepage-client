<template>
  <div class="container">
    <introduce />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
import Introduce from '@/components/Introduce.vue';
import { MetaInfo } from 'vue-meta';

registerNuxtHooks(Component);

@Component({
  components: {
    Introduce
  }
})
export default class extends Vue {
  head() {
    return {
      title: this.$t('index-page-title')
    } as MetaInfo;
  }
}
</script>

<style lang="less" scoped>
.container {
  color: red;
}
</style>
