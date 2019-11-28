const data = require('../resources/data');

const Create = (data, input) =>{
    // Find By if id exitst
    return [...data, input];
}
const deleteOne = (data, input) => {

}
const deleteMany = (data, input) => {
    // ble
}

module.export = {
    Create,
    deleteOne,
    deleteMany
};