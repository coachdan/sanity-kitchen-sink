export default {
  widgets: [
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
                  buildHookId: '5eea3aaae35daff30da5a8e4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-33kpppt7',
                  apiId: 'a9508ca5-33c1-4b3a-9e02-ff5c1a5cdce4'
                },
                {
                  buildHookId: '5eea3aabe1c93a8505182945',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gxfy9mgb',
                  apiId: '1f1f3428-6e0c-42ea-8ba9-9e7164d2f440'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coachdan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gxfy9mgb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
