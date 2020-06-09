const ok = (context: any, data: any) => {
    context.response.body = { data: data }
    context.response.status = 200
}

const noContent = (context: any) => {
    context.response.status = 204
}

const notFound = (context: any, message?: string) => {
    context.response.body = { message: message || "Item not found" }
    context.response.status = 404
}

const badRequest = (context: any, message: string) => {
    context.response.body = { message: message }
    context.response.status = 400
}

const error = (context: any, message?: string) => {
    context.response.body = { message: message?? "Internal server error" }
    context.response.status = 500
}

export { badRequest, error, notFound, ok, noContent }