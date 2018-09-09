<template>
  <div class="player-container">
    <h1 class="player-names">{{ name }}</h1>
    <img class="profile-image" :src="profileImage" alt="">
    <span class="m-health-text">Health: {{monsterHealth}} %</span>

    <div class="progress-container">
      <div
      v-bind:class="{healthBar1: gameStarted}"
      :style="{width: monsterHealth + '%'}">
      </div>
    </div>
  </div>
</template>

<script>
// imports
import { EventBus } from "./event-bus.js";
import shared from "../mixins/shared.js";

export default {
  name: "Monster",
  mixins: [shared],
  props: {
    name: String
  },
  data() {
    return {
      monsterHealth: 100,
      gameStarted: false,
      profileImage: require("../assets/cartoon-monster.jpg")
    };
  },
  created() {
    this.gameStartedListner;
    this.damageListner;
  },
  computed: {
    gameStartedListner() {
      EventBus.$on("game-started", res => {
        this.gameStarted = res;
        this.monsterHealth = 100;
      });
    },
    damageListner() {
      EventBus.$on("attack", res => {
        this.monsterHealth -= res;
        this.monsterStrikesBack();
      });
      EventBus.$on("attack-special", res => {
        this.monsterHealth -= res;
        this.monsterStrikesBack();
      });
    }
  },
  watch: {
    monsterHealth() {
      this.checkWin();
    }
  },
  methods: {
    monsterStrikesBack() {
      setTimeout(() => {
        this.monsterAttack = this.calculateDamage(10, 20);
        EventBus.$emit("monster-attack", this.monsterAttack);
        EventBus.$emit("monster-attack-log", 'MONSTER HITS PLAYER WITH STANDARD ATTACK FOR '
        + this.monsterAttack)
      }, 1000);
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

.m-health-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
