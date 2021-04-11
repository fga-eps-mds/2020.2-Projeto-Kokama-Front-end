default:
	python3 get-ip-address.py $(IP)
	make build
	make run $(IP)

build:
	docker-compose build

run:
	python3 get-ip-address.py $(IP)
	docker-compose up -d
	docker-compose exec front bash -c "yarn; bash"

down:
	docker-compose down

stop:
	make down

install:
	npm install -g react-native-cli
	npm install -g expo expo-cli --loglevel=error
	npm install -g yarn

prepare-local:
	python3 get-ip-address.py $(IP)
	cd projeto-kokama; yarn