let corgi = "K"

console.log(welsh(corgi, 13, 10))

function welsh(corgi, a, b) {

    const test = {
        "Y" : "합격",
        "N" : "불합격",
        "K" : (a, b) => {
            return a+b;
        }
    }
    return test[corgi](a, b)
}