import { Store } from 'vuex';
import { TutorialsList } from './interface/global.interface';

import { ModalsState } from '@/store/modules/modals';
import { StoreState } from './interface/store.interface';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State extends StoreState {
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
