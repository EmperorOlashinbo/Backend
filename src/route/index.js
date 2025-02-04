import express from 'express'
import { router as helloRoute } from './hello.js'
import { router as usersRoute } from './users.js'
import { router as usersRoute2 } from './users_v2.js'


export const router = express.Router()

router.use('/', helloRoute)

router.use('/api/v1', usersRoute)

router.use('/api/v2', usersRoute2)