
# Node.js API Server with DummyJSON Comments
This project is a Node.js API server that interacts with DummyJSON, an external API, to fetch and post comments.

## Features

### Error Handling
- Captures and responds to common errors such as Internal Server Errors to ensure graceful degradation and user feedback.
### Validation
- Using `express-validator` to ensure incoming data meets expected formats and types before processing.
### Unit Testing
- Using `mocha` for test execution and `chai` for assertions, ensuring application reliability.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14+ recommended
- **npm**: Comes with Node.js

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/node-api-dummyjson-comments.git
   cd node-api-dummyjson-comments
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Server

To run the API server, use the following command:

```bash
npm start
```

The server will listen on the default port `3000`, which can be configured via environment variables.

## Testing

To execute the test suite, run:

```bash
npm test
```

This will run all test cases, ensuring the API behaves as expected.
