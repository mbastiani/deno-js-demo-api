FROM hayd/alpine-deno:1.0.0

EXPOSE 7700

WORKDIR /app

COPY . ./

RUN deno cache --unstable main.ts

CMD ["run", "--allow-net", "--allow-write", "--allow-read", "--allow-plugin", "--unstable", "main.ts"]