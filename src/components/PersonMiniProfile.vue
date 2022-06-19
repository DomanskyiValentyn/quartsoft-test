<template>
  <div class="person-mini-profile">
    <h2>{{ $props.person.name }}</h2>

    <p>From: {{ $store.state.planets.result[getIdFromURL($props.person.homeworld) - 1].name }}</p>
    <hr>

    <template v-if="$props.person.films.length">
      <p class="m-bottom-10"><b>Appearances: </b></p>

      <ul>
        <template v-for="(film, index) in $props.person.films" :key="index">
          <li>
            <p>{{ $store.state.films.result[getIdFromURL(film) - 1].title }}</p>
          </li>
        </template>
      </ul>
    </template>

    <template v-if="$props.person.species.length">
      <hr>

      <p class="m-bottom-10"><b>Specie: </b></p>

      <ul>
        <template v-for="(specie, index) in $props.person.species" :key="index">
          <li>
            <p>{{ $store.state.species.result[getIdFromURL(specie) - 1].name }}</p>
          </li>
        </template>
      </ul>
    </template>
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
