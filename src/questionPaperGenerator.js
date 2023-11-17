// src/questionPaperGenerator.js
const generateQuestionPaper = (totalMarks, questionData) => {
    const questionPaper = {
        Easy: [],
        Medium: [],
        Hard: []
    };

    // Separate questions by difficulty
    questionData.forEach(question => {
        questionPaper[question.difficulty].push(question);
    });

    // Calculate the count of questions based on percentages
    const counts = {
        Easy: Math.ceil((totalMarks * 0.2) / 5), // Assuming each easy question is worth 5 marks
        Medium: Math.ceil((totalMarks * 0.5) / 10), // Assuming each medium question is worth 10 marks
        Hard: Math.ceil((totalMarks * 0.3) / 15) // Assuming each hard question is worth 15 marks
    };

    // Generate question paper
    const generatedPaper = [];
    Object.keys(counts).forEach(difficulty => {
        const questionsOfDifficulty = questionPaper[difficulty];
        for (let i = 0; i < counts[difficulty]; i++) {
            if (questionsOfDifficulty.length > 0) {
                const randomIndex = Math.floor(Math.random() * questionsOfDifficulty.length);
                generatedPaper.push(questionsOfDifficulty[randomIndex]);
                questionsOfDifficulty.splice(randomIndex, 1); // Remove the selected question
            }
        }
    });

    return generatedPaper;
};

module.exports = generateQuestionPaper;
