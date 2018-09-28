<template>
  <div>
    <!-- component title -->
    <h4>Logs</h4>
    <hr>
    <!-- log output list -->
    <div class="logs">
      <ul>
        <li v-for="element in logData" :key="element.id"><strong>{{ element }}</strong></li>
      </ul>
    </div>

  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

export default {
  name: "Logs",
  data() {
    return {
      logData: [],
      playerHealth: 100
    };
  },
  created() {
    this.playerAttackLog();
    this.playerSpecialAttackLog();
    this.playerHeal();
    this.monsterAttackLog();
    this.playerGivesUpLog();
    this.playerHealthListener();
  },
  methods: {
    playerAttackLog() {
      EventBus.$on("attack-log", res => {
        this.logData.unshift(res);
      });
    },
    playerSpecialAttackLog() {
      if (this.playerHealth < 100) {
        EventBus.$on("special-attack-log", res => {
          this.logData.unshift(res);
        });
      }
    },
    playerHeal() {
      EventBus.$on("heal-log", res => {
        if (this.playerHealth != 100) {
          this.logData.unshift(res);
        } else {
          this.logData.unshift("PLAYER HEALTH IS FULL!");
        }
      });
    },
    monsterAttackLog() {
      EventBus.$on("monster-attack-log", res => {
        this.logData.unshift(res);
      });
    },
    playerGivesUpLog() {
      EventBus.$on("gives-up-log", res => {
        this.logData.unshift(res);
        setTimeout(() => {
          this.logData = [];
        }, 1000);
      });
    },
    playerHealthListener() {
      EventBus.$on("player-health", res => {
        this.playerHealth = res;
        console.log(this.playerHealth);
      });
    }
  },
  watch: {
    playerHealth() {
      if (this.playerHealth >= 100) {
        this.logData.unshift("PLAYER HEALTH 100%");
      }
    }
  }
};
</script>

<style scoped>
h4 {
  display: flex;
  justify-content: center;
  padding: none;
}

hr {
  background-color: lightgrey;
  height: 1px;
  border: 0;
}

.logs {
  display: flex;
  justify-content: center;
  margin-left: -43px;
  text-align: center;
}

ul li {
  list-style: none;
  margin: 5px;
}
</style>
