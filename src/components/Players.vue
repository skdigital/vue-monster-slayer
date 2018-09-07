<template>
  <div class="player-container">
    <h1 class="player-names">{{ name }} - {{gameStarted}}</h1>

    <div class="progress-container">
      <div
      v-bind:class="{healthBar1: gameStarted}"
      :style="{width: playerHealth + '%'}"
      >
      {{playerHealth}}
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
      playerHealth: 50,
      gameStarted: false
    };
  },
  computed: {
    gameStartedListner() {
      return EventBus.$on("game-started", res => {
        this.gameStarted = res;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background-color: lightgray;
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
}
</style>
