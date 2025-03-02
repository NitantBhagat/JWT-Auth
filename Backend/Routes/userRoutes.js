const express = require("express");
const { registerUser, loginUser, getMe } = require("../Controller/userController");
const { protect } = require("../Middleware/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * /api/users/:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user by providing name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request or user already exists
 */
router.post("/", registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Authenticate user
 *     description: Login a user and return a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User logged in successfully with a JWT token.
 *       400:
 *         description: Invalid credentials
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve the profile of the logged in user using a valid JWT token (use postman for passing token in request).
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful retrieval of user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 609d1f...
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john@example.com
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.get("/me", protect, getMe);

module.exports = router;
