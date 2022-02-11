# Notes from development stage

> HTTP Methods that would be used in express (framework)
- GET: To search any information
- POST: To insert any information inside the API
- PUT: To change any information
- DELETE: To delete a data
- PATCH: To change a specific data

> Params types from our API
- Routes = Params from routes, for example: `http://.../products/438138`, the `438138` is a *route param from products*.
- Query = Params from routes, for example: `http://.../products?name=keyboard`, the `keyboard` is a *param to name from products*. **This param type is optional.**
- Body = Params from request body (used int methods POST, PUT or PATCH), for example:
```javascript
{
    "name": "keyboard", 
    "description": "MX Keys, the best keyboard ever!"
}
```

> ORM

- [What is an ORM and Why You Should Use it?](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)
- [ORM used: Type ORM](https://typeorm.io/#/)

> Migrations
- [Database Migration: What It Is and How to Do It](https://www.cloudbees.com/blog/database-migration)
- Creating entity
```javascript
yarn typeorm migration:create -n CreateUsers
```
- Run migrations
```javascript
yarn typeorm migration:run
```
- Remove the migration latest
```javascript
yarn typeorm migration:revert
```
- Creating a entity file
```javascript
yarn typeorm entity:create -n Users
```
- Flow

Entity < - > ORM < - > DB