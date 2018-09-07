<template>
  <div id="app">
    <div class="players-container">
       <Players name="Sean"/>
       <Players name="Monster"/>
    </div>

    <div class="menu-container">
      <Menu class="menu" />
    </div>

  </div>
</template>

<script>
import Players from "./components/Players.vue";
import Menu from "./components/Menu";

export default {
  name: "app",
  components: {
    Players,
    Menu
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
</style>
