module.exports = {
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "shanenprz",
          name: "imgshrink",
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
