export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d2421fd77cb1bf4eb7dc939',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fvd5iz8k',
                  apiId: 'adc31dac-c076-402c-8d1c-2e958efde222'
                },
                {
                  buildHookId: '5d2421fd7bbdf46a6b98f268',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1etonh1m',
                  apiId: '27c0ffed-4d83-4b2e-828d-e6dff2811491'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adilhansatemirov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1etonh1m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
