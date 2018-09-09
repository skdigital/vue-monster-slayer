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
      logData: []
    };
  },
  created() {
    this.playerAttackLog;
    this.monsterAttackLog;
  },
  computed: {
    playerAttackLog() {
      EventBus.$on("attack-log", res => {
        this.logData.push(res);
      });
    },
    monsterAttackLog() {
      EventBus.$on("monster-attack-log", res => {
        this.logData.push(res);
      });
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
}

ul li {
  list-style: none;
  margin: 5px;
}
</style>