export default {
  methods: {
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    }
  }
};
