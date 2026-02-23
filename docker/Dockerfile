FROM debian:trixie

RUN apt-get update && apt-get install -y

COPY . /app

WORKDIR /app

CMD ["./scripts/run.sh"]