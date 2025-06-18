# Overview

This is a base NX git repository template featuring the following:

Versions:
- Node: 22.6
- NX: 21.2

Features:
- Empty NX workspace with TS preset
- Prettier on pre-commit
- Commit-Lint on commit

# How to start using



## Steps to re-create this template

- Create NX workspace:
```sh
pnpm create nx-workspace@latest nx-template-base --preset=ts --packageManager=pnpm --nxCloud=skip --formatter=prettier
cd nx-template-base
```

- Install dependencies:
```sh
pnpm add -D typescript eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm add -D lint-staged husky commitizen commitlint @commitlint/cli @commitlint/config-conventional
```

- Adjust .prettierrc to your liking:
```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all"
}
```

- Configure ESLint (.eslintrc.base.json) to your liking:
```json
{
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@typescript-eslint"],
  "extends": ["plugin:@typescript-eslint/recommended", "prettier"],
  "parserOptions": {
    "project": "./tsconfig.base.json"
  },
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
}
```

- Configure Lint Staged (lint-staged.config.js) to your liking:
```js
export default {
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md}': ['prettier --write'],
}
```

- Configure Commit Lint (commitlint.config.js) to your liking:
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

- Configure Commitizen, add to package.json
```json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

- Husky and hooks routines
```sh
pnpm exec husky init
echo "pnpm exec lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit   # skip on Windows
echo "pnpm exec --no -- commitlint --edit \$1" > .husky/commit-msg
chmod +x .husky/commit-msg   # skip on Windows
```
If you have permission issues on Windows running hooks, change hook files encoding to UTF-8



You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

