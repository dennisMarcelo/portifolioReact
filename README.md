# Projeto Portifólio em React

## Available Scripts

Para rodar o projeto localmente:

### `npm start`
Ira abrir na rota [http://localhost:3000] do seu broser.



### `npm test`

Ira rodar os testes utilizando o Jest.

## Requisitos

### Rotas
- [x] Existe rotas para todas as páginas
- [x] Caso não exista a página deve ser mostrado Page 404.

### Dados
- [x] Os dados estão todos localizado no provider da aplicação.

### Header
- [x] O header ficar sempre visível na página;
- [x] O header é um component;
- [x] Ele possui um ícone e um menu;
- [x] O menu em dispositivos móveis se torna um menu hamburguer, em dispositivos maiores o menu fica expandido;
- [x] O botão fica desabilitado quando estiver na sua respectiva página;
- [x] Os links de navegação ficam todos no header;
- [x] O menu hambúrguer mostra os links na vertical, da direita para esquerda com um efeito de slow transitions.
- [x] O header tem ícones de redes sociais.

### Page Home
- [x] Na home existe uma foto, nome, profissão, título e resumo.
- [x] as informaçẽos ficam divididas em dois grandes blocos. Um se chama profile: [foto, nome, profissão], e outro about:[título, resumo].
- [x] No mobile perfil fica em cima de resumo.
- [x] No desktop perfil fica ao lado de resumo.

### Page hard-skills
- [x] Existe um título escrito 'Hard Skills'
- [x] Existe uma lista de tecnologias de 'front end'
- [x] Existe uma lista de tecnologias de 'back end'
- [x] Existe uma lista de tecnologias de 'tests'
- [ ] Deixar o visual da página mais bonito.
- [ ] Em telas maiores existe uma imagem png que representa hardskills
- [ ] Colocar ícone de cada tecnologia.

### Page projetos
- [x] Cada projeto deve ficar separado em DIVs.
- [x] Em dispositivos móveis os projetos ficam um embaixo do outro.
- [x] Em telas maiores os projetos ficam um do lado do outro máximo de 3 projetos por linha.
- [x] Nos cards do projeto deve ter um gif mostrando a funcionalidade do app e título.
- [x] Quando clicar no card deve mostrar:
  - descrição do app,
  - data de conclusão
  - e um link para acessar o projeto.

### Page contato
- [x] Deve ter um titúlo 'contato'.
- [x] Deve ter um formulário.
- [x] Dentro do formulário deve ter:
- Um campo de imput de tipo texto com placeholder nome.
- Um campo de imput de tipo email com placeholder email.
- Um campo de imput de tipo textarea com label area.
- Um botão de submit com texto enviar.