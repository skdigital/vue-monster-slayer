<template>
  <div class="player-container">
    <h1 class="player-names">{{ name }}</h1>
    <img class="profile-image" :src="profileImage" alt="cute-cat-agent">
    <span class="p-health-text"> Health: {{playerHealth}} %</span>
    <div class="progress-container">
      <div
      v-bind:class="{healthBar1: gameStarted}"
      :style="{width: playerHealth + '%'}"
      >
      </div>
    </div>
  </div>
</template>

<script>
// imports
import { EventBus } from "./event-bus.js";

export default {
  name: "Player",
  props: {
    name: String
  },
  data() {
    return {
      playerHealth: 100,
      gameStarted: false,
      profileImage: require("../assets/cute-cat-agent.jpg")
    };
  },
  created() {
    this.gameStartedListner;
  },
  computed: {
    gameStartedListner() {
      return EventBus.$on("game-started", res => {
        this.gameStarted = res;
        console.log(this.gameStarted + ": Game running...player");
      });
    }
  }
};
</script>

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

.p-health-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
