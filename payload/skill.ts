import { ISkill } from '../component/skill/ISkill';

const backendDevelopment: ISkill.Skill = {
  category: 'Backend Languages',
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
      title: 'javascript',
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Echo (Go)',
    },
    {
      title: 'Python',
    },
    {
      title: 'Node.js',
    },
    {
      title: 'Express.js',
    },

    {
      title: 'CodeIgniter',
    },
    {
      title: 'Laravel',
    },
  ],
};

const frontendDevelopment: ISkill.Skill = {
  category: 'Frontend Languages',
  items: [
    {
      title: 'HTML5',
    },
    {
      title: 'JavaScript (ES6)',
    },
    {
      title: 'CSS3 (SCSS)',
    },
  ],
};

const infrastructureCloud: ISkill.Skill = {
  category: 'Infrastructure & Cloud',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Docker',
    },
    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS S3',
    },
    {
      title: 'AWS ECS',
    },
    {
      title: 'AWS ECR',
    },
    {
      title: 'AWS SQS',
    },
    {
      title: 'AWS SNS',
    },

    {
      title: 'AWS OpenSearch + Kibana',
    },
    {
      title: 'AWS Route53',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'OpenResty (Nginx + Lua)',
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
      title: 'Redash',
    },
    {
      title: 'Jupyter Notebook',
    },
  ],
};

const devOpsMonitoring: ISkill.Skill = {
  category: 'Monitoring',
  items: [
    {
      title: 'DataDog',
    },
    {
      title: 'WhaTap',
    },
  ],
};

const ciCdTools: ISkill.Skill = {
  category: 'CI/CD Tools',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'GitHub Actions ',
    },
  ],
};

const toolsCollaboration: ISkill.Skill = {
  category: 'Tools & Collaboration',
  items: [
    {
      title: 'JetBrains IDEs',
    },
    {
      title: 'Medis',
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
  ],
};

const devOps: ISkill.Skill = {
  category: 'DevOps',
  items: [
    { title: 'Linux Shell' },
    { title: 'Terraform (AWS IaC 구성)' },
    { title: 'Bash Scripting (배포 자동화)' },
    { title: 'Crontab' },
  ],
};

const communityLearning: ISkill.Skill = {
  category: 'Community & Learning',
  items: [
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
    frameworks,
    frontendDevelopment,
    infrastructureCloud,
    databaseCaching,
    devOps,
    dataAnalysis,
    devOpsMonitoring,
    ciCdTools,
    toolsCollaboration,
    communityLearning,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
