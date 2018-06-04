const express = require('express')
const app = express()
const componentctrl = require('../controllers/component.controller')

app.get('', componentctrl.getListAllComponents )
app.get('/:id', componentctrl.getComponentByCode )
app.post('', componentctrl.addComponent )
app.put('/:id' , componentctrl.updateComponent )
app.delete('/:id', componentctrl.deleteComponent)

module.exports = app