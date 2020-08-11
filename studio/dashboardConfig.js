export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'test-las-sanity-studio',
                  apiId: '772d471e-4d23-4ebe-9e16-4c7c61463445'
                },
                {
                  buildHookId: '5f32633550e44f3cb8884e39',
                  title: 'Events Website',
                  name: 'test-las-sanity',
                  apiId: 'b69fb29b-d677-4faf-92ec-a2085b2a14a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niklas-may/test-LAS-Sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-las-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
