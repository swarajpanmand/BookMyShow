# Book My Show Application

## Overview

The Book My Show Application is a full-stack project that allows users to book movie tickets online. It consists of a back-end server using Node.js, Express, and MongoDB, and a front-end client built with React.

## Features

- **User can select a movie, schedule a time, and choose seats.**
- **Booking details are saved to a MongoDB database.**
- **Last booking details are retrieved and displayed.**
- **Form validation and error handling.**
- **Responsive design.**

## Technologies Used

- **Back-End:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Front-End:**
  - React.js
  - CSS

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/swarajpanmand/BookMyShow.git
```

2. **Navigate to the back-end directory and install dependencies:**

```bash
cd BookMyShow/back-end
npm install
```

3. **Set up MongoDB:**

    Make sure MongoDB is running and replace the connection string in `back-end/dbConnection.js` with your MongoDB URI if necessary.

4. **Start the back-end server:**

```bash
node server.js
```

5. **Navigate to the front-end directory and install dependencies:**

```bash
cd ../front-end
npm install
```

6. **Start the front-end development server:**

```bash
npm start
```

The application should now be running on `http://localhost:3000`.


## Contributing

1. **Fork the repository.**
2. **Create a new branch:**

```bash
git checkout -b feature/your-feature-name
```

3. **Commit your changes:**

```bash
git commit -m 'Add some feature'
```

4. **Push to the branch:**

```bash
git push origin feature/your-feature-name
```

5. **Submit a pull request.**

## License

This project is licensed under the MIT License

---

