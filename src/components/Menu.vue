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
import shared from ".././mixins/shared.js";

export default {
  name: "Menu",
  mixins: [shared],
  data() {
    return {
      gameStarted: false,
      attackDamage: 0,
      attackSpecialDamage: 0,
      healDamage: 0
    };
  },
  methods: {
    attack() {
      this.attackDamage = this.calculateDamage(1, 10);
      EventBus.$emit("attack", this.attackDamage);
      EventBus.$emit(
        "attack-log",
        "PLAYER HITS MONSTER WITH STANDARD ATTACK FOR " + this.attackDamage
      );
    },
    specialAttack() {
      this.attackSpecialDamage = this.calculateDamage(10, 20);
      EventBus.$emit("attack-special", this.attackSpecialDamage);
      EventBus.$emit(
        "special-attack-log",
        "PLAYER HITS MONSTER WITH SPECIAL ATTACK FOR " +
          this.attackSpecialDamage
      );
    },
    heal() {
      this.healDamage = Math.floor(Math.random() * 15);
      EventBus.$emit("heal", this.healDamage);
      EventBus.$emit("heal-log", "PLAYER HEALS HIMSELF FOR " + this.healDamage);
    },
    giveUp() {
      this.gameStarted = false;
      EventBus.$emit("game-started", this.gameStarted);
      EventBus.$emit(
        "gives-up-log",
        "PLAYER GIVES UP, GAME RUNNING: " + this.gameStarted
      );
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
