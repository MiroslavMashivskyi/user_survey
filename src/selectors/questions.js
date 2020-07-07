export const questionsArray = (api) => {
    const array = [];
    for(let key in api){
        array.push(api[key])
    }

    return array;
}
