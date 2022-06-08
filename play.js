const {connect, setupInput} = require ('./client', './input');



console.log("Connecting ...");
connect();

setupInput();