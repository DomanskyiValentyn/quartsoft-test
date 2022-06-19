<template>
  <Loader v-if="loader" />

  <main>
    <Sidebar @filters="filters = $event" />

    <ul class="person-list">
      <template v-for="(person, index) in filterPeople" :key="index">
        <li><PersonMiniProfile :person="person" /></li>
      </template>
    </ul>
  </main>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import {
  Person,
  Film,
  Planet,
  Specie,
  SWAPI_RESOURCE,
} from '@/interface/other.interface';

import Sidebar from '@/components/Sidebar.vue';
import PersonMiniProfile from '@/components/PersonMiniProfile.vue';
import Loader from '@/components/Loader.vue';

import requests from '@/requests';

@Options({
  components: {
    PersonMiniProfile,
    Sidebar,
    Loader,
  },
})
export default class App extends Vue {
  public people: Person[] = [];

  public loader = false;

  public filters: { [k: string]: string[] } = {
    films: [],
    species: [],
    planets: [],
  };

  private page = 1;

  get filterPeople(): Person[] {
    let array = [...this.$store.state.people.result];

    array = array.filter((p) => this.filters.films.every((f) => p.films.includes(f)));

    array = array.filter((p) => this.filters.species.every((s) => p.species.includes(s)));

    if (this.filters.planets.length) {
      array = array.filter((p) => this.filters.planets.some((pl) => pl === p.homeworld));
    }

    console.log(array);

    return array;
  }

  private getAllPeople(): void {
    this.loader = true;

    requests.getListByResource<Person>(SWAPI_RESOURCE.people, this.page)
      .then((res) => {
        this.$store.commit('addPeople', res.data);

        if (res.data?.next) {
          this.page += 1;

          this.getAllPeople();
        } else {
          this.page = 1;

          this.uploadFilms();
        }
      });
  }

  private uploadFilms(): void {
    requests.getListByResource<Film>(SWAPI_RESOURCE.films, this.page)
      .then((res) => {
        this.$store.commit('addFilms', res.data);

        if (res.data?.next) {
          this.page += 1;

          this.uploadFilms();
        } else {
          this.page = 1;

          this.uploadPlanets();
        }
      });
  }

  private uploadPlanets(): void {
    requests.getListByResource<Planet>(SWAPI_RESOURCE.planets, this.page)
      .then((res) => {
        this.$store.commit('addPlanets', res.data);

        if (res.data?.next) {
          this.page += 1;

          this.uploadPlanets();
        } else {
          this.page = 1;

          this.uploadSpecies();
        }
      });
  }

  private uploadSpecies(): void {
    requests.getListByResource<Specie>(SWAPI_RESOURCE.species, this.page)
      .then((res) => {
        this.$store.commit('addSpecies', res.data);

        if (res.data?.next) {
          this.page += 1;

          this.uploadSpecies();
        } else {
          this.loader = false;
        }
      });
  }

  mounted(): void {
    const { people } = this.$store.state;

    if (people.count !== people.result.length || people.count === 0) {
      this.$store.commit('resetState');
      this.getAllPeople();
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  gap: 20px;

  .person-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
</style>
