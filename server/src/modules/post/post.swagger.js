/**
 * @swagger
 * tags:
 *  name: Post
 *  description: Post Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          createPost:
 *              type: object
 *              required:
 *                  -   lat
 *                  -   lng
 *                  -   category
 *                  -   title_post
 *                  -   description
 *              properties:
 *                  lat:
 *                      type: string
 *                  lng:
 *                      type: string
 *                  category:
 *                      type: string
 *                  title_post:
 *                      type: string
 *                  description:
 *                      type: string
 *                  amount:
 *                      type: string
 *                  images:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  options:
 *                      type: json
 */

/**
 * @swagger
 *
 * /post/create:
 *  post:
 *      summary: create new post
 *      tags:
 *          -   Post
 *      requestBody:
 *          content :
 *              multipart/form-data:
 *                  schema:
 *                      $ref: "#/components/schemas/createPost"
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: internalServerError
 */

/**
 * @swagger
 *
 * /post/my:
 *  get:
 *      summary: get my posts
 *      tags:
 *          -   Post
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: internalServerError
 */

/**
 * @swagger
 *
 * /post/delete/{id}:
 *  delete:
 *      summary: delete post by id
 *      tags:
 *          -   Post
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: internalServerError
 */

/**
 * @swagger
 *
 * /post/{id}:
 *  get:
 *      summary: get post by id
 *      tags:
 *          -   Post
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: internalServerError
 */

/**
 * @swagger
 *
 * /post/:
 *  get:
 *      summary: get all posts
 *      tags:
 *          -   Post
 *      parameters:
 *          -   in: query
 *              name: search
 *              type: string
 *              description: search parameter
 *          -   in: query
 *              name: category
 *              type: string
 *              description: category parameter
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: internalServerError
 */
