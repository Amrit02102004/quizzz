const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
let quizzes = [];

app.post('/api/quizzes', (req, res) => {
  const { title, questions } = req.body;
  if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: 'Invalid quiz data' });
  }

  const quizId = quizzes.length + 1;
  const quiz = { id: quizId, title, questions };
  quizzes.push(quiz);
  
  res.status(201).json(quiz);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
