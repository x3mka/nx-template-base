module.exports = {
  '*': [
    // "nx affected:lint --fix --files",
    // 'npx nx affected:lint --fix --parallel --uncommitted',
    'npx nx format:write --uncommitted --libs-and-apps true',
    // 'nx format:write --files',
  ],
};
