[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.2-Projeto-Kokama-Front-end&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.2-Projeto-Kokama-Front-end)

# 2020.2-Projeto-Kokama-Front-end


## Execução

### Configurar as variáveis de ambiente

* Criar arquivos `.env` e preenchê-los de acordo as instruções dos arquivos `env-reference` (mesma pasta).

### Para executar o ambiente dockerizado
* Para iniciar o ambiente basta usar a chamada `make`
  - Dentro dele, execute o expo com `expo start`

### Para executar localmente:
* Instale as dependências do projeto usando a chamada `make install`
* Prepare seu ambiente usando a chamada `make prepare-local`
* Dentro do diretório `/projeto-kokama/` inicie a aplicação com `expo start -c`
