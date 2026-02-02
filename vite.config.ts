import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nucleos: resolve(__dirname, 'nucleos.html'),
        quemSomos: resolve(__dirname, 'quem-somos.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        contribua: resolve(__dirname, 'contribua.html'),
        contato: resolve(__dirname, 'contato.html'),
        matriculeSe: resolve(__dirname, 'matricule-se.html'),
        acessoInterno: resolve(__dirname, 'acesso-interno.html'),
        agendamento: resolve(__dirname, 'agendamento.html'),
      },
    },
  },
});
