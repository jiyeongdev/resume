import { IExperience } from '../component/experience/IExperience';
import { COMPANY } from './conf';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: COMPANY.DIRECT_CLOUD_LAB,
      position: 'Backend Developer',
      startedAt: '2024-02',
      endedAt: '2024-11',
      descriptions: [
        '1,500여개 고객사, 40만 유저 지원 고성능 시스템 운영',
        '권한 관리 시스템 개선으로 **API 처리 시간 98% 단축** 및 **DB 호출 20,000회 → 4회 감소**',
        'PHP 레거시 시스템의 Golang **마이그레이션 및 성능 최적화**',
        '다양한 플랫폼(Mac/Windows 에이전트, Web/Mobile)별 권한 관리 **API 개발 및 유지보수**',
        'AWS ECS 기반 컨테이너 배포 시스템 및 CI/CD 파이프라인 관리',
        '**TDD 회귀 테스트 자동화 구축**',
        // '**TDD 자동화 도입** - 운영 DB 2만 건 데이터로 기존/개선 로직 결과 비교 검증하는 테스트 자동화 구축',

        // '.eml 확장자 파일의 S3 업로드 기능 신규 개발 및 구현',

        // 이를 정확히 말하면,  기존 권한체크 로직은 /depth1/depth2/depth3/ 파일경로의 폴더 마다의 권한여부를 체크를 하는 구조여서 중복되는 권한체크 로직이나,
        // 불필요한 권한체크 로직들이 있었는데, 기존대로 권한체크는 하나, 데이터 관련성을 파악하여 필요한 데이터만 호출하여
        // 그 데이터를 글로벌 변수로 키-벨류화 하여 꺼내쓰면서
        // 권한체크를 하도록 개선하였다
      ],
      skillKeywords: [
        'Golang',
        'echo',
        'Docker',
        'AWS SQS',
        'AWS ECS',
        'AWS ECR',
        'AWS S3',
        'AuroraDB',
        'Redis',
        'AWS CloudWatch',
        'OpenSearch',
        'Kibana',
        'Github Actions',
      ],
    },
    {
      title: COMPANY.ING_STORY,
      position: 'Backend Developer',
      startedAt: '2022-01',
      endedAt: '2023-07',
      descriptions: [
        'B2B SaaS 키오스크 백엔드 API 개발',
        'Jenkins 기반 **CI/CD 파이프라인 도입** 및 운영',
        '**대용량 트래픽 처리 및 서버 이슈 대응**',
        'AWS, GCP 클라우드 인프라 구축/운영',
        'BigQuery 기반 대용량 로그 시스템 구축',
        'WhaTap 모니터링 및 Redash 대시보드 활용한 데이터 시각화',
      ],
      skillKeywords: [
        'PHP',
        'Codeigniter',
        'AuroraDB',
        'Redis',
        'Jenkins',
        'WhaTap',
        'Bigquery',
        'Redash',
      ],
    },
  ],
};

export default experience;
