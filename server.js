const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'second'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');
});

// CREATE
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO items (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: result.insertId, name });
  });
});

// READ
app.get('/api/items', (req, res) => {
  const query = 'SELECT * FROM items';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// UPDATE
app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const query = 'UPDATE items SET name = ? WHERE id = ?';
  db.query(query, [name, id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id, name });
  });
});

// DELETE
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM items WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Item deleted successfully' });
  });
});


// Member
app.post('/login', (req, res) => {
  const { userid, pwd, email } = req.body;
  const query = 'INSERT INTO member (userid, pwd, email, writeday) VALUES (?, ?, ?, NOW())';
  db.query(query, [userid, pwd, email], (err, result) => {
    if (err) {
      console.error('Error in /login route:', err);
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "가입완료", id: result.insertId });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});