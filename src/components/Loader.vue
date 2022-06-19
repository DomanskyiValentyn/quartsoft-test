<template>
  <div class="loader">
    <StarWars />

    <p>Please wait, we loading data from <a href="https://swapi.dev/" target="_blank">SWAPI</a></p>
    <span>it may take up to 3 minutes :)</span>

    <ul class="loader__data-count">
        <li>
          <p>People: {{ $store.state.people.result.length }}/{{ $store.state.people.count }}</p>
        </li>
        <li>
          <p>Films: {{ $store.state.films.result.length }}/{{ $store.state.films.count }}</p>
        </li>
        <li>
          <p>Planets: {{ $store.state.planets.result.length }}/{{ $store.state.planets.count }}</p>
        </li>
        <li>
          <p>Species: {{ $store.state.species.result.length }}/{{ $store.state.species.count }}</p>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import StarWars from '@/components/icons/StarWars.vue';

@Options({
  components: {
    StarWars,
  },
  props: {

  },
})
export default class Loader extends Vue {

}
</script>

<style lang="scss">
.loader {
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;

  svg {
    @include strict_size(150px, 300px);

    margin: {
      bottom: 25px;
    };

    animation: blank 3s linear infinite;
  }

  &__data-count {
    display: flex;

    margin: {
      top: 15px;
    };

    li {
      margin: {
        right: 10px;
      }
    }
  }
}
</style>

<style lang="scss">
@keyframes blank {
    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
</style>
