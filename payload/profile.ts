import { faEnvelope, faPen, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';
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
      title: 'jiyeong.dev@gmail.com',
      link: 'mailto:jiyeong.dev@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/jiyeongdev',
      icon: faGithub,
    },
    {
      link: 'https://jiyeongs-workspace.notion.site/209d4268cb5580a19820f76aa0f8a497',
      icon: faFileAlt,
    },
    {
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
