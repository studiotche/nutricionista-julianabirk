# Juliana Birk — Nutricionista em Ivoti

Site estático em Astro para a nutricionista Juliana Birk (CRN 17457), com SEO local, dados estruturados e foco em conversão pelo WhatsApp.

## Personalização

1. Edite `src/data/site.ts` com nome, cidades, telefone, textos, especialidades e URL final.
2. Substitua os arquivos em `public/images` (logo, hero, sobre e fundo).
3. Substitua `public/favicon-julianabirk.svg` e atualize o monograma `JB` em `src/pages/index.astro`.
4. Ajuste a URL do sitemap em `public/robots.txt`.
5. Confirme dados profissionais, endereço, telefone e especialidades diretamente com a nutricionista.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e GitHub Pages

```bash
npm run build
```

- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Deploy automático via GitHub Actions em `https://studiotche.github.io/nutricionista-julianabirk/`
- Para um link temporário, defina `PUBLIC_SITE_PREVIEW=true` para gerar `noindex,nofollow`.

O conteúdo evita promessas clínicas e especialidades não confirmadas. Antes da publicação definitiva, valide o JSON-LD e envie o sitemap no Google Search Console.