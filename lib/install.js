'use strict';

const path = require('path')
const bmanager = require ('bin-manager')
const log = require('logalot')

const { baseUrl } = require('.')
const paths = require('..')


const bin = bmanager('bin', 'kevm-vm')
      .src(baseUrl + '/linux/x64/kevm-vm', 'linux', 'x64')
      // Not yet supported:
      // .src(baseUrl + '/macos/x64/kevm-vm', 'darwin')
      // .src(baseUrl + '/win/x64/kevm-vm.exe', 'win32', 'x64')
      .use(paths.exec)
      .dest(paths.path)

bin.use(path.basename(paths.path))
    .run(['--help'], runErr => {
	if(runErr) {
            log.warn(runErr.message)
            log.warn('pre-built binary failed')
	} else {
            log.success('pre-built binary installed')
	}
    })
