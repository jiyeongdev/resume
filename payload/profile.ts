import {
  faEnvelope,
  faPen,
  faPhone,
  faFileAlt,
  faPersonBooth,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '배지영',
  },
  contact: [
    {
      title: '1996.05.02 (만 29세)',
      icon: faPersonBooth,
      badge: true,
    },
    {
      title: 'jiyeong.dev@gmail.com',
      link: 'mailto:jiyeong.dev@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-5332-2273',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/jiyeongdev',
      icon: faGithub,
    },
    {
      title: 'Notion 포트폴리오',
      link: 'https://jiyeongs-workspace.notion.site/209d4268cb5580a19820f76aa0f8a497',
      icon: faFileAlt,
    },
    {
      title: '기술 Blog',
      link: 'https://velog.io/@jiyeongdev/posts',
      icon: faPen,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
