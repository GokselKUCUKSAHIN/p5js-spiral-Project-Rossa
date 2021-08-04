const vueInstance = new Vue({
  el: "#app",
  data: {
    fraction: 0.5,
    numberOfPoints: 500,
    dotsize: 3
  },
  methods: {
    changed(event) {
      console.log(this.getValue(event));
    },
    getValue(event) {
      return event.target.value;
    },
    fixedDecimal(num) {
      return parseFloat(num).toFixed(3);
    }
  },
  watch: {
    fraction(oldVal, newVal) {
      p5redraw();
    },
    numberOfPoints(oldVal, newVal) {
      p5redraw();
    },
    dotsize(oldVal, newVal) {
      p5redraw();
    }
  },
  computed: {
    fractionComputed() {
      return this.fixedDecimal(this.fraction);
    },
    dotsizeComputed() {
      return this.fixedDecimal(this.dotsize);
    }
  }
});