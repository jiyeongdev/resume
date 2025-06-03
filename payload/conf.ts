export const COMPANY = {
  DIRECT_CLOUD_LAB: '다이렉트클라우드랩',
  ING_STORY: '아이엔지스토리',
  DIRECT_CLOUD_LAB_ENG: 'DirectCloudLab', // 'DirectCloudLab',
  ING_STORY_ENG: 'IngStory', // 'IngStory',
} as const;

export type CompanyType = typeof COMPANY[keyof typeof COMPANY];

export const EDUCATION = {
  UNIVERSITY: '가톨릭대학교',
} as const;

export type EducationType = typeof EDUCATION[keyof typeof EDUCATION];
