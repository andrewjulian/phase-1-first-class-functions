
function receivesAFunction (functionName){
    functionName();
}

function returnsANamedFunction () {
    return returnsAnAnonymousFunction;
}

function returnsAnAnonymousFunction () {
    return function () { "This is the result of a-function"};
}

