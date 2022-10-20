function catFilter(array, cat) {
    const jsonReturn = [];
    for (let index = 0; index < array.domain.length; index++) {
        const element = array.domain[index];
        if (element.category.indexOf(cat) !== -1) {
            jsonReturn.push(element);
        }
    }
    console.log('return catFilter : ', jsonReturn);
    return jsonReturn;
}
export { catFilter };