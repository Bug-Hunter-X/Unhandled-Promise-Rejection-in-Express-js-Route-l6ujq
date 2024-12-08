# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: improper error handling within asynchronous route handlers.  When an asynchronous operation fails, the error is silently swallowed, leaving no indication to the developer that something went wrong. 

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version with comprehensive error handling.  This example showcases a simple asynchronous function simulating a database call or other external API that might fail.