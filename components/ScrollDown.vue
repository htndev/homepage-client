<template>
  <div :title="$t('scroll-down')" v-tooltip="$t('scroll-down')" class="scroller">
    <span />
    <span />
    <span />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ScrollDown extends Vue {}
</script>

<style lang="less" scoped>
.scroller {
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    animation: transparency 2s infinite;
    opacity: 0;
    box-sizing: border-box;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.15s;
      top: 16px;
    }

    &:nth-of-type(3) {
      animation-delay: 0.3s;
      top: 32px;
    }
  }
}

@keyframes transparency {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
