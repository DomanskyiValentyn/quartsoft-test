<template>
  <aside>
    <SidebarFileSlot
      title="Films"
      :list="$store.state.films.result"
      @result="handleChangeFilter('films', $event)"
    />

    <SidebarFileSlot
      title="Species"
      :list="$store.state.species.result"
      @result="handleChangeFilter('species', $event)"
    />

    <SidebarFileSlot
      title="Planets !"
      :list="$store.state.planets.result"
      @result="handleChangeFilter('planets', $event)"
    />
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SidebarFileSlot from '@/components/SidebarFilterSlot.vue';

@Options({
  components: {
    SidebarFileSlot,
  },
  emits: {
    filters: Object,
  },
})
export default class Sidebar extends Vue {
  public filters: { [k: string]: string[] } = {
    films: [],
    species: [],
    planets: [],
  };

  public handleChangeFilter(type: 'films' | 'species' | 'planets', data: string[]): void {
    this.filters[type] = data;

    this.$emit('filters', this.filters);
  }
}
</script>
