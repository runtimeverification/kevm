#!/usr/bin/env node
'use strict';

const spawn = require('child-process').spawn

const paths = require('..')

const child = spawn(paths.path, process.argv.slice(2), {stdio: 'inherit'})

child.on('exit', process.exit)

process.on('SIGINT', () => {
    child.kill('SIGINT')
})

process.on('SIGTERM', () => {
    child.kill()
})
