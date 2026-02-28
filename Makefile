# Variáveis para evitar repetição
COMPOSE_FILE = docker/compose.yaml

up:
	docker compose -f $(COMPOSE_FILE) --env-file .env up --build -d

down:
	docker compose -f $(COMPOSE_FILE) down

restart: down up


logs:
	docker compose -f $(COMPOSE_FILE) logs -f app
