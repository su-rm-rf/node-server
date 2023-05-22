import Router from 'koa-router'
import TodoController from '../controller/Todo'

const { 
  todo_list, todo_detail, todo_add, todo_update, todo_delete, todo_clear
} = new TodoController()

const router = new Router()

/**
 * @openapi
 * /:
 *  get:
 *    description: welcome to / page
 *    responses:
 *      200:
 *        description: success
 */
router.get('/', async (ctx) => {
  ctx.body = 'todo'
})

/**
 * @openapi
 * /todo/list:
 *  get:
 *    description: get todo list
 *    responses:
 *      200:
 *        description: success.
 */
.get('/list', todo_list)

.get('/detail/:id', todo_detail)

.post('/add', todo_add)

.post('/update', todo_update)

.post('/delete', todo_delete)

.post('/clear', todo_clear)

export default router