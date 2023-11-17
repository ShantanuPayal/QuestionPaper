// src/index.js


const readline = require('readline');
const generateQuestionPaper = require('./questionPaperGenerator');
const sampleQuestions = require('./questionData');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter total marks for the question paper: ', (totalMarks) => {
    // Validate input as needed
    totalMarks = parseInt(totalMarks);

    // Display options for difficulty levels
    console.log('Select difficulty percentages:');
    console.log('1. Easy (20%)');
    console.log('2. Medium (50%)');
    console.log('3. Hard (30%)');
    
    rl.question('Enter the number corresponding to the difficulty level: ', (difficultyChoice) => {
        let counts = {};
        switch (parseInt(difficultyChoice)) {
            case 1:
                counts = {
                    Easy: Math.ceil((totalMarks * 0.2) / 5),
                    Medium: Math.ceil((totalMarks * 0.5) / 10),
                    Hard: Math.ceil((totalMarks * 0.3) / 15)
                };
                break;
            case 2:
                // Medium percentage logic
                break;
            case 3:
                // Hard percentage logic
                break;
            default:
                console.log('Invalid choice.');
                rl.close();
                return;
        }

        const questionPaper = generateQuestionPaper(totalMarks, sampleQuestions, counts);

        // Display generated question paper
        questionPaper.forEach((question, index) => {
            console.log(`Question ${index + 1}: ${question.question}`);
            console.log(`Subject: ${question.subject}, Topic: ${question.topic}`);
            console.log(`Difficulty: ${question.difficulty}, Marks: ${question.marks}\n`);
        });

        rl.close();
    });
});
