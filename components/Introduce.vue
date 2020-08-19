<template>
  <div>
    <h1>{{ $t('slogan') }}</h1>
    <h2>{{ $t('join-us') }}</h2>
    <h2>{{ $t('online-users', { amount: 5 }) }}</h2>
    <h2>{{ $t('welcome-user', ['Bill']) }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserModuleFactory from '@/store/user';
import { store } from '@/store';
const UserModule = UserModuleFactory(store);

@Component
export default class Introduce extends Vue {
  slogan = this.$t('slogan');

  created() {
    UserModule.identify();
  }
}
</script>
