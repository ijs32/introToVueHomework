/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Shutter Island", "Sorry to bother you", "Starwars I-VI"],
      newMovie: [],
      showInfo: false,
    };
  },
  methods: {
    createMovie: function () {
      this.movies.push(this.newMovie);
      this.showInfo = this.newMovie.includes("Zootopia");
    },
  },
});
