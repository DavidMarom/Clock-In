module.exports = {
    getTask
}

var _DB = [
    {
        _id: 0,
        title: "aaa"
    },
    {
        _id: 1,
        title: "bbb"
    }
]

function getTask(id) {
    const result = _DB.filter(task => task._id === id);
    return result[0];
}
