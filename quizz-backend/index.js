
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const shortid = require('shortid');
const admin = require('firebase-admin');

const serviceAccount = require('./auth.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/submit-quiz', async (req, res) => {
  const quizData = req.body;
  const uniqueLink = shortid.generate(); 
  try {
    const db = admin.firestore();
    const docRef = db.collection('quizzes').doc(uniqueLink);
    await docRef.set(quizData);
    console.log("Document written with ID: ", uniqueLink);
    res.json({ success: true, uniqueLink: uniqueLink });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.get('/quiz/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const db = admin.firestore();
    const quizRef = db.collection('quizzes').doc(code);
    const doc = await quizRef.get();

    if (doc.exists) {
      res.sendStatus(201);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(404);
  }
});
app.get('/quizPage/:code', async (req, res) => {
  const { code } = req.params;
  const { name } = req.query; // Get student name from query parameters

  try {
    const db = admin.firestore();
    const quizRef = db.collection('quizzes').doc(code);
    const doc = await quizRef.get();

    if (doc.exists) {
      await db.collection('students').doc(name).set({ name, code });
      const quizData = doc.data(); 
      res.json(quizData); 
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
