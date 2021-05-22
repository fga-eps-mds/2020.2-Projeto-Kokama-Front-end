[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.2-Projeto-Kokama-Front-end&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.2-Projeto-Kokama-Front-end)

# 2020.2-Projeto-Kokama-Front-end


## Execução

### Configurar as variáveis de ambiente
* Criar um arquivo .env da api do projeto;
SECRET_KEY=
DEBUG=
ALLOWED_HOSTS=
...

* Criar um arquivo .env do projeto;
POSTGRES_DB=
POSTGRES_USER=
...
* Tem que conter os seguintes links:
 LEARN_MICROSERVICE_URL=http://seu_ip:8001/
 TRANSLATE_MICROSERVICE_URL=http://seu_ip:8000/

### Para executar o ambiente dockerizado
* Para iniciar o ambiente basta usar a chamada `make`
  - Dentro dele, execute o expo com `expo start`

### Para executar localmente:
* Instale as dependências do projeto usando a chamada `make install`
* Prepare seu ambiente usando a chamada `make prepare-local`
* Dentro do diretório `/projeto-kokama/` inicie a aplicação com `expo start -c`
