import { Application } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/denv/mod.ts";
import router from './src/routes.ts'

const env = Deno.env.toObject();
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 7700

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)