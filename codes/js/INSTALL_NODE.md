# Instalação do Node

* Acessa o repositório https://github.com/creationix/nvm

* Abra o terminal e execute o seguinte comando para instalar o `nvm`:

```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

* Abra um novo terminal e execute o seguinte comando para verificar se a instalação do nvm ocorreu com sucesso:

```
$ nvm -h
```

* Próximo passo é listar as versões do node disponíveis no `nvm`:

```
$ nvm ls-remote
```

* Escolha a última versão e execute a instalação por:

```
$ nvm install v8.1.2
```

* Por fim, para verificar se a instalação ocorreu com sucesso execute:

```
$ node -v
```
