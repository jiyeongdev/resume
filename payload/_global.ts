import favicon from '../asset/favicon.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = '배지영 이력서';
const description = '3년차 백엔드 개발자';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,

      type: 'profile',
      profile: {
        firstName: 'Jiyeong',
        lastName: 'Bae',
        username: 'jiyeong',
        gender: 'female',
      },
    },
  },
};
