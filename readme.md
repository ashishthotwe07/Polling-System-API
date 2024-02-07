
# Polling System API

The Polling System API is a backend application that allows users to create, manage, and participate in polls. It provides a set of endpoints for creating questions, adding options to questions, viewing questions and their details, deleting questions, and voting on options.

## Features

- **Question Management**: Create, view, and delete questions.
- **Option Handling**: Add options to questions.
- **Voting System**: Vote on options to express preferences.
- **User-Friendly API**: Simple and intuitive API design.

## Prerequisites

Before setting up the Polling System API, ensure you have the following:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ashishthotwe07/Polling-System-API.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Polling-System-API
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```


4. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project and add the following:


   
## Usage

1. **Start the Server:**

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:8000`.

## Endpoints

- `POST /questions/create`: Create a new question.
- `POST /questions/:id/options/create`: Add options to a question.
- `GET /questions/:id/`: View details of a question.
- `GET /questions/:id/delete`: Delete a question.
- `GET /options/:id/delete`: Delete an option.
- `POST /options/:id/add_vote`: Add a vote to an option.

## Testing

Run tests using:

```bash
npm test
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



