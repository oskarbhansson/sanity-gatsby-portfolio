export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '609547ef56750c64877834fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dne2gmug',
                  apiId: 'd91cc2a0-8bbb-4533-8c94-6a2bf7fdec4f'
                },
                {
                  buildHookId: '609547f0ea90a48382ba2c68',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a67wayrs',
                  apiId: '3055affc-f37f-4e6d-b16f-e7754cbf9fb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oskarbhansson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-a67wayrs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
