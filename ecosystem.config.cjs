module.exports = {
  apps: [
    {
      name: 'LandingPageSaa',
      port: '3210',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
