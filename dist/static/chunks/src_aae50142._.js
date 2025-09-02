(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/resume/resume.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "contacts": "resume-module__R4NoHW__contacts",
  "controls": "resume-module__R4NoHW__controls",
  "ed_header": "resume-module__R4NoHW__ed_header",
  "ed_item": "resume-module__R4NoHW__ed_item",
  "education": "resume-module__R4NoHW__education",
  "headerWrap": "resume-module__R4NoHW__headerWrap",
  "keywords": "resume-module__R4NoHW__keywords",
  "parsec_wrap": "resume-module__R4NoHW__parsec_wrap",
  "profile": "resume-module__R4NoHW__profile",
  "resume_wrap": "resume-module__R4NoHW__resume_wrap",
  "skills": "resume-module__R4NoHW__skills",
  "skills_wrap": "resume-module__R4NoHW__skills_wrap",
  "workExp": "resume-module__R4NoHW__workExp",
  "work_exp": "resume-module__R4NoHW__work_exp",
  "workplace": "resume-module__R4NoHW__workplace",
  "workplace_header": "resume-module__R4NoHW__workplace_header",
});
}),
"[project]/src/data/education.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Define data for the education section.
 */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const education = [
    {
        dates: 'APR 2019 - JUNE 2019',
        desc: 'The Web Development Bootcamp is a 12 week, 40+ hours/week bootcamp. It covers the most popular and marketable languages and frameworks used in Web Development.',
        location: 'Lighthouse Labs, Toronto',
        program: 'Web Development Bootcamp',
        topics: 'The topics covered are: JavaScript, Node.js, Express, PostgreSQL, MongoDB, React, Ruby on Rails, Automated Testing, and Computer Science Fundamentals.'
    },
    {
        dates: 'June 2010',
        desc: 'Digital Media production based in Graphic Design.',
        location: 'EDMONTON ARTS COLLEGE',
        program: 'DIGITAL MEDIA PRODUCTION PROGRAM',
        topics: 'Topics Covered: Education, Student Instruction, Front End Development (HTML5, CSS3), JavaScript, jQuery, Wordpress, Drupal, Joomla!, Design Interpretation, Career Guidence'
    }
];
const __TURBOPACK__default__export__ = education;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/resume.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Define data for the Work Experience section.
 */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const resume = {
    workExperience: {
        title: 'Work Experience',
        placements: [
            {
                company: 'Open Mind Developments',
                dates: 'Nov 2022 - Dec 2022',
                desc: 'Front-End Development focusing on Customer Interaction with the Shopify platform.',
                keywords: [
                    'Front-End Development (HTML5, CSS3, CSS Grid, Flexbox)',
                    'JavaScript',
                    'jQuery',
                    'Tailwind',
                    'Shopify',
                    'ESLint',
                    'JSX',
                    'Developement Operations',
                    'Gitlab CI/CD'
                ],
                position: 'Front-End Developer'
            },
            {
                company: 'Kepler Communications',
                dates: 'Mar 2021 - Jul 2022',
                desc: 'Front-End developer building interfaces for handling Communication Satellite monitoring and configuration, and configuring continuous integration, deployments and testing for each.',
                keywords: [
                    'Front-End Development (HTML5, CSS3, CSS Grid, Flexbox)',
                    'JavaScript',
                    'jQuery',
                    'Bootstrap',
                    'ReactJS',
                    'Cypress.io',
                    'Jest',
                    'React Testing Library',
                    'ESLint',
                    'JSX',
                    'Developement Operations',
                    'Gitlab CI/CD',
                    'Semantic Ui'
                ],
                position: 'Web Application Developer'
            },
            {
                company: 'Lighthouse Labs',
                dates: 'Aug 2019 - Mar 2021',
                desc: 'Working with the Marketing team to plan and execute the building of Static ReactJs sites for marketing and promotional purposes. Working with the internal staff to maintain and upgrade internal systems in React, Ruby on Rails, etc.',
                keywords: [
                    'Customer Service',
                    'Student Mentorship',
                    'Project Management',
                    'Marketing',
                    'Front-End Development (HTML5, CSS3, CSS Grid, Flexbox)',
                    'JavaScript',
                    'jQuery',
                    'Bootstrap',
                    'ReactJS',
                    'Ruby On Rails',
                    'JSX',
                    'Active Record'
                ],
                position: 'Front-End Developer'
            },
            {
                company: 'FREELANCE WORK',
                dates: 'AUG 2010 - PRESENT',
                desc: 'Managing and completing websites for a variety of clients. Projects are handled from initial contact with the client to the final launch including Concepts, Wireframing, Design, Development, Migration, Content Management, Testing, and Launching. Supplying clients with Hosting and Host maintenance, including Server updates, and Hosting provider interaction when needed.',
                keywords: [
                    'Business Management',
                    'Client Interaction',
                    'Client relations',
                    'Customer service',
                    'Project Management',
                    'Self Employment',
                    'Front-End Development (HTML5, CSS3)',
                    'Wordpress',
                    'PHP',
                    'MySQL',
                    'JavaScript',
                    'jQuery',
                    'Bootstrap',
                    'Photography',
                    'User Guide Creation'
                ],
                position: 'FULL STACK DEVELOPER'
            },
            {
                company: 'FREECODECAMP',
                dates: 'AUG 2017 - APR 2020',
                desc: 'FreeCodeCamp is an online learning resource for Fullstack Development learning. FreeCodeCamp has broken learning Web Development into digestible chunks to allow people to learn how to code in their spare time. As a Global Community Manager, my biggest input into the FCC ecosystem is managing the moderators for the Facebook Groups and other social media.',
                keywords: [
                    'Social Media Management',
                    'Facebook Group moderation',
                    'Community Organizing',
                    'Public speaking'
                ],
                position: 'GLOBAL COMMUNITY MANAGER'
            },
            {
                company: 'MEDIAFACE, TORONTO',
                dates: 'JUNE 2017 - OCT 2017',
                desc: 'Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites, and Wordpress Plugins. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing.',
                keywords: [
                    'Client Research',
                    'Client relations',
                    'Front-End Development (HTML5, CSS3)',
                    'Wordpress',
                    'PHP',
                    'MySQL',
                    'JavaScript',
                    'jQuery',
                    'Bootstrap',
                    'Technical SEO Implementation'
                ],
                position: 'FULLSTACK WEB DEVELOPER'
            },
            {
                company: 'DIGITAL SHIFT MARKETING, TORONTO',
                dates: 'FEB 2016 - OCT 2016',
                desc: 'Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. Management duties included heading projects, as well as writing processes and procedures to be used by the development department and managing the IT needs of the company.',
                keywords: [
                    'Development Team Management Training',
                    'Process writing',
                    'Client Research',
                    'Client relations',
                    'Customer service',
                    'Project Management',
                    'Front End Development (HTML5, CSS3)',
                    'Wordpress',
                    'PHP',
                    'MySQL',
                    'JavaScript',
                    'jQuery',
                    'Bootstrap',
                    'Technical SEO Implementation'
                ],
                position: 'FRONT-END DEVELOPER'
            },
            {
                company: 'VENTUREWEB, TORONTO',
                dates: 'SEPT 2013 – DEC 2014',
                desc: "Working as a web consultant through VentureWeb for Accenture, as a site manager for Accenture's Careers Websites. My tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing.",
                keywords: [
                    'Development Team Management Training',
                    'Process writing',
                    'Client Research',
                    'Client relations',
                    'Customer service Project Management',
                    'Front-End Development (HTML5, CSS3)',
                    'Wordpress',
                    'PHP',
                    'MySQL',
                    'Javascript',
                    'jQuery',
                    'Bootstrap',
                    'Technical SEO Implementation'
                ],
                position: 'WEB CONSULTANT, FRONT END DEVELOPER'
            },
            {
                company: 'NORTHLANDS, EDMONTON',
                dates: 'SEPT 2012 – APR 2013',
                desc: 'Primary responsibility for the position was the updating and maintenance of the 13 web properties for Northlands. Acted as the primary contact for the hosting companies, and IT service providers that Northlands works with. This included managing, updating and maintaining the web servers, as well as working with the hosting companies to coordinate hardware maintenance and downtime. Additionally, responsible for internal system creation for managing new content to be added to the web properties.',
                keywords: [
                    'Front-End Development (HTML5, CSS3)',
                    'JavaScript',
                    'jQuery',
                    'PHP',
                    'Wordpress',
                    'Drupal',
                    'Joomla!',
                    'User guide creation',
                    'Content Management',
                    'Web Platform Maintenance',
                    'Server Maintenance',
                    'Enterprise Level Company'
                ],
                position: 'SR. FRONT END DEVELOPER'
            }
        ]
    }
};
const __TURBOPACK__default__export__ = resume;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/skills.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Define data for the skills section
 */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const skills = [
    // Languages
    {
        def: true,
        key: 'langWrap',
        title: 'Languages',
        sections: [
            {
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
                    }
                ]
            }
        ]
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
                        perc: '80'
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
        sections: [
            {
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
                        perc: '60'
                    }
                ]
            }
        ]
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
];
const __TURBOPACK__default__export__ = skills;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/resume/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* NextJS Imports */ __turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* End NextJS Imports */ /* Style Imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/resume/resume.module.css [app-client] (css module)");
/* End Style Imports */ /* Data Imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/education.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/resume.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/skills.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/* End Data Imports */ function SectionTitle(param) {
    let { len, title } = param;
    if (len > 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/resume/page.js",
            lineNumber: 17,
            columnNumber: 12
        }, this);
    }
}
_c = SectionTitle;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resume_wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "To save as pdf:   1. Right click, click 'Print'   2. Change Destination to 'Save as PDF'   3. Press 'Save'"
                }, void 0, false, {
                    fileName: "[project]/src/app/resume/page.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contacts,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Karl Chvojka"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Front End Web Developer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Portfolio:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://karlchvojka.github.io/karl-chvojka-portfolio",
                                children: "https://karlchvojka.github.io/karl-chvojka-portfolio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resume/page.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Github:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/karlchvojka",
                                children: "https://github.com/karlchvojka"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resume/page.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Linkedin:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/karlchvojka/",
                                children: "https://www.linkedin.com/in/karlchvojka"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resume/page.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Email:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://mailto:karl.chvojka@gmail.com",
                                children: "karl.chvojka@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resume/page.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profile,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "I am a Fullstack Web Developer with over 15 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, ReactJS, NextJS, HTML5, CSS3) with knowledge and understanding of backend technologies (Node.js, Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, MySQL, etc)."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "I also have experience in Project Management, Project budgeting, SEO Techniques, Online and Traditional Advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work_exp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Work Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].workExperience.placements.map((place, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].workplace,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: place.company
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].workplace_header,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: place.position
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: place.dates
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keywords,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Noteable Keywords: "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        place.keywords.map((keyword, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    keyword,
                                                    ", "
                                                ]
                                            }, keyword + index, true, {
                                                fileName: "[project]/src/app/resume/page.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: place.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, place.company + index, true, {
                            fileName: "[project]/src/app/resume/page.js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Notable Skills"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills_wrap,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((par_sec)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parsec_wrap,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: par_sec.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resume/page.js",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    par_sec.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section_wrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                    len: par_sec.sections.length,
                                                    title: section.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/resume/page.js",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: section.skillList.map((skill, index, param)=>{
                                                        let { length } = param;
                                                        if (length - 1 === index) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: skill.title
                                                            }, skill.title + index, false, {
                                                                fileName: "[project]/src/app/resume/page.js",
                                                                lineNumber: 125,
                                                                columnNumber: 29
                                                            }, this);
                                                        } else {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    skill.title,
                                                                    ",",
                                                                    " "
                                                                ]
                                                            }, skill.title + index, true, {
                                                                fileName: "[project]/src/app/resume/page.js",
                                                                lineNumber: 129,
                                                                columnNumber: 29
                                                            }, this);
                                                        }
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/resume/page.js",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, section.key, true, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, par_sec.key, true, {
                                fileName: "[project]/src/app/resume/page.js",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].education,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resume/page.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((school, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ed_item,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: school.location
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ed_header,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: school.program
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: school.dates
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resume/page.js",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: school.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: school.topics
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resume/page.js",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, school.location + index, true, {
                            fileName: "[project]/src/app/resume/page.js",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resume/page.js",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resume/page.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionTitle");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_aae50142._.js.map