// create a custom module

function greet (name) {
    let greeting = `Hello ${name}`;
    console.log(greeting);
    return greeting;
}

// module.exports = greet // This is useful when your module only has one thing to export. It’s simple and straightforward. When you require the module, you get exactly what you need.
module.exports = { greet } // This is useful when your module has multiple exports. It allows you to group related functions or values together into a single exported object. When you require the module, you get an object containing all the exported members, which you can use as needed.