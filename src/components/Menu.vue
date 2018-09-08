<template>
  <div v-if="!gameStarted">
    <button @click="startNewGame()" class="start-game">START NEW GAME</button>
  </div>
  <div v-else>
    <button @click="attack()" class="attack">ATTACK</button>
    <button @click="specialAttack()" class="special-attack">SPECIAL ATTACK</button>
    <button @click="heal()" class="heal">HEAL</button>
    <button @click="giveUp()">GIVE UP</button>
  </div>
</template>

<script>
// imports
import { EventBus } from "./event-bus.js";
import  CharActions from "../mixins/charactorActions.js";

export default {
  name: "Menu",
  mixins: [CharActions],
  data() {
    return {
      gameStarted: false,
      attackDamage: 0,
      attackSpecialDamage: 0
    };
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
