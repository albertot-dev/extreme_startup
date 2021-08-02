export default class BaseQuestion {
    randomNumbers(nNumber = 10) {
        var arr = [];
        while (arr.length < nNumber) {
            var r = Math.floor(Math.random() * 1000) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr
    }
}