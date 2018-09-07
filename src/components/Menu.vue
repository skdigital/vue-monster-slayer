<template>
  <div v-if="!gameStarted">
    <button @click="startNewGame()" class="start-game">START NEW GAME</button>
  </div>
  <div v-else>
    <button class="attack">ATTACK</button>
    <button class="special-attack">SPECIAL ATTACK</button>
    <button class="heal">HEAL</button>
    <button @click="giveUp()">GIVE UP</button>
  </div>
</template>

<script>
// imports
import { EventBus } from "./event-bus.js";

export default {
  name: "Menu",
  data() {
    return {
      gameStarted: false
    };
  },
  methods: {
    startNewGame() {
      this.gameStarted = true;
      EventBus.$emit('game-started', this.gameStarted);
    },
    giveUp() {
      this.gameStarted = false;
      EventBus.$emit('game-started', this.gameStarted);
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
  border: none;
  font-size: 1.2rem;
  box-shadow: 1px 2px lightgray;
}
.start-game {
  background-color: lightgreen;
}
.attack {
  background-color: lightcoral;
}

.special-attack {
  background-color: orange;
}

.heal {
  background-color: lightgreen;
}
</style>
