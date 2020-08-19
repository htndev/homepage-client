import Introduce from '@/components/Introduce.vue';
import { mount } from '@vue/test-utils';

describe('Introduce', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Introduce);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
