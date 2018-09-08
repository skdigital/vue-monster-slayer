import { EventBus } from "../components/event-bus";

export default {
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
