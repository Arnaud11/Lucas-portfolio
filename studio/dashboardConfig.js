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
                  buildHookId: '5db71acce5617bf2d1ee1110',
                  title: 'Sanity Studio',
                  name: 'Lucas-portfolio-studio',
                  apiId: 'e83b925c-ad83-4dcc-85be-96be362228f5'
                },
                {
                  buildHookId: '5db71accf3c783fe816b3642',
                  title: 'Portfolio Website',
                  name: 'Lucas-portfolio-web',
                  apiId: '5a2ad5ef-dd6f-4798-a657-4c0b49f2f1df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arnaud11/Lucas-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Lucas-portfolio-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
