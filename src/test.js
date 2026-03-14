const sum = require("./script")

function test(){
    const expected = 3
    const result = sum(1, 2)

    if(expected === result) {
        console.log("Succeed")
        return
    }

    console.log("Failed")
}

test()