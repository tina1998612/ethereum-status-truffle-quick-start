# Ethereum Status + Truffle Quick Start Guide
This repository serves as a demo for the official quick start guide of [Status.im](https://status.im/) 

## Usage
1. Get status app by entering your email [here](https://status.im/). Follow all the instructions until u download the `TestFlight` app
2. Clone this repository and navigate to this directory 
3. `npm install`
4. Find your phone's & machine's IP 
5. Change the phone's IP address at the first line of `scripts/start.js`
6. Change the machine's IP address by replacing all `<machine_ip>` with your IP (IPv4 address)
7. Open another terminal window and type `ganache-cli -p 8546` to open a testing node
8. Enable debug mode in the Status app. First, `Profile -> Advanced -> Development mode(turn it on)`. Then, `Home -> Status Console -> type /debug -> choose On`. DO NOT CLOSE YOUR PHONE'S SCREEN FROM NOW ON or you will have to enable debug mode again. 
9. Let Status connect to the test node we just opened instead of Ropsten. Switch node by `status-dev-cli switch-node "http://<machineIP>:8546" --ip <phoneIP>` 
<br>
Repeat step 8 if the err msg is cannot connect.
10. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```
11. `npm run start`

# Notice
*If you use Android* then make TestRPC accessible from your device.
    ```javascript
    adb reverse tcp:8546 tcp:8546
    ```

## Testing

Jest is included for testing React components and Truffle's own suite is included for smart contracts. Be sure you've compiled your contracts before running jest, or you'll get file not found errors.

    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

## Releasing

To build the application for production, use the build command. A production build will be in the build_webpack folder.

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
