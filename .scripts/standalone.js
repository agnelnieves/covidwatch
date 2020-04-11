#!/usr/bin/env node

const { execSync } = require('child_process');
const inquirer = require('inquirer');

const app = require('../node_modules/cz-customizable/index');
const log = require('../node_modules/cz-customizable/logger');

log.info('cz-customizable standalone version');

const commit = commitMessage => {
  try {
    execSync(`git commit -am "${commitMessage}"`, { stdio: [0, 1, 2] });
  } catch (error) {
    log.error('>>> ERROR', error.error);
  }
};

app.prompter(inquirer, commit);
