export default class CheckRemoveEven {
    removeEve = (arr) => {
        const results = [];
        arr.forEach(element => {
            if( element % 2 !== 0) {
                results.push(element)
            }
        });
        return results;
    }
}