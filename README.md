# Dev Shop — Carrinho de Compras

Projeto desenvolvido durante o curso **Fullstack Pro** do [Sujeito Programador](https://sujeitoprogramador.com), como parte das aulas práticas de React com TypeScript.

## Sobre o projeto

**Dev Shop** é uma aplicação de e-commerce que simula um carrinho de compras. O usuário pode navegar pelo catálogo de produtos, adicionar itens ao carrinho, ajustar quantidades e acompanhar o valor total da compra em tempo real.

## Funcionalidades

- Listagem de produtos consumida via API (JSON Server)
- Adição de produtos ao carrinho com incremento automático de quantidade
- Remoção de itens com decremento de quantidade (remoção automática ao chegar em zero)
- Exibição de subtotal por item e total geral do carrinho
- Badge no ícone do carrinho indicando a quantidade de itens
- Carrinho vazio com link de retorno ao catálogo
- Formatação de preços em Real Brasileiro (R$)
- Navegação entre páginas com React Router

## Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 19 | Biblioteca de UI |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Bundler e servidor de desenvolvimento |
| React Router | 7 | Roteamento client-side |
| Tailwind CSS | 4 | Estilização utilitária |
| Axios | 1.x | Requisições HTTP |
| JSON Server | 0.17 | Mock de API REST |
| React Icons | 5 | Ícones |
| Context API | — | Gerenciamento de estado global do carrinho |

## Estrutura do projeto

```
src/
├── contexts/
│   └── CartContext.tsx     # Estado global do carrinho (Context API)
├── services/
│   └── api.ts             # Configuração do Axios
├── components/
│   ├── header/            # Cabeçalho com ícone e badge do carrinho
│   └── layout/            # Wrapper de layout com header e outlet
└── page/
    ├── home/              # Página de listagem de produtos
    └── cart/              # Página do carrinho de compras
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Catálogo de produtos |
| `/cart` | Carrinho de compras |

## Produtos disponíveis (mock)

- AirPods Apple — R$ 120,00
- Notebook Gamer Lenovo i5 — R$ 379,90
- Teclado Mecânico HyperX — R$ 199,99
- Monitor Husky 34" — R$ 2.099,99
- Soundbar LG 4.1 — R$ 1.099,99
- Samsung Galaxy Watch 5 — R$ 1.139,00

## Como executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Executar em desenvolvimento

Em dois terminais separados:

```bash
# Terminal 1 — API mock
npx json-server --watch db.json

# Terminal 2 — aplicação React
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

---

> Projeto desenvolvido como aluno do curso Fullstack Pro — Sujeito Programador.
