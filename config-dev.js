const {defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2e = {
    baseUrl : 'https://www.dev.saucedemo.com/',
    env: {
        username: 'Dev_sauce',
        password: 'Dev_secret'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})