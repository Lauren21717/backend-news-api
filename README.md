# Backend News API

A RESTful API for a news platform built with Node.js, Express, and PostgreSQL. Features include articles, comments, topics, and user interactions with full CRUD operations and database seeding.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/backend-news-api.git
cd backend-news-api
```

2. Install dependencies:
```bash
npm install
```

3. Create the databases:
```bash
npm run setup-dbs
```

### Environment Variables

You will need to create **two** `.env` files in the root directory for this project to connect to the databases locally:

#### `.env.test`
```
PGDATABASE=nc_news_test
```

#### `.env.development`
```
PGDATABASE=nc_news
```

**Important:** These files are listed in `.gitignore` and will not be committed to version control.

### Seeding the Databases

To seed the development database:
```bash
npm run seed-dev
```

To run tests (which will seed the test database automatically):
```bash
npm test
```

## Available Scripts

- `npm run setup-dbs` - Create the databases
- `npm run seed-dev` - Seed the development database
- `npm test` - Run all tests
- `npm run test-seed` - Run seeding tests only

## Technologies Used

- **Node.js** - JavaScript runtime
- **PostgreSQL** - Relational database
- **node-postgres (pg)** - PostgreSQL client for Node.js
- **Jest** - Testing framework
- **pg-format** - Safe SQL query formatting

## Project Structure
```
backend-news-api/
├── db/
│   ├── connection.js       # Database connection configuration
│   ├── data/               # Test and development data
│   └── seeds/              # Seeding scripts and utilities
├── __tests__/              # Test files
└── package.json
```

---

**Minimum Node Version:** v14.0.0