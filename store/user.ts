import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import { Store } from 'vuex';

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export default class User extends VuexModule {
  identity = null;

  get userAuthorized(): boolean {
    return !!this.identity;
  }

  @Mutation
  SET_IDENTITY(identity: any) {
    this.identity = identity;
  }

  @Action
  identify() {
    const randomValue = Math.random().toString().slice(2);

    this.SET_IDENTITY(randomValue);
  }
}

export const UserModule = (store: Store<User>) => getModule(User, store);
