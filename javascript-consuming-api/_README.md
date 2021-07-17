# Consumindo API no front e no back-end | CodeDrops #45
Desenvolvido a partir do seguinte vídeo da Rocketseat: https://www.youtube.com/watch?v=vYlz3SmNXQQ

## Como rodar?
<!-- Em um termninal roda "node server.js" -->
<!-- Em outro terminal roda "npx lite-server" -->

## API
Criar uma API

- [x] Iniciar o projeto `npm init -y` 
<!-- cria package.json e -y é para não fazer perguntas  -->

- [x] Instalar as dependências `npm i express nodemon cors axios`
<!-- express ajuda a criar a API, nodemon reinicia o servidor da API quando modificaçnoes são feitas, cors permite acesso do front para API -->

- [x] Criar uma rota para acessar a API
- [x] Servir a API
<!-- roda o servidor com `node server.js`, abre navegador e no console coloca `location.href = "http://localhost:4567"` -->

- [x] Habilitar o CORS
<!-- controle de acesso que os navegadores tem para quando um servidor está conversando com outro.
"(...) has been blocked by CORS by police"
Quer dizer que só dá para acessar a API pelo endereço dela mesmo (http://localhost:4567), não pelo endereço do front que a consome (http://localhost:3000)
Para conseguir entrar, a API precisa estar com CORS habilitado. Assim, qualquer outro servidor consegue acessar. -->

- [x] Habilitar o nodemon para reiniciar o server
<!-- fica olhando e reiniciando o servidor depois de modificações. Configura no package.json -->

## front-end
Consumir API

- [x] Utilizar fetch para consumir nossa API back-end
- [x] Explicar promise - async/ await
- [x] Usar try/ catch
- [x] Mostrar a resposta na tela
<!-- em outro terminal, roda `npx lite-server`. Fica olhando o index.html e reinicia o servidor sempre que há alterações. Na mesma janela que está a API, abre o console e coloca `location.href = "http://localhost:3000"` -->

## back-end
Consumir API

- [] jsonplaceholder
<!-- site com APIs gratuitas. Pegamos essa com 10 users: `https://jsonplaceholder.typicode.com/users` -->

- [] usar axios
- [] semelhanças entre axios e fetch
- [] usar try/ catch
