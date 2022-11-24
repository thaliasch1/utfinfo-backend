# utfinfo-backend
# UTFInfo
# Neste repositório você encontra o código para os sistemas Front-end ( frontend-tvs-ru ) e Back-end ( backend-tvs-ru ), do projeto <b>UFTINFO: Plataforma web para exibição de mídias informátivas.</b>

* Para rodar o projeto é preciso ter o <b>Node</b> Instalado em sua máquina: https://nodejs.org/en/download/


## Back end

No back-end vc encontra o arquivo <b>.env</b>, onde está localizado as variáveis de ambiente;

Geralmente ao iniciar a aplicação é redirecionado para a porta 3000, mas se for outra porta precisa modificar no .env:

```bash
PORT=3000
```


### Como rodar o back-end

Primeiro atualize os pacotes:

```bash
npm i
```
e então rode a aplicação:
```bash
npm start
```
Após o Back-end é preciso rodar o Front-end:

## Front-end

No arquivo .env do Front-end é preciso modificar a variavel BASE_URL:

```bash
BASE_URL="http://localhost:3000"
```
A BASE_URL precisa ser a <b>url em que o Back-end está rodando, com a porta.</b>
