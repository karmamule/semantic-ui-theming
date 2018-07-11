module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // All files with ts or tsx extension will be pre-checked by tslint
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: 
                        {                          
                            configFile: "./tslint.json",
                            
                            // tslint errors are displayed by default as warnings
                            // set emitErrors to true to display them as errors
                            emitErrors: false,
                            
                            // tslint does not interrupt the compilation by default
                            // if you want any file with tslint errors to fail
                            // set failOnHint to true
                            failOnHint: true,
                            
                            // enables type checked rules like 'for-in-array'
                            // uses tsconfig.json from current working directory
                            typeCheck: true,
                            
                            // automatically fix linting errors
                            fix: false,
                            
                            // can specify a custom tsconfig file relative to current directory or with absolute path
                            // to be used with type checked rules
                            tsConfigFile: 'tsconfig.json',
                            
                            // name of your formatter (optional)
                            // formatter: 'yourformatter',
                            
                            // path to directory containing formatter (optional)
                            // formattersDirectory: 'node_modules/tslint-loader/formatters/',
                            
                            // These options are useful if you want to save output to files
                            // for your continuous integration server
                            fileOutput: {
                                // The directory where each file's report is saved
                                dir: './tslint-output/',
                            
                                // The extension to use for each report's filename. Defaults to 'txt'
                                ext: 'xml',
                            
                                // If true, all files are removed from the report directory at the beginning of run
                                clean: true,
                            
                                // A string to include at the top of every report file.
                                // Useful for some report formats.
                                header: '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',
                            
                                // A string to include at the bottom of every report file.
                                // Useful for some report formats.
                                footer: '</checkstyle>'
                            }
                        }
                    }
                ]
            },
            
            // Needed for semantic-ui-react
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};