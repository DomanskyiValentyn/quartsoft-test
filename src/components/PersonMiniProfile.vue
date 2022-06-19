<template>
  <div class="person-mini-profile">
    <h2>{{ $props.person.name }}</h2>

    <p>{{ $props.person.species }}</p>
    <p>{{ $props.person.homeworld }}</p>
    <p>{{ $props.person.films }}</p>
    <p>{{ $props.person.species }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { getIdFromURL } from '@/utils';

@Options({
  props: {
    person: Object,
  },
})
export default class PersonMiniProfile extends Vue {
  public getIdFromURL = getIdFromURL;
}

// {
//   name: string
//   height: string
//   mass: string
//   hair_color: string
//   skin_color: string
//   eye_color: string
//   birth_year: string
//   gender: string
//   homeworld: string
//   films: Array<string> // URL
//   species: Array<string> // URL
//   vehicles: Array<string> // URL
//   starships: Array<string> // URL
//   created: string
//   edited: string
//   url
// }
</script>

<style lang="scss">
.person-mini-profile {
  border: 2px solid $yellow;

  border-radius: 10px;

  padding: 10px;

  h2 {
    margin: {
      bottom: 20px;
    };
  }
}
</style>
