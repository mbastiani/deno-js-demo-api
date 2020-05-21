ENTRY_POINT := ./app/main.ts

default:
	make dev

dev:
	denon $(ENTRY_POINT)

cache:
	deno cache --unstable $(ENTRY_POINT)

format:
	deno fmt

install:
	deno install --allow-net --allow-write --allow-read --allow-plugin --unstable -f $(ENTRY_POINT)

docker:
	docker build -t app . && docker run -it --init -p 7700:7700 app
run:
	deno run --allow-net --allow-write --allow-read --allow-plugin --unstable $(ENTRY_POINT)

test:
	deno test

test/watch:
	$(GO_TO_SOURCE); denon --test --config denon.json