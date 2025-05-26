# PepsUI

Uma biblioteca de componentes para React e Next.js focada em produtividade, consistência visual e fácil customização.

> “PepsUI” traz componentes prontos para você montar interfaces responsivas e modernas sem perder tempo com estilização do zero.

---

## Funcionalidades

- Conjunto de componentes fundamentais (Botões, Inputs, Cards, Modals, etc.)  
- Totalmente escrito em TypeScript  
- Compatível com React 18+ e Next.js 13+  
- Estilização via Tailwind CSS (configuração mínima necessária)
- Documentação e exemplos de uso  

---

## Instalação

Instale via npm ou yarn:

```bash
# com npm
npm install pepsui

# com yarn
yarn add pepsui

Observação: é necessário ter Tailwind CSS configurado no seu projeto.
```

## Uso

Basta importar e utilizar qualquer componente:

```tsx
// app/page.tsx (Next.js) ou App.tsx (React)
import { Button } from 'pepsui';

export default function Home() {
  return (
    <div className="p-8">
      <Button variant="solid" onClick={() => alert('Olá, PepsUI!')}>
        Clique aqui
      </Button>
    </div>
  );
}
```

## Documentação
A documentação completa e exemplos de todos os componentes estão disponíveis em:
[pepsui.com.br](https://pepsui.com.br)

## Contribuindo

Faça um fork do repositório

Crie uma branch para sua feature (git checkout -b feature/nova-coisa)

Faça o commit das suas alterações (git commit -m 'feat: adiciona X')

Faça o push para a branch (git push origin feature/nova-coisa)

Abra um Pull Request

## Agradecimentos
À comunidade React e Next.js

Aos mantenedores do Tailwind CSS

A você, por experimentar e contribuir com o projeto!

PepsUI – Simplificando seu front-end, um componente de cada vez.

Copiar
Editar

