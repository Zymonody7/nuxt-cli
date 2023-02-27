// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css', '@/assets/css/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;"
        }
      }
    }
  },
  app: {
    head: {
      title: 'nuxt cli',
      meta: [
        {
          name: 'description',
          content: 'nuxt cli'
        },
        {
          name: 'keywords',
          content: 'nuxt cli'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  modules: ['@pinia/nuxt']
})
