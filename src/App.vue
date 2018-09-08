<template>
  <div id="app">
    <div class="players-container">
       <Player name="Sean"/>
       <Monster name="Monster"/>
    </div>

    <div class="menu-container">
      <Menu class="menu" />
    </div>
    <div class="logs-container">
      <Logs />
    </div>
  </div>
</template>

<script>
import Player from "./components/Player.vue";
import Monster from "./components/Monster";
import Menu from "./components/Menu";
import Logs from "./components/Log";

export default {
  name: "app",
  components: {
    Player,
    Monster,
    Menu,
    Logs
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.players-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  border: grey;
  border-style: dashed;
}
.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: lightgrey;
  border-style: solid;
  border-width: 0.5px;
  height: 30%;
  padding: 10px;
  box-shadow: 1px 1.5px lightgray;
}
.logs-container {
  font-size: .7em;
  margin-top: 15px;
  border: lightgrey;
  border-style: solid;
  border-width: 0.5px;
  min-height: 250px;
  box-shadow: 1px 1.5px lightgray;
}
</style>
