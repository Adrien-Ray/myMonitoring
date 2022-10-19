function catFilter(array, cat) {
    const jsonReturn = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.cat.indexOf(cat) !== -1){
            jsonReturn.push(element);
        }
    }
    return jsonReturn;
}
export { catFilter };