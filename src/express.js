import express from 'express'
import { router } from './route/index.js'
import logger from 'morgan'
import { errorHandler } from './middleware/errorHandler.js'

export const app = express()

// Use the morgan logger
app.use(logger('dev', { immediate: true }))

app.use('/', router)

// Use the public folder for static resources
app.use(express.static('public'))

// 404 handler
app.use(errorHandler.notFoundDefault)

// Global error handler
app.use(errorHandler.errorDefault)


  
  
      