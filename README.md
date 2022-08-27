# Croct challenge

Desafio para a vaga de Frontend Developer da Croct.

## Siga as seguintes instruções para rodar o projeto:

### Quick Start

Faça um clone do repositório e acesse a pasta criada usando os comandos:

```
$ git clone https://github.com/FreitasGabriel/croct-challenge.git
$ cd crot-challenge

Instale as dependencias do projeto:
```

$ yarn

```

Caso ocorra uma falha na instalação das dependências, pode ser que você precise instalar alguns pacotes no seu Mac/Linux.
Esse erro ocorre por conta da lib do canvas usada no projeto, que depende de libs instaladas no PC para funcionar. Segue a forma de resolver o problema.

Mac
```

brew install pkg-config cairo pango libpng jpeg giflib librsvg

```

Ubuntu
```

sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

````

Para rodar o projeto:

```
yarn dev
```

Para executar os testes:

```
yarn test
```
````
