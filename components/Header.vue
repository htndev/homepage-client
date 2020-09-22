<template>
  <header>
    <xb-container>
      <div class="wrapper">
        <n-link to="/">
          <xb-logo />
        </n-link>
        <span class="spacer" />
        <a :href="CONSTANTS.SERVICE.ARTIST">{{ $t('for-artists') }}</a>
        <a :href="CONSTANTS.SERVICE.HELP">{{ $t('help') }}</a>
        <template v-if="isAuthorized">
          <a :href="`${CONSTANTS.SERVICE.PLAYER}/profile`">{{ $t('profile') }}</a>
        </template>
        <template v-else>
          <span class="separator">|</span>
          <a :href="`${CONSTANTS.SERVICE.PLAYER}/signin`">{{ $t('sign-in') }}</a>
          <a :href="`${CONSTANTS.SERVICE.PLAYER}/signup`">{{ $t('sign-up') }}</a>
        </template>
      </div>
    </xb-container>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
import { UserModule } from '@/store/user';
import CONSTANTS from '@/utils/constants';

registerNuxtHooks(Component);

@Component
export default class XbHeader extends Vue {
  CONSTANTS = CONSTANTS;
  userModule = UserModule(this.$store);

  get isAuthorized() {
    return this.userModule.userAuthorized;
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/colors.less';

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #000;
  padding: 10px 0;

  /deep/ .wrapper {
    display: flex;
    align-items: center;

    .spacer {
      margin-left: auto;
    }

    .separator {
      color: #fff;
    }

    a {
      padding: 5px 10px;
      color: @white;
      text-decoration: none;

      &:last-child {
        padding: 5px 0 5px 10px;
      }
    }
  }
}
</style>
