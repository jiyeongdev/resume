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
      // endedAt: '2024-11',
      descriptions: [
        '1,500여개의 고객사와 40만 명의 유저를 지원하는 고성능 시스템 운영 및 유지보수',
        '권한 관리 시스템 개선을 주도하여 **API 처리 시간을 98% 단축**하고 사용자 경험 향상에 기여',
        '중복/불필요한 권한 체크 로직을 제거하고, 데이터 연관성을 분석하여 필요한 권한 데이터만 키-값 구조로 관리하여 **DB 호출을 20,000회에서 4회로 감소**',
        '**TDD 자동화 도입** - 운영DB snapshot을 활용한 **약 2만개** 의 기존/개선 로직의 결과값과 성능을 자동으로 검증',
        'PHP 기반 레거시 시스템의 Golang 마이그레이션 및 성능 최적화', // (클라우드 스토리지 사용량 API 등)',
        '권한 관리 시스템 전면 재검토 및 문서화, 버그성 이슈 분석 및 해결책 제시',
        '다양한 플랫폼(Mac/Windows 에이전트, Web/Mobile)별 권한 관리 API 신규 개발 및 유지보수',
        //'.eml 확장자 파일의 S3 업로드 기능 신규 개발 및 구현',
        'AWS ECS 기반 컨테이너 배포 시스템 운영 및 CI/CD 파이프라인 관리',
        '시스템 모니터링 및 로그 분석을 통한 안정적인 서비스 제공',

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
        'B2B Saas 서비스 키오스크 백엔드 API 개발',
        'Jenkins 기반 **CI/CD 파이프라인 도입** 및 운영',
        '**대용량 트래픽 처리 경험과 서버 이슈 대응 경험**',
        'Cloud Platform(AWS, GCP) 인프라 구축/운영 경험',
        'Bigquery 활용하여 대용량 로그 시스템 활용 경험',
        'Redash 대시보드 활용하여 유의미한 데이터 통계처리 및 시각화',
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
