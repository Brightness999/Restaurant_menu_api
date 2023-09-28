
# Restaurant Menu API

This repository contains a simple GraphQL API for a restaurant menu application. The API is built using Node.js and Express, and it provides data for various menu categories.

## Getting Started

Follow these instructions to run the API locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (Node.js package manager, comes with Node.js)

### Installation

1. **Clone the repository to your local machine.**

   ```bash
   git clone https://github.com/your-username/restaurant-menu-api.git
   ```

2. **Navigate to the project directory.**

   ```bash
   cd restaurant-menu-api
   ```

3. **Install the dependencies.**

   ```bash
   npm install
   ```

### Running the API

1. **Start the GraphQL server.**

   ```bash
   node index.js
   ```

   The server will start running on http://localhost:3000/graphql.

2. **Open your web browser and go to http://localhost:3000/graphql to access the GraphQL Playground.**

## Testing Queries

Use the GraphQL Playground to test queries and explore the available menu data.

1. In the left panel, write and run queries. For example:

   ```graphql
   query {
     getAppetizers {
       name
       price
     }
   }
   ```

2. Click the "Play" button or press `Ctrl + Enter` to execute the query.

3. Explore other queries such as `getEntrees`, `getSandwiches`, etc.

## Customization

Feel free to customize the API or extend its functionality. You can modify the data structure, add mutations, or connect the API to a real database.

## Additional Notes

- The menu data is currently stored in a local state for demonstration purposes. In a real-world scenario, you would connect the API to a database for persistent storage.

- If you encounter any issues or have questions, please reach out to jameslynch0423@gmail.com.

---

**Note:** This is a simple example, and in a production environment, you would need to consider security, error handling, and other best practices.