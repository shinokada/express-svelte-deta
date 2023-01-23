# Express+Svelte+Deta Starter

This repo is a starter kit using Express and Svelte for Deta.

## Installation

```
git clone git@github.com:shinokada/express-svelte-deta.git my-app
cd my-app/frontend
pnpm i
cd ../backend
pnpm i
```

## Deta.space

### Install CLI:

```
curl -fsSL https://get.deta.dev/space-cli.sh | sh
```

### Login

```
space login
```

This command will ask for an ‘access token’ to authenticate your CLI.

```
? Enter access token >
```

To get an access token, enter your Space dashboard, open the Teletype (command bar) and click ‘Settings’:

![cli1](./images/cli1.png)

Click ‘Generate Token’ to generate an access token and copy the resulting token and paste this back into your CLI prompt.

```
👍 Login Successful!
```

### Create a project

```
space new
```

### Deploy

```
space push
```

### Release

```
space release
```





## env

Add production preset to Sapcefile

```
...
      presets:
        env:
          - name: SECRET_MESSAGE
            description: Secret message only available to this Micro
          - name: REDIS_URL
          - name: NODE_ENV
          - name: API_URL
```

Then add env value on `https://deta.space/builder/your-app-code/develop?tab=config`.

## Express/index.js

```
import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
let apiUrl = process.env.API_URL || '/api';

const router = express.Router();
app.use(apiUrl, router);

router.get('/', (req, res) => {
  res.json({ message: 'From Express API', node_env: process.env.NODE_ENV });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Start a server:

```
cd backend
npm run dev
```

## Svelte

Start Svelte:

```
npm run dev
```


