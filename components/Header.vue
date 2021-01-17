<template>
  <header>
    <xb-container>
      <div class="wrapper">
        <n-link to="/">
          <xb-logo />
        </n-link>
        <span class="spacer" />
        <a :href="CONSTANTS.CLIENT.ARTIST">{{ $t('for-artists') }}</a>
        <a :href="CONSTANTS.CLIENT.HELP">{{ $t('help') }}</a>
        <template v-if="isAuthorized">
          <a :href="`${CONSTANTS.CLIENT.PLAYER}/profile`">{{ $t('profile') }}</a>
        </template>
        <template v-else>
          <span class="separator">|</span>
          <a :href="signInLink">{{ $t('sign-in') }}</a>
          <a :href="signUpLink">{{ $t('sign-up') }}</a>
        </template>
      </div>
    </xb-container>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
import { UserModule } from '@/store/user';
import CONSTANTS, { AllowedRedirects } from '@/utils/constants';

registerNuxtHooks(Component);

@Component
export default class XbHeader extends Vue {
  CONSTANTS = CONSTANTS;
  userModule = UserModule(this.$store);
  baseURL = `${CONSTANTS.CLIENT.ID}/${this.$i18n.locale}`;

  get isAuthorized() {
    return !this.userModule.userAuthorized;
  }

  get signInLink(): string {
    return `${this.baseURL}/signin?to=${AllowedRedirects.Player}`;
  }

  get signUpLink(): string {
    return `${this.baseURL}/signup?to=${AllowedRedirects.Player}`;
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
