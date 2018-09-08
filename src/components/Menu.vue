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

export default {
  name: "Menu",
  data() {
    return {
      gameStarted: false,
      attackDamage: 0,
      attackSpecialDamage: 0
    };
  },
  methods: {
    startNewGame() {
      this.gameStarted = true;
      EventBus.$emit("game-started", this.gameStarted);
    },
    attack() {
      this.attackDamage = Math.floor(Math.random() * 20);
      EventBus.$emit("attack", this.attackDamage);
      console.log(this.attackDamage + " Player used attack");
    },
    specialAttack() {
      this.attackSpecialDamage = Math.floor(Math.random() * 35);
      EventBus.$emit("attack-special", this.attackSpecialDamage);
      console.log(this.attackSpecialDamage + " Player used special attack");
    },
    heal() {
      const heal = Math.floor(Math.random() * 15);
      EventBus.$emit("heal", heal);
      console.log(heal + " Player used heal");
    },
    giveUp() {
      this.gameStarted = false;
      EventBus.$emit("game-started", this.gameStarted);
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
