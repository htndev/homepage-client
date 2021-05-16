<template>
  <div class="copyright">
    <xb-container class="wrapper">
      <h1>Copyright</h1>
      <h2>{{ $t('copyright.what-is') }}</h2>
      <p>{{ $t('copyright.copyright-description') }}</p>
      <h2>{{ $t('copyright.how-to-avoid') }}</h2>
      <p>{{ $t('copyright.avoid-description') }}</p>
    </xb-container>
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
      title: 'Copyright'
    } as MetaInfo;
  }
}
</script>

<style lang="less" scoped>
.copyright {
  height: 100vh;
  margin-top: 100px;

  /deep/ .wrapper {
    h1 {
      font-size: 3em;
      margin: 1em 0;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    p {
      font-size: 1em;
      margin-bottom: 1em;
      line-height: 1.5;
    }
  }
}
</style>
