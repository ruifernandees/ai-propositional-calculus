# Guesstimate Engine
- Motor de inferência utilizado pela Guesstimate AI (https://guesstimate-ai.netlify.app)

## ⚙️ Como funciona?
- Este motor utiliza-se das seguintes técnicas para realizar inferência:
  - Encadeamento para frente;
  - Encadeamento para trás;
  - Encadeamento misto.

## 🚀 Instalação
- Para incluir em seu projeto, basta executar:
```sh
# Com NPM
npm install guesstimate-engine

# Ou com Yarn
yarn add guesstimate-engine
```
## 💻 Como utilizar?
- Para utilizar, basta carregar uma base de conhecimento com a seguinte sintaxe:
```
NAME: Example

RULES:
IF fact THEN consequence

TARGETS:
consequence
```
- Logo após, siga o seguintes passos:
1. Carregar as regras, por meio do método rulesParser;
2. Extrair os alvos (targets);
4. Instanciar a KnowledgeDatabase:
```
const database = new KnowledgeDatabase(rules, targets, dbName, fileContent);
```

Exemplo de uso: https://github.com/ruifernandees/guesstimate-interface/blob/main/src/domain/parsers/parseFileContentToKnowledgeDatabase.ts

## 🖥️ CLI
- Este projeto possui uma CLI, para realizar testes sobre o pacote.
- Para utilizá-la, é necessário o Node ou Yarn:
```sh
git clone https://github.com/ruifernandees/ai-propositional-calculus.git
cd ai-propositional-calculus
yarn install
```

- Para rodar, basta executar o comando "yarn ai" e passar dois argumentos:
    1. O primeiro argumento é a questão e exemplo. Ex: q1e1 (questão 1, exemplo 1)
    2. O segundo argumento é o alvo que se quer provar. Ex: Q.
```sh
yarn ai q1e1 Q
```
