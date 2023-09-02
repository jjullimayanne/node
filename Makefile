dev/up/db:
	docker compose up -d db

dev/down/db:
	docker compose down

install:
	npm install

local/run:
	npm run dev