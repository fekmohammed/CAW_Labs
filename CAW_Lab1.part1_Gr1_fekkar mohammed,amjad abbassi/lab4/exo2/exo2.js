const First = {
    first: function(array, n) {
        if (array == null || n<=0)
        return [];
        if (n == null)
        return array[0];
        return array.slice(0, n);
    },
    last:  function (array, n) {
        if (array == null)
        return [];
        if (n == null)
        return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));
    },
    chunk: function (array, size){
        var chunkedArr = [];
        var index = 0;
        while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
        }
        return chunkedArr;
    },  
    manipulateColors: function (colors) {
        const result1 = colors.toString();
        const result2 = colors.join();
        const result3 = colors.join('');
        
        return [result1, result2, result3];
    }
}
    module.exports = First
