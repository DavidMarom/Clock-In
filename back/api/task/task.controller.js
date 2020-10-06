const taskService = require('./task.service.js')
const externalService = require('../../services/externalService.js')

async function getTask(req, res) {
    const task = await taskService.getById(req.params.id)
    res.send(task)
}

async function getTasks(req, res) {
    const tasks = await taskService.query(req.query)
    res.send(tasks)
}

async function deleteTask(req, res) {
    await taskService.remove(req.params.id)
    res.end()
}

async function updateTask(req, res) {
    const taskId = req.params.id;
    const taskBody = req.body;
    const task = await taskService.update(taskId, taskBody)
    res.send(task)
}

async function addTask(req, res) {
    const task = req.body;
    await taskService.add(task)
    res.send(task)
}

async function performTask(req, res) {
    const task = await taskService.getById(req.params.id);
    try {
        await externalService.execute(task)

        // task.doneAt = new Date(Date.now()).toLocaleDateString();
        // await taskService.update(req.params.id, task)
        console.log('sucess');

    } catch (error) {
        await taskService.update(req.params.id, task)

    } finally {
        console.log('finally');
        // res.json(task);
    }
}

// async function performTask(req, res) {
//     const task = await taskService.getById(req.params.id);
//     try {
//         await externalService.execute(task)
//         task.dont
//     }catch{
//         task.last
//     }
// }

module.exports = {
    getTask,
    getTasks,
    deleteTask,
    updateTask,
    addTask,
    performTask
}