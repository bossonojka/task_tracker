## Unprotected routes

**POST http://localhost:3000/api/registration**

Json body fields: first_name, last_name, email, password

**POST http://localhost:3000/api/auth**

Json body fields: email, password

Returns json with Bearer token and user info

## Protected routes

**PATCH http://localhost:3000/api/users/:id**

Json body fields: first_name, last_name, email, password

**DELETE http://localhost:3000/api/users/:id**

**GET http://localhost:3000/api/users/:id**

**GET http://localhost:3000/api/users/**

**GET http://localhost:3000/api/users/?page=2&limit=20**

Pagination (default limit: 10)

**POST http://localhost:3000/api/tasks**

Json body fields: title, description, status

**PATCH http://localhost:3000/api/tasks**

Only user created the task can change it. User can`t assign the task to himself. 

Json body fields: title, description, status, assignee_id

**DELETE http://localhost:3000/api/tasks/:id**

Only user created the task can delete it

**GET http://localhost:3000/api/tasks**

Returns an array of tasks sorted by date and time of user registration

**GET http://localhost:3000/api/tasks?status=View**

Returns an array of tasks with the specified status sorted by date and time of user registration





