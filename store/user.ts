import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export class UserModule extends VuexModule {
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

export default (store: any) => getModule(UserModule, store);
