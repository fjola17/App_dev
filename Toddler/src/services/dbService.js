const Create = (data, input) =>{
    // Find By if id exitst
    return [...data, input];
}
const deleteOne = (data, input) => {

}

export const deleteMany = (value, input) => value.filter(imga => input.indexOf(imga) === -1);
