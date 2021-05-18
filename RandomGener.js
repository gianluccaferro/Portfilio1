let nbr = Math.floor(Math.random()*10)
let msg = ['good luck','good day','good week','let\'s work','get rich','bad day','rain today','show love','sunny day','rainy day']

let rndMsg = () => {

    return msg[nbr]
}

console.log(rndMsg())