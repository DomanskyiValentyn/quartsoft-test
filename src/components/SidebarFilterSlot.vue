<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="sidebar__filter-slot">
    <h3>{{ $props.title }}</h3>
    <hr>

    <ul>
      <template v-for="(slot, index) in $props.list" :key="index">
        <li class="sidebar__filter-slot--slot">
          <label>
            <input type="checkbox" :name="slot.name || slot.title" @change="handleChange(slot)">
            <p>{{ slot.name || slot.title }}</p>
          </label>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Film,
  Person,
  Planet,
  Specie,
} from '@/interface/other.interface';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
    list: Array,
  },
  emits: {
    result: Array,
  },
})
export default class SidebarFileSlot extends Vue {
  public filterArray: string[] = [];

  public handleChange(slot: Person | Film | Planet | Specie): void {
    const index = this.filterArray.findIndex((u) => u === slot.url);

    if (index < 0) this.filterArray.push(slot.url);
    else this.filterArray.splice(index, 1);

    this.$emit('result', this.filterArray);
  }
}
</script>

<style lang="scss">
.sidebar__filter-slot {
  min-width: 250px;

  margin: {
    bottom: 20px;
  };

  &--slot {
    margin: {
      bottom: 10px;
    };

    label {
      display: flex;
      align-items: center;

      cursor: pointer;

      p {
        margin: {
          left: 10px;
        };
      }
    }
  }
}
</style>
