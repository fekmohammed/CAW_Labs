function mean(scores) {
    if (scores.length === 0) {
        return 0;
    }

    var sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }

    return sum / scores.length;
}

module.exports = mean;
