export const COMPANY = {
  DIRECT_CLOUD_LAB: 'DCL',
  ING_STORY: 'ING',
  DIRECT_CLOUD_LAB_ENG:'DCL', //'DirectCloudLab',
  ING_STORY_ENG: 'ING', //'IngStory',
} as const;

export type CompanyType = typeof COMPANY[keyof typeof COMPANY]; 

export const EDUCATION = {
    UNIVERSITY: '-',
} as const;

export type EducationType = typeof EDUCATION[keyof typeof EDUCATION];