
# Node.js API Server with DummyJSON Comments
This project is a Node.js API server that interacts with DummyJSON, an external API, to fetch and post comments.

## Features
### Error Handling
- Captures and responds to common errors such as Internal Server Errors and user feedback.
### Validation
- Using `express-validator` to ensure incoming data meets expected formats and types before processing.
### Unit Testing
- Using `mocha` for test execution and `chai` for assertions, ensuring application reliability.

## Requirements
- **Internet Connection**: Required for accessing the DummyJSON API at `https://dummyjson.com`. Ensure network settings allow outgoing requests to this URL.
- **Node.js**: Version 14+ recommended for compatibility with application code.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Perc4al/node-api-dummyjson-comments.git
   cd node-api-dummyjson-comments
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Server
```bash
npm start
```
The server will listen on the default port `3000`, which can be configured via environment variables.

## Testing
```bash
npm test
```

This will run all test cases, ensuring the API behaves as expected.
