# Truffle Box (Status)

This box comes with everything you need to start using smart contracts from a react app on your mobile.

Of course, testing of this box requires you to have iOS/Android device with Status installed on it.

## Building

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Clone or download the truffle box of your choice.
    ```javascript
    git clone [repo]
    ```

3. Install the node dependencies.
    ```javascript
    npm install
    ```

4. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```
    
## Enabling debug mode in Status

To make debugging work we run a web server on your device. It runs on port 5561 on both iOS and Android, but only if you enable it.
To start a server you need to: 

1. Connect your device to a computer
2. *Android only:* Enable port forwaring by executing `adb forward tcp:5561 tcp:5561`
3. Open Status application on your device and log in
4. Open `Console` chat and execute `/debug` command providing `On` as the argument

Please note that the server will start automatically next time you log in with the same credentials. You can easily change this behavior by turning the debug server off (it can be done by executing `/debug` command with `Off` argument)

## Running

1. Run the webpack server for front-end hot reloading. This command also tries to add your DApp to Status (so it requires the debug mode to be established). For now, smart contract changes must be manually recompiled and migrated. 
    ```javascript
    npm run start
    ```

2. Jest is included for testing React components and Truffle's own suite is included for smart contracts. Be sure you've compiled your contracts before running jest, or you'll get file not found errors.
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

3. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation?__

    All truffle boxes are a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
