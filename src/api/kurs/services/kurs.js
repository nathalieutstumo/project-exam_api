'use strict';

/**
 * kurs service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kurs.kurs');
