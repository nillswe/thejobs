## thejobs

Job search platform.

## Run project

First, rename `.env.sample` to `.env` and fill up all the environment variables. You will need a project setup on supabase in order to Prisma be able to create the database.

After have updated the `.env`, run these commands:

```bash

# Run the command to install all dependencies
yarn

# Run the command to prisma generate the database
npx prisma db push

# Run the command to start the development server
yarn dev
```
