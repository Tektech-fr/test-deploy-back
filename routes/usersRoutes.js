const express = require("express");
const router = express.Router();
const pool = require("../db-connect");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res
      .status(201)
      .json({ message: "User created", id: result.insertId.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await pool.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
      name,
      email,
      id,
    ]);
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user's field
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    // Vérifie que le champ à mettre à jour est valide
    if (!name && !email) {
      return res.status(400).json({ error: "Invalid field" });
    }

    // Prépare la requête SQL en fonction du champ à mettre à jour
    let query = "UPDATE users SET ";
    let values = [];
    if (name) {
      query += "name = ?";
      values.push(name);
    }
    if (email) {
      if (name) {
        query += ", email = ?";
      } else {
        query += "email = ?";
      }
      values.push(email);
    }
    query += " WHERE id = ?";
    values.push(id);

    // Exécute la requête SQL
    await pool.query(query, values);

    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
