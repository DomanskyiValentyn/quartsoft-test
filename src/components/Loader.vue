<template>
  <div class="loader">
    <StarWars />

    <div class="random-photo" :class="position">
      <img v-if="showPhotoByNumber === 0" src="~@/assets/ana.png" id="ana-photo" alt="">
      <img v-if="showPhotoByNumber === 1" src="~@/assets/dart.png" id="dart-photo" alt="">
      <img v-if="showPhotoByNumber === 2" src="~@/assets/obi.png" id="obi-photo" alt="">
      <img v-if="showPhotoByNumber === 3" src="~@/assets/r2.png" id="r2-photo" alt="">
      <img v-if="showPhotoByNumber === 4" src="~@/assets/yoda.png" id="yoda-photo" alt="">
    </div>

    <p>Please wait, we loading data from <a href="https://swapi.dev/" target="_blank">SWAPI</a></p>
    <span>it may take up to 3 minutes :) {{ showPhotoByNumber }}</span>

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
  public showPhotoByNumber = -1;

  public position = 'bottom left';

  private interval = -1;

  private getRandomPhoto() {
    const num = Math.floor(Math.random() * 5);
    const time = (Math.floor(Math.random() * 3) + 1) * 3000;

    const topBottom = ['top', 'bottom'];
    const leftRight = ['left', 'right'];

    const topBottomNum = Math.floor(Math.random() * 2);
    const leftRightNum = Math.floor(Math.random() * 2);

    const position = `${topBottom[topBottomNum]} ${leftRight[leftRightNum]}`;

    if (num === this.showPhotoByNumber || position === this.position) {
      this.getRandomPhoto();
      return;
    }

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.showPhotoByNumber = num;

      this.position = position;

      this.getRandomPhoto();
    }, time);
  }

  mounted(): void {
    this.getRandomPhoto();
  }

  unmounted(): void {
    clearInterval(this.interval);
  }
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
.random-photo {
  position: absolute;
  max-width: 15vw;

  // transform: translate(0, 0);

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  &.top.left {
    animation: top-left-photo 3s ease-in-out forwards;
  }

  &.top.right {
    animation: top-right-photo 3s ease-in-out forwards;
  }

  &.bottom.left {
    animation: bottom-left-photo 3s ease-in-out forwards;
  }

  &.bottom.right {
    animation: bottom-right-photo 3s ease-in-out forwards;
  }

  img {
    width: 100%;

    #r2-photo {
      max-width: 150px;
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

@keyframes top-left-photo {
  0% {
    transform: translate(-100%, -100%);
  }

  50% {
    transform: translate(0, 0);
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@keyframes top-right-photo {
  0% {
    transform: translate(100%, -100%);
  }

  50% {
    transform: translate(0, 0);
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@keyframes bottom-left-photo {
  0% {
    transform: translate(-100%, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@keyframes bottom-right-photo {
  0% {
    transform: translate(100%, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
