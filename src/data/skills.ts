/**
 * Define data for the skills section
 */
const skills = [

  // Languages
  {
    def: true,
    key: 'langWrap',
    title: 'Languages',
    sections: [{
      key: 'lang',
      title: 'Languages int',

      // Language Skill List
      skillList: [
        {
          title: 'Ajax',
          perc: '100'
        },
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
    title: 'Libraries and Frameworks',
    sections: [
      {
        key: 'libs',
        title: 'Libraries',
        skillList: [
          {
            title: 'Bootstrap',
            perc: '100'
          },
          {
            title: 'CSS Modules',
            perc: '80'
          },
          {
            title: 'jQuery',
            perc: '100'
          },
          {
            title: 'ReactJS',
            perc: '95'
          },
          {
            title: 'React Testing Library',
            perc: '80'
          },
          {
            title: 'Semantic Ui',
            perc: '90'
          },
          {
            title: 'Styled Components',
            perc: '100'
          }
        ]
      },
      {
        key: 'frame',
        title: 'Frameworks',
        skillList: [
          {
            title: 'Cypress.io',
            perc: '90'
          },
          {
            title: 'ExpressJS',
            perc: '95'
          },
          {
            title: 'Jest',
            perc: '80',
          },
          {
            title: 'NextJS',
            perc: '50'
          },
          {
            title: 'Tailwind CSS',
            perc: '100'
          }
        ]
      }
    ]
  },

  // Database Systems
  {
    def: false,
    key: 'databases',
    title: 'Databases',
    sections: [{
      key: 'dataBasesec',
      title: 'Databases',
      skillList: [
        {
          title: 'MongoDB',
          perc: '80'
        },
        {
          title: 'MySQL',
          perc: '60'
        },
        {
          title: 'PostgressSql',
          perc: '60',
        }
      ]
    }]
  },

  // Environments
  {
    def: false,
    key: 'otherSkills',
    title: 'Other',
    sections: [
      {
        key: 'enviros',
        title: 'Environments',
        skillList: [
          {
            title: 'NodeJS',
            perc: '95'
          }
        ]
      },
      {
        key: 'operatSyst',
        title: 'Operating Systems',
        skillList: [
          {
            title: 'Linux',
            perc: '60'
          },
          {
            title: 'MacOSX',
            perc: '90'
          },
          {
            title: 'Windows',
            perc: '95'
          }
        ]
      },
      {
        key: 'webPlatforms',
        title: 'Web Platforms',
        skillList: [
          {
            title: 'Shopify',
            perc: '80'
          }
        ]
      }
    ]
  }
]

export default skills
