ENTRY_POINT := app.ts

default:
	make dev

dev:
	denon $(ENTRY_POINT)

cache:
	deno cache --unstable $(ENTRY_POINT)

format:
	deno fmt

install:
	deno install --allow-net --allow-write --allow-read --allow-plugin --unstable -f https://deno.land/x/denon/denon.ts;

run:
	deno run --allow-net --allow-write --allow-read --allow-plugin --unstable $(ENTRY_POINT)

test:
	deno test

test/watch:
	$(GO_TO_SOURCE); denon --test --config denon.json