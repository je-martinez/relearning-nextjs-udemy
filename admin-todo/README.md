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
DATABASE_URL="postgresql://admin:admin123@localhost:5432/admin_todo"
```

**Note**: The `DATABASE_URL` should match your PostgreSQL credentials. Update it if you change any of the database configuration values.

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

### 6. Set up Prisma

Generate the Prisma Client:

```bash
npx prisma generate
# or using Makefile:
make prisma-generate
```

Run database migrations to create the schema:

```bash
npx prisma migrate dev
# or using Makefile:
make prisma-migrate
```

This will:

- Create the database tables based on your Prisma schema
- Generate the Prisma Client for use in your application
- Apply any pending migrations

### 7. Run the development server

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

- **Start services**: `make up` - Start Docker containers in detached mode with build
- **Stop services**: `make down` - Stop and remove containers
- **View logs**: `make logs` - Follow container logs
- **Delete everything**: `make delete` - Stop containers and remove volumes

## Database Connection

Once the database is running, you can connect to it using:

- **Host**: `localhost`
- **Port**: `5432` (or the port specified in your `.env` file)
- **Database**: `admin_todo` (or the database name from your `.env` file)
- **User**: `admin` (or the user from your `.env` file)
- **Password**: `admin123` (or the password from your `.env` file)

### Connection String

The `DATABASE_URL` environment variable is used by Prisma to connect to the database. The format is:

```
postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]
```

Example:

```
postgresql://admin:admin123@localhost:5432/admin_todo
```

**Important**: Make sure the `DATABASE_URL` in your `.env` file matches your PostgreSQL configuration.

## Prisma Commands

This project uses [Prisma](https://www.prisma.io/) as the ORM. Here are the most common Prisma commands:

### Using npx directly:

- `npx prisma generate` - Generate the Prisma Client based on your schema
- `npx prisma migrate dev` - Create and apply a new migration in development
- `npx prisma migrate deploy` - Apply pending migrations in production
- `npx prisma studio` - Open Prisma Studio to view and edit data in your database
- `npx prisma db push` - Push schema changes to the database without creating migrations (dev only)

### Using Makefile:

- `make prisma-generate` - Generate the Prisma Client based on your schema
- `make prisma-migrate` - Create and apply a new migration in development
- `make prisma-studio` - Open Prisma Studio to view and edit data in your database
- `make prisma-push` - Push schema changes to the database without creating migrations (dev only)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Makefile Commands

The project includes a `Makefile` with convenient shortcuts for common tasks:

### Docker Compose Commands

- `make up` - Start Docker containers in detached mode with build
- `make down` - Stop and remove containers
- `make logs` - Follow container logs in real-time
- `make delete` - Stop containers and remove volumes (cleanup)

### Prisma Commands

- `make prisma-generate` - Generate the Prisma Client
- `make prisma-migrate` - Create and apply database migrations
- `make prisma-studio` - Open Prisma Studio (database GUI)
- `make prisma-push` - Push schema changes without migrations (dev only)

## Project Structure

```
admin-todo/
├── prisma/
│   ├── migrations/          # Database migration files
│   └── schema.prisma        # Prisma schema definition
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── generated/
│   │   └── prisma/          # Generated Prisma Client
│   └── lib/
│       └── prisma.ts        # Prisma Client instance
├── docker-compose.yml
├── Makefile
├── prisma.config.ts         # Prisma configuration
├── .env.example
└── package.json
```

## Database Schema

The project uses Prisma with a PostgreSQL database. The current schema includes:

- **Todo**: A model for managing todo items with fields for title, description, completion status, and timestamps.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
