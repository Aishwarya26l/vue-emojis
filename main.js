var app = new Vue({
  el: "#app",
  data: {
    title: "Learn Emojis",
    problems: [1, 2, 3, 4],
    currentProblem: 1,
    directions: {
      "1":
        "Use the Face With Tears of Joy 😂 emoji in place of the word crying.",
      "2": "Replace the word sad with the Loudly Crying Face 😭 emoji.",
      "3": "Use the 😍 emoji in place of the word love.",
      "4": "Use the Folded Hands 🙏 emoji to replace the word hopefully."
    },
    givens: {
      "1": "I am crying laughing.",
      "2": "I am so sad.",
      "3": "I love cookies.",
      "4": "Hopefully"
    },
    solutions: {
      "1": "I am 😂 laughing.",
      "2": "I am so 😭.",
      "3": "I 😍 cookies.",
      "4": "🙏"
    }
  },
  methods: {}
});
