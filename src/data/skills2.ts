/**
 * Define data for the skills section
 */
const skills = [

  // Languages
  {
    def: true,
    key: 'langWrap',
    title: 'langwrap',
    sections: [{
      key: 'lang',
      title: 'Languages',

      // Language Skill List
      skillList: [
        {
          title: 'CSS',
          perc: '100'
        },
        {
          title: 'HTML',
          perc: '100'
        },
        {
          title: 'JavaScript',
          perc: '80'
        },
        {
          title: 'Liquid',
          perc: '40'
        },
        {
          title: 'TypeScript',
          perc: '80'
        },
      ]
      // End Language Skill List
    }]
  },

  // Libraries and Frameworks
  {
    def: false,
    key: 'libAndFrame',
    title: 'libs and frames',
    sections: [
      {
        key: 'libraries',
        title: 'Libraries'
      },
      {
        key: 'frameworks',
        title: 'Frameworks'
      }
    ]
  }
]

export default skills
