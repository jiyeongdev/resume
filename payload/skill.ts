import { ISkill } from '../component/skill/ISkill';

const backendDevelopment: ISkill.Skill = {
  category: 'Backend Development',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Golang',
    },
    {
      title: 'Python',
    },

    {
      title: 'PHP',
    },
    {
      title: 'Node.js',
    },
  ],
};

const Frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Echo',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'Codeigniter',
    },
    {
      title: 'Laravel',
    },
  ],
};

const frontendDevelopment: ISkill.Skill = {
  category: 'Frontend Development',
  items: [
    {
      title: 'HTML5',
    },
    {
      title: 'CSS3(SCSS)',
    },
    {
      title: 'JavaScript(ES6)',
    },
    {
      title: 'Sass',
    },
  ],
};

const infrastructureCloud: ISkill.Skill = {
  category: 'Infrastructure & Cloud',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS S3',
    },
    {
      title: 'AWS Route53',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Lua(Nginx)',
    },
    {
      title: 'Openresty',
    },
    {
      title: 'Apache',
    },
  ],
};

const databaseCaching: ISkill.Skill = {
  category: 'Database & Caching',
  items: [
    {
      title: 'RDBMS',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'AuroraDB',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'Redis',
    },
    {
      title: 'MongoDB',
    },
  ],
};

const dataAnalysis: ISkill.Skill = {
  category: 'Data Analysis',
  items: [
    {
      title: 'BigQuery',
    },
    {
      title: 'Redash Dashboard',
    },
  ],
};

const devOpsMonitoring: ISkill.Skill = {
  category: 'DevOps & Monitoring',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Linux shell',
    },
    {
      title: 'Datadog',
    },
    {
      title: 'OpenSearch',
    },
  ],
};

const messageQueue: ISkill.Skill = {
  category: 'Message Queue & Event Streaming',
  items: [
    {
      title: 'Kafka',
    },
  ],
};

const toolsCollaboration: ISkill.Skill = {
  category: 'Tools & Collaboration',
  items: [
    {
      title: 'WebStorm',
    },
    {
      title: 'PhpStorm',
    },
    {
      title: 'DataGrip',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
  ],
};

const communityLearning: ISkill.Skill = {
  category: 'Community & Learning',
  items: [
    {
      title: 'DevOps',
    },
    {
      title: 'Medium',
    },
    {
      title: 'Geeknews',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    backendDevelopment,
    Frameworks,
    frontendDevelopment,
    infrastructureCloud,
    databaseCaching,
    dataAnalysis,
    devOpsMonitoring,
    messageQueue,
    toolsCollaboration,
    communityLearning,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
