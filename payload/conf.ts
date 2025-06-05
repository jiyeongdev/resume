export const COMPANY = {
  DIRECT_CLOUD_LAB: 'DCL',
  ING_STORY: '아이엔지',
  DIRECT_CLOUD_LAB_ENG: 'DCL', // 'DirectCloudLab',
  ING_STORY_ENG: '아이엔지', // 'IngStory',
} as const;

export type CompanyType = typeof COMPANY[keyof typeof COMPANY];

export const EDUCATION = {
  UNIVERSITY: '가대',
} as const;

export type EducationType = typeof EDUCATION[keyof typeof EDUCATION];
