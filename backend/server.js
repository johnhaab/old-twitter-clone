const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const cors = require("cors");

require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bcrypt = require("bcrypt");
const saltRounds = 10;

const PORT = 3001;

const secretKey = process.env.SECRET_KEY;

app.post("/register", async (req, res) => {
  const { name, username, email, password1, password2 } = req.body;

  // First, check if the username is already taken
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    return res.status(404).json({ error: "Username taken, try another." });
  }

  // Second, check if the email is already taken
  const userEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userEmail) {
    return res.status(404).json({ error: "Email taken, try logging in." });
  }

  // Third, check if the the users passwords are correct, then hash the password and create the account with the hashedPassword.
  if (password1 !== password2) {
    return res.status(403).json({ error: "Passwords do not match." });
  }

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password1, salt, async function (err, hash) {
      if (err) {
        return res.status(500).json({ error: "Error hashing password" });
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          username,
          password: hash, // Use the hashed password here
        },
      });

      res.json({
        status: `True`,
        user,
      });
    });
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username using Prisma
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    //   // Second, compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({ error: "Error comparing passwords" });
      }

      if (result) {
        // Passwords match, user is authenticated
        // Create a JWT token with a 24-hour expiration time
        const expiration = 24 * 60 * 60; // 24 hours in seconds
        const token = jwt.sign(
          { userId: user.id, username: user.username },
          secretKey,
          {
            expiresIn: expiration,
          }
        );

        // Send the JWT as a cookie
        res.cookie("authToken", token, {
          maxAge: expiration * 1000, // Convert seconds to milliseconds
          httpOnly: true, // Cookie is accessible only via HTTP/HTTPS, not JavaScript
        });

        res.json({ message: "Authentication successful" });
      } else {
        // Passwords don't match, authentication failed
        res.status(403).json({ error: "Authentication failed" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/protected-resource", (req, res) => {
  // Verify the JWT from the cookie
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // JWT is valid, you can access the decoded data (e.g., userId, username)
    const { userId, username } = decoded;

    res.json({
      message: `Welcome, ${username}! This is a protected resource for user ${userId}.`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
