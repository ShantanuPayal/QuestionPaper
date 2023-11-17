// src/questionData.js

const Question = require('./question');

const sampleQuestions = [
  new Question("What is the speed of light?", "Physics", "Waves", "Easy", 5),
  new Question("What causes the sky to appear blue?", "Physics", "Optics", "Medium", 8),
  new Question("Who discovered penicillin?", "Biology", "Medicine", "Hard", 10),
  new Question("What is the capital of India?", "Geography", "Europe", "Easy", 5),
  
];

module.exports = sampleQuestions;
