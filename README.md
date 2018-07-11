### This project holds various examples for React and TypeScript.

#### How to use ####
tslint can be configured to provide correctness and style checks to your typescript code just as stylecopy and others do
for C#. This project uses and extends the recommended and react configurations.  See https://palantir.github.io/tslint/usage/cli/
for full documentation on tslint.

The current primary use for this project is to allow the user to play around with the effects of various tslint settings
to decide which overrides of the recommended and react configs are appropriate.

Go to tslint.json and change one of the disabled rules from false to true. For example, if you change ordered-imports to true, 
then run **npm start** you'll see an error is now thrown for index.tsx. The details will show in the terminal output as well as in more 
compact form in the directory tslint-output. Change the rule back to false, do npm start again, and everything is fine.

#### How this project was built ####

These guidelines show the steps that were followed to create this project in Visual Studio Code.

It was built following the instructions at https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
with the following exceptions/additions:

1. When trying to run webpack for the first time it will ask for a cli to be installed. By default it installs it locally
and the page had you install wepback itself globally, so this will not work right. You can manually install the cli globally
as well by "npm install -g webpack-cli", or install webpack locally with npm install webpack.

2. ```npm install tslint tslint-loader --save-dev```

3. ```tslint --init```

4. Update webpack.config.js for tslint-loader as shown at https://github.com/wbuchwalter/tslint-loader but used the test 
```
test: /\.tsx?$/,
```
to match the awesome-typescript-loader regex

5. npm install tslint-react and then add it to the extends section of tslint.json, e.g.
```
        "extends": [
        "tslint:recommended", "tslint-react"
    ],
```
6. npm install semantic-ui-react semantic-ui-css. Put link to their css in index.html

7. To have your project served up npm install webpack-dev-server, 
    * Add 
    ```var path = require('path');```
    to top of your webpack.config.js then in that file update your output section and add a devServer section as follows:
    ```
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "/dist"),
            publicPath: '/dist/'
        },

        devServer: {
            contentBase: "./",
            inline: true,
            port: 8080
        },
    ```
    * Update your start script in package.json to be
    ```    "start": "webpack-dev-server --content-base dist/"```

#### Known issues

tslint-loader has a 'clean' option that is supposed to remove all files in output directory (./tslint-output in this project) whenever
run, but if there are no issues reported by the linter it is not cleaning out the prior files in that directory.

#### Notes / Troubleshooting

In order to run tslint and see any warnings just give the "webpack" command from the root directory of the project if you 
installed tslint and webpack globally.  If you installed locally then add a start script to package.json scripts section that will look something like
    "start": "webpack ./src/index.tsx -o ./dist/bundle.js --config ./webpack.config.js"
and use npm start.  This will build the distribution and you can then view index.html in your browser of choice (assuming webpack didn't have any errors).

tslint not running correctly or seems to be ignoring tslint.json?  If so, there may be an error in tslint.json. Assuming you installed tslint locally, run it via CLI with
```./node_modules/.bin/tslint --project tsconfig.json```
and see if any error is listed.

If your tslint.json is being ignored when running webpack, make sure you have NO **configuration:** section in your loader options
for tslint-loader. If you do then that will completely supercede your tslint.json.  Remove the configuration: section in loader
options and add a ```configFile: './tslint.json'``` (or whatever is appropriate path) and it should then be used.

