var app = new Vue({
  el: "#app",
  data: {
    title: "Learn Emojis",
    problems: [1, 2, 3, 4, 5],
    currentProblem: 1,
    directions: {
      "1":
        "Use the Face With Tears of Joy 😂 emoji in place of the word crying.",
      "2": ""
    },
    givens: {
      "1": "I am crying laughing.",
      "2": ""
    },
    solutions: {
      "1": "I am 😂 laughing.",
      "2": ""
    }
  },
  methods: {}
});
