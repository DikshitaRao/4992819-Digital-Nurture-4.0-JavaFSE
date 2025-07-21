# Country Code API Request Testing

##  Objective

This exercise involved learning how to test REST API endpoints using IntelliJ IDEA’s built-in HTTP client. The key focus was understanding how to:

- Send HTTP requests within `.http` files.
- Handle dynamic path parameters using variables (e.g., `{{code}}`).
- Work with environment variables for parameter substitution.
- Fix common issues such as "unsubstituted variable" errors.

---

##  Project Structure

```plaintext
project-root/
├── rest-api/
│   └── #1.http
├── generated-requests/
│   ├── #8.http
│   ├── #9.http
│   ├── #13.http  ← Issue occurred here
│   ├── #14.http
├── .env.json     ← Environment file to resolve variable substitution
└── README.md      ← This file
