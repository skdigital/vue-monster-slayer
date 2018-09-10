import { EventBus } from "../components/event-bus";

export default {
  methods: {
    startNewGame() {
      this.gameStarted = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      EventBus.$emit("game-started", this.gameStarted);
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won!, New Game?")) {
          this.startNewGame();
        } else {
          this.gameStarted = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startNewGame();
        } else {
          this.gameStarted = false;
        }
        return true;
      }
      return false;
    }
  }
};
