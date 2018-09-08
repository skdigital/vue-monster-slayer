<template>
  <div class="player-container">
    <h1 class="player-names">{{ name }}</h1>
    <img class="profile-image" :src="profileImage" alt="">
    <span class="m-health-text">Health: {{monsterHealth}} %</span>
    <div class="progress-container">

      <div
      v-bind:class="{healthBar1: gameStarted}"
      :style="{width: monsterHealth + '%'}"
      >
      </div>
    </div>
  </div>
</template>

<script>
// imports
import { EventBus } from "./event-bus.js";

export default {
  name: "Players",
  props: {
    name: String
  },
  data() {
    return {
      monsterHealth: 100,
      gameStarted: false,
      profileImage: require('../assets/cartoon-monster.jpg')
    };
  },
  computed: {
    gameStartedListner() {
      return EventBus.$on("game-started", res => {
        this.gameStarted = res;
        console.log(this.gameStarted + ' Monster');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image {
  width: 100px;
  display: flex;
  margin: auto auto;
  padding-bottom: 10px;
}
.player-names {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
}

.player-container {
  width: 250px;
  border: lightblue;
  border-style: dotted;
}

.progress-container {
  display: flex;
  height: 30px;
  background-color: darkgrey;
  margin: 3px;
  width: 245px;
}

.healthBar1 {
  background-color: green;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 30px;
  width: 100%;
  transition: width 500ms;
}

.m-health-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
