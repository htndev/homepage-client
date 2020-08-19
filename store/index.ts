import Vuex from 'vuex';
import { UserModule } from '@/store/user';

export const store = new Vuex.Store({
  modules: {
    user: UserModule
  }
});
