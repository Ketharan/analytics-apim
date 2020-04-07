module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                'dynamic-import-node',
            ],
        },
        production: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            chrome: '58',
                            edge: '16',
                            firefox: '56',
                            safari: '11',
                        },
                    },
                ],
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-spread',
                '@babel/plugin-proposal-object-rest-spread',
            ],
        },
        development: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: 'last 2 versions',
                    },
                ],
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                ['@babel/plugin-transform-spread'],
                '@babel/plugin-proposal-object-rest-spread',
            ],
        },
    },
};
