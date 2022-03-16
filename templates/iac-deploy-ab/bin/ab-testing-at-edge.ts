#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Module_3_3 } from '../lib/module_3_3/ab_testing_module_3_3';

const app = new cdk.App();

new Module_3_3(app, 'ABWorkshopModule33', {})
