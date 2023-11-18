const exo1 = {
    exf: function (s, n) {
        for (let i = 0; i < n; i++) {
        s;
    }
    return s.repeat(n);
},
    mean: function (scores) {
    if (scores.length === 0) {
        return 0;
    }
    var sum = 0
    for(i = 0;i<scores.length;i++){
        sum = sum + scores[i]; 
    }
    return sum / scores.length;
}
}
module.exports = exo1