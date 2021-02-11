const promise = new Promise((resolve, reject) => {
    resolve("PROMISE VALUE")
})

function execute() {
    promise.then(console.log)
    console.log("MAIN PROGRAM");
}
module.exports = execute;
