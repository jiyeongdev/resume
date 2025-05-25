import { IEducation } from '../component/education/IEducation';
import { EDUCATION } from './conf';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: EDUCATION.UNIVERSITY,
      subTitle: '컴퓨정보공학부 졸업',
      startedAt: '2016-03',
      endedAt: '2023-02',
    },
  ],
};

export default education;
