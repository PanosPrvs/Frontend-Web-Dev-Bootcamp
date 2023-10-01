<h1>README (or not... your choice 🔪)</h1>

<h2>Update creds for GitHub</h2>

#### Step 1: Create a personal access token

To be able to pull/push your code remotely, you will need authentication.
Go to GitHub > Settings > Developer Settings > Developer Settings, and create a token with the correct permissions,
usually repo and read:packages.

#### Step 2: Add the token to your npm setup

```
npm login --registry=https://npm.pkg.github.com
> Username: # your GitHub username
> Password: # the token you just created
```

You're G2G! 😄