# Wenmo

**Wenmo** is a Paytm-like wallet application that allows users to onramp money through a mock bank account. Users can send money, view their transaction history, and manage their balance within the app. Project utilizes a microservices architecture powered by Turborepo and integrates various modern technologies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Database](#database)
- [Security](#security)
- [Webhooks](#webhooks)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication**: Secure login using credentials, Google, and GitHub.
- **Send Money**: Transfer money to other users via phone numbers.
- **Onramp Money**: Add money to your account from a mock bank server.
- **Transaction History**: View and manage your transaction history (Work In Progress).
- **Dashboard**: View account balance, recent transactions, and onramp options.
- **Database Locking**: Ensures transaction integrity and prevents faulty transactions.

## Tech Stack

- **Frontend/Backend**: Next.js
- **Auxiliary Backend**: Express.js
- **Monorepo Management**: Turborepo
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14+)
- PostgreSQL
- npm (for package management)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jignesh119/Wenmo.git
   cd Wenmo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   Create specific `.env` files for the `user-app`, `merchant-app`, and `db` package:

   - **`apps/user-app/.env`**:

     ```plaintext
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_secret_key
     ```

   - **`apps/merchant-app/.env`**:

     ```plaintext
     GOOGLE_CLIENT_ID=google_client_id
     GOOGLE_CLIENT_SECRET=google_client_secret
     NEXTAUTH_SECRET=your secret
     NEXTAUTH_URL=http://localhost:3001
     ```

   - **`packages/db/.env`**:
     ```plaintext
     DATABASE_URL=postgresql://user:password@localhost:5432/wenmo
     ```

4. **Run the migrations**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Project Structure

```plaintext
wenmo/
├── apps/
│   ├── user-app/       # Next.js app for user-facing features
│   ├── merchant-app/   # Next.js app for merchant-facing features
│   └── bank-webhook/   # Express app for handling bank webhooks
├── packages/
│   ├── db/             # Prisma setup for PostgreSQL
│   ├── store/          # Shared state management
│   └── ui/             # Shared UI components
└── docker/             # Docker configurations
```

## Routes

### Authentication

- **`/api/auth/sign`**: Sign-in page (auto-redirect for non-logged-in users).
- **`/api/auth/callback`**: OAuth callback handler.

### Dashboard

- **`/dashboard`**: User dashboard displaying account balance and recent transactions.

### Money Transfer

- **`/transfer`**: View balance, select providers, and view onramping transactions.
- **`/p2p`**: Send money to other users by entering their phone numbers.

### Transactions

- **`/transactions`**: View all transactions made by the user (Work In Progress).

## Database

- **PostgreSQL**: Used for storing user data, merchant data, transaction history, and authentication information.
- **Prisma ORM**: Provides type-safe database access and migrations.

### Database Locking

Database locking is implemented to prevent double-spending and ensure the consistency of transactions.

## Security

- **JWT Authentication**: Secure session handling with JWT.
- **OAuth Integration**: Supports Google and GitHub for easy login.
- **Database Locking**: Prevents race conditions and ensures transaction integrity.

## Webhooks

- **Bank Webhooks**: The `bank-webhook` app handles user onramping requests and triggers webhooks to update user balances. Webhook endpoints ensure that the user balance is incremented only after a successful transaction.

## Demo

<img src="wenmo1.png">
<img src="wenmo2.png">
<img src="wenmo3.png">
<img src="wenmo4.png">
