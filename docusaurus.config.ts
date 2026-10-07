import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Este arquivo é executado no Node.js.
// Não utilize APIs exclusivas do navegador ou JSX diretamente aqui.

const config: Config = {
  // ---------------------------------------------------------------------------
  // Informações gerais
  // ---------------------------------------------------------------------------

  title: 'ASC Documentation',
  tagline: 'Documentação oficial do ASC',

  favicon: 'img/favicon.ico',

  // ---------------------------------------------------------------------------
  // GitHub Pages
  // ---------------------------------------------------------------------------

  // Domínio onde o GitHub Pages será publicado
  url: 'https://aizen-ciberseguranca.github.io',

  // Como este é um Project Site, utilizamos o nome do repositório
  baseUrl: '/asc-docs/',

  // Organização e repositório no GitHub
  organizationName: 'Aizen-Ciberseguranca',
  projectName: 'asc-docs',

  // Evita adicionar barra ao final de todas as URLs
  trailingSlash: false,

  // ---------------------------------------------------------------------------
  // Compatibilidade futura
  // ---------------------------------------------------------------------------

  future: {
    v4: true,
  },

  // Interrompe o build caso existam links internos quebrados
  onBrokenLinks: 'throw',

  // ---------------------------------------------------------------------------
  // Internacionalização
  // ---------------------------------------------------------------------------

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // ---------------------------------------------------------------------------
  // Presets
  // ---------------------------------------------------------------------------

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // Define a documentação como página inicial.
          routeBasePath: '/',

          // Permite editar páginas diretamente pelo GitHub.
          editUrl:
            'https://github.com/Aizen-Ciberseguranca/asc-docs/tree/main/',
        },

        // ASC utilizará o Docusaurus exclusivamente para documentação.
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ---------------------------------------------------------------------------
  // Tema
  // ---------------------------------------------------------------------------

  themeConfig: {
    // Imagem utilizada quando páginas forem compartilhadas.
    // Podemos criar uma imagem específica do ASC posteriormente.
    image: 'img/docusaurus-social-card.jpg',

    // -------------------------------------------------------------------------
    // Tema claro / escuro
    // -------------------------------------------------------------------------

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // -------------------------------------------------------------------------
    // Navbar
    // -------------------------------------------------------------------------

    navbar: {
      title: 'ASC',

      logo: {
        alt: 'ASC Logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },

        {
          href: 'https://github.com/Aizen-Ciberseguranca/asc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Footer
    // -------------------------------------------------------------------------

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/',
            },
          ],
        },

        {
          title: 'ASC',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Aizen-Ciberseguranca/asc-docs',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Aizen Cibersegurança. Todos os direitos reservados.`,
    },

    // -------------------------------------------------------------------------
    // Syntax highlighting
    // -------------------------------------------------------------------------

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;