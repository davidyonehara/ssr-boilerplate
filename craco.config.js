// Override create-react-app webpack config with custom rules
module.exports = {
    webpack: {
        configure: ( config, { env, paths }) => {
            // remove the default eslint rules
            config.module.rules[1].use[0].options.baseConfig = {}
            // use .eslintrc instead
            config.module.rules[1].use[0].options.useEslintrc = true
            // add the script-loader plugin to handle packaging minified libs such as conviva
            config.module.rules.push(
                {
                    test: /libs\/.*\.min\.js$/,
                    use : [ 'script-loader' ]
                }
            )
            return config
        }
    }
}
