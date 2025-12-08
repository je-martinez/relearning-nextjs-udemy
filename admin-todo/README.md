# Admin Todo

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) or [bun](https://bun.sh/)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd admin-todo
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit the `.env` file with your preferred database configuration:

```env
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_DB=admin_todo
POSTGRES_PORT=5432
```

### 4. Start the database with Docker Compose

Start the PostgreSQL database container:

```bash
docker compose up -d
```

Or using the Makefile:

```bash
make up
```

This will:

- Pull the PostgreSQL 16 Alpine image (if not already present)
- Create and start the database container
- Set up persistent volumes for data storage
- Configure health checks

### 5. Verify database is running

Check the status of the containers:

```bash
docker compose ps
```

You should see the `admin-todo-db` container running with a healthy status.

### 6. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Compose Commands

### Using Docker Compose directly:

- **Start services**: `docker compose up -d`
- **Stop services**: `docker compose down`
- **View logs**: `docker compose logs -f`
- **Remove everything (including volumes)**: `docker compose down -v`

### Using Makefile:

- **Start services**: `make up`
- **Stop services**: `make down`
- **View logs**: `make logs`
- **Delete everything**: `make delete`

## Database Connection

Once the database is running, you can connect to it using:

- **Host**: `localhost`
- **Port**: `5432` (or the port specified in your `.env` file)
- **Database**: `admin_todo` (or the database name from your `.env` file)
- **User**: `admin` (or the user from your `.env` file)
- **Password**: `admin123` (or the password from your `.env` file)

### Example connection string:

```
postgresql://admin:admin123@localhost:5432/admin_todo
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
admin-todo/
├── src/
│   └── app/
│       ├── api/
│       │   └── health/
│       │       └── route.ts
│       ├── layout.tsx
│       └── page.tsx
├── docker-compose.yml
├── Makefile
├── .env.example
└── package.json
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
