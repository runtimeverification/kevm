'use strict';

const path = require('path')
const toExecutableName = require('to-executable-name')

const execName = 'kevm-vm'
const exec = toExecutableName(execName)

exports.exec = exec
exports.path = path.join(__dirname, 'vendor', exec)
