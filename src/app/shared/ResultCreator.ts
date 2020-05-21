const createOkResult = (context: any, data: any) => {
    context.response.body = { data: data }
    context.response.status = 200
}

const createNoContentResult = (context: any) => {
    context.response.status = 204
}

const createNotFoundResult = (context: any, message?: string) => {
    context.response.body = { message: message || "Item not found" }
    context.response.status = 404
}

const createBadRequestResult = (context: any, message: string) => {
    context.response.body = { message: message }
    context.response.status = 400
}

const createErrorResult = (context: any, message: string) => {
    context.response.body = { message: message }
    context.response.status = 500
}

export { createBadRequestResult, createErrorResult, createNotFoundResult, createOkResult, createNoContentResult }