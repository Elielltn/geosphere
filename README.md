# Geosphere

Aplicação web para explorar informações sobre países do mundo. Permite buscar, filtrar por região, sub-região e independência, e visualizar detalhes de cada país.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- React Country Flag

## Funcionalidades

- Listagem de países com paginação
- Busca por nome com suporte a acentuação
- Filtros por região, sub-região e independência
- Página de detalhes com histórico, dados geográficos e bandeira
- Layout responsivo para mobile e desktop

## Como executar

**Pré-requisitos:** Node.js instalado na máquina.

Clone o repositório:
```bash
git clone https://github.com/Elielltn/geosphere.git
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse no navegador: `http://localhost:5173`

## APIs utilizadas

- [REST Countries v2](https://restcountries.com) — dados dos países
- [IBGE](https://servicodados.ibge.gov.br) — histórico dos países