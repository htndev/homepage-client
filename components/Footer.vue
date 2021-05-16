<template>
  <footer>
    <xb-container>
      <div class="row">
        <span>© xBeat {{ new Date().getFullYear() }}</span>
        <a :href="CONSTANTS.CLIENT.PLAYER">{{ $t('web-player') }}</a>
        <a :href="CONSTANTS.CLIENT.ARTIST">{{ $t('for-artists') }}</a>
        <a :href="CONSTANTS.CLIENT.HELP">{{ $t('help') }}</a>
        <span>
          <a href="https://instagram.com"><instagram-icon /></a>
        </span>
        <span>
          <a href="htpps://twitter.com"><twitter-icon /></a>
        </span>
        <span>
          <a href="https://facebook.com"><facebook-icon /></a>
        </span>
        <span class="logo"><xb-logo /></span>
      </div>
    </xb-container>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CONSTANTS from '@/utils/constants';
/* eslint-disable */
// @ts-ignore
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
// @ts-ignore
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
// @ts-ignore
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
/* eslint-enable */

@Component({ components: { InstagramIcon, TwitterIcon, FacebookIcon } })
export default class XbFooter extends Vue {
  CONSTANTS = CONSTANTS;
}
</script>

<style lang="less" scoped>
footer {
  background: #000;
  /deep/ .row {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7, 1fr) 2fr;
    color: #fff;
    padding: 30px 0;

    a {
      text-decoration: none;
      color: #fff;
    }

    .logo {
      justify-self: end;
    }
  }
}
</style>
