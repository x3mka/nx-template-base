# Overview

This is a base NX git repository template featuring the following:

Versions:
- Node: 22.6
- NX: 21.2

Features:
- Empty NX workspace with TS preset
- Prettier on pre-commit
- Lint Staged on commit
- GitHub Actions CI pipeline

# How to start using

1. This repository is marked as a template repository. You can click 'Use this template' button on the repo GitHub page.
2. Use degit:
```sh
npm i -g degit
npx degit x3mka/nx-template-base my-repo
```


Once you cloned a new repo from this template:
```sh
pnpm install
```

## Create new packages

- To create a Node JS library:
```sh
pnpm exec nx g @nx/node:lib common --directory=libs --unitTestRunner=jest --importPath=@myorg/common --linter=eslint --standaloneConfig
```

- To create a React app:
```sh
pnpm exec nx g @nx/react:application frontend --directory=apps --unitTestRunner=jest --linter=eslint --standaloneConfig
```

## Steps to re-create this template

- Create NX workspace:
```sh
pnpm create nx-workspace@latest nx-template-base --preset=ts --packageManager=pnpm --nxCloud=skip --formatter=prettier --appsDir=apps --libsDir=libs
cd nx-template-base
```

- Default NX plugins:
```sh
pnpm exec nx add @nx/eslint
```

- Install dependencies:
```sh
pnpm add -D lint-staged husky commitizen commitlint @commitlint/cli @commitlint/config-conventional
pnpm add -D @nx/node
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

- Configure Lint Staged (lint-staged.config.js) to your liking.
- Configure Commit Lint (commitlint.config.js) to your liking.
- Configure Commitizen, add to package.json:
```json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

- Configure Husky and git hooks:
```sh
pnpm exec husky init
echo "pnpm exec lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit   # skip on Windows
echo "npx --no-install commitlint --edit "$1"" > .husky/commit-msg
chmod +x .husky/commit-msg   # skip on Windows
```
If you have permission issues on Windows running hooks, change hook files encoding to UTF-8.

- CI GitHub Action workflow
```sh
pnpm exec nx g ci-workflow
```
