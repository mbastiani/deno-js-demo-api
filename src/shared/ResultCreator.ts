const createOkResult = (response: any, data: any) => {
    response.body = { data: data }
    response.status = 200
}

const createNoContentResult = (response: any) => {
    response.status = 204
}

const createNotFoundResult = (response: any, message?: string) => {
    response.body = { message: message || "Item not found" }
    response.status = 404
}

const createBadRequestResult = (response: any, message: string) => {
    response.body = { message: message }
    response.status = 400
}

const createErrorResult = (response: any, message: string) => {
    response.body = { message: message }
    response.status = 500
}

export { createBadRequestResult, createErrorResult, createNotFoundResult, createOkResult, createNoContentResult }