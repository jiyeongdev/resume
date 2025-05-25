import { IProject } from '../component/project/IProject';
import { COMPANY } from './conf';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '권한체크 로직 전면 개선',
      startedAt: '2024-06',
      endedAt: '2024-11',
      where: COMPANY.DIRECT_CLOUD_LAB_ENG,
      descriptions: [
        {
          content: '기존의 권한체크 로직을 개선하여 더 안정적인 서비스 제공',
          contribution: '100% 기여',
        },
        {
          content: '권한 체크 로직 개선 - 처리 시간 98% 단축 (평균 1분~ 최대 5분 대 → 1초 대)',
        },
        {
          content:
            '캐시 도입을 통한 DB 호출 최적화 - 최대 20,000회 → 최대 4회로 99.98% 감소 및 서버 리소스 사용량 75% 감소',
        },
        {
          content:
            'DB 스냅샷 기반 테스트 자동화 구축 - 기존/개선 로직 간 권한 체크 결과값 검증 및 성능 측정 자동화 - 테스트 몇개했다 추가하기!!!',
        },
      ],
    },

    {
      title: '신규 이용권&좌석배치도 시스템 개선',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content:
            '동접자 수 1,000 ~ 3,000명과 회원 수 180만명의 대용량 데이터를 처리하기 위한 스터디카페 키오스크 서비스 개선 프로젝트',
          descriptions: [
            {
              content: '이용권과 좌석배치도 시스템 개선 담당',
              contribution: 'frontend 100% ,backend 100% 기여',
            },
            {
              content:
                'WebSocket 기반 10초마다 좌석배치도 업데이트 로직을 Redis Pub/Sub 아키텍처로 전환하여 서버 부하 감소 및 실시간성 개선',
            },
            {
              content:
                '좌석배치도/이용권 약 10만개의 대용량 데이터를 DB 신규 설계하여 조회시간 10초대 → 3초대 개선 ',
            },
            {
              content: 'Electron, React, PHP API 하이브리드 애플리케이션 아키텍처 설계 및 구현',
            },
          ],
        },
      ],
    },
    {
      title: '실시간 광고 송출 개선',
      startedAt: '2023-05',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: '키오스크 실시간 광고 송출 시스템 고도화 프로젝트',
          descriptions: [
            {
              content: '광고 송출 자동화 도입 담당',
              contribution: '100% 기여',
            },
            {
              content:
                '타 부서에서 제공하는 엑셀 데이터를 수동으로 입력하는 방식에서 Google AppScript 도입으로 송출데이터 자동화 시스템 개발 및 팀 내 공유',
            },
            {
              content: 'BigQuery 기반의 실시간 로그 수집 및 분석 시스템 구축',
            },
            {
              content: 'Redash Query를 활용한 데이터 시각화 및 분석 대시보드 개발',
            },
            {
              content: 'AWS S3 스크립트, Redis 사용',
            },
          ],
        },
      ],
    },
    {
      title: '제휴코드 프로젝트 개발',
      startedAt: '2023-01',
      endedAt: '2023-05',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content:
            'Shorten URL 페이지로 SW수강생들이 신청을 하면 제휴코드를 발급해주고, 스터디룸을 이용할 수 있는 신규 프로젝트',
          descriptions: [
            {
              content: '아키택쳐 설계 및 구축, 백엔드 시스템 전반 개발 담당',
              contribution: '100% 기여',
            },
            {
              content: 'Nginx Lua, Redis를 활용하여 Shorten URL 생성 로직 구축/개발',
            },
            {
              content: '제휴회사 회원 시스템 개발',
            },
            {
              content: '제휴코드 발급 및 검증 시스템 개발',
            },
          ],
        },
      ],
    },
    {
      title: '키오스크 운영서비스 성능 최적화',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: '전국 1,300여개 매장의 키오스크 서비스 성능 개선 프로젝트',
          descriptions: [
            {
              content: '성능 개선 개발 및 유지보수 담당',
            },
            {
              content: 'Nginx 웹서버의 이미지 캐싱 전략 수립 및 구현으로 페이지 로딩 속도 40% 개선',
            },
            {
              content: 'DB 쿼리 최적화 및 인덱스 전략 수립으로 응답 시간 60% 단축',
            },
            {
              content: '스터디카페 입출입 지문인식기 API 로직 개선',
            },
            {
              content:
                '12만개의 좌석 별 이용시간 통계표를 개발하여 어떤 좌석이 인기가 많고 적은지를 알 수 있는 기반을 제공 -12만개 좌석 데이터 기반의 실시간 이용률 분석 시스템 구축',
            },
          ],
        },
      ],
    },
    {
      title: '인프라 아키텍처 설계 및 구축',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: 'WAS 구조의 인프라 구축',
        },
        {
          content: 'OpenResty와 Lua를 활용한 고성능 웹서버 구축 및 Redis 연동',
        },
        {
          content: '프록시 서버 구축',
        },
        {
          content: '외부 업체의 다이나믹 QR 결제 API gateway 구축',
        },
        {
          content: 'Jenkins 기반의 CI/CD 파이프라인 구축 및 배포 자동화 script 작성',
        },
      ],
    },
    {
      title: 'Jenkins 배포시스템 구축',
      startedAt: '2022-06',
      endedAt: '2022-08',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: '신규 서비스의 배포 자동화 시스템 구축',
          contribution: '100% 기여',
          descriptions: [
            {
              content: '배포 자동화 시스템 구축 및 배포 담당',
            },
            {
              content: 'Certbot SSL 인증서 발급 및 관리',
            },
            {
              content:
                'Jenkins로 빌드 → scp를 통해 서버로 build파일 전송 → 배포 스크립트 실행 → 배포 완료',
            },
            {
              content: '배포 rollback을 포함한 배포 스크립트 작성',
            },
          ],
        },
      ],
    },
    {
      title: '데이터 분석 및 유의미한 데이터 추출(Query)',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: '타 부서 요청 데이터 및 개발에 필요한 통계 데이터 추출',
          contribution: '100% 기여',
          descriptions: [
            {
              content: '월별 지점별 승인결제내역 등',
            },
            {
              content: '월별 누적 지점 수 등',
            },
            {
              content: '제휴 회사별 일별 광고 카운팅 누적 수 등',
            },
            {
              content: '스터디룸 일별/월별/성별 등 결제내역/결제취소 추이 등',
            },
          ],
        },
      ],
    },
    {
      title: 'M&A 키오스크 서비스 운영 및 유지 보수',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content:
            '전국 150여개의 매장에서 운영 중인 M&A 스터디카페 키오스크 서비스와 관리자 페이지',
          contribution: '100% 기여',
          descriptions: [
            {
              content: 'DNS 이전 작업 경험',
            },
            {
              content: 'agent방식의 문자 DB Table 성능 개선을 위한 shell & cronjob query 작업',
            },
            {
              content: '유지보수',
            },
            {
              content: 'Apache, Tomcat, Java 기반 홈페이지',
            },
          ],
        },
      ],
    },
    {
      title: '생활 알람 서비스',
      where: '4명 팀원 중 팀장 (Android/IOS/WEB)',
      startedAt: '2020-10',
      endedAt: '2021-10',
      descriptions: [
        {
          content:
            '파편화된 정보를 한눈에 모아 TTS 알람 , 푸시알림 , 위젯으로 정보를 제공하는 알람 서비스 ',
        },
        {
          content: '아이디어 및 기획 , 앱 배포까지 진행한 경험',
          contribution: '인프라 설계 및 구축 , 백엔드 개발 80% 기여',
        },
        {
          content:
            '공공 데이터 API로 실시간 버스 위치 정보, 실시간 날씨 정보 , 실시간 코로나 정보를 가져와 전처리를 거쳐 데이터를 제공',
        },
        {
          content: 'apache 웹서버 기반의 AWS 클라우드 서버 구축 및 백엔드 개발 담당',
        },
        {
          content: 'load balance , auto scaling 구축하여 트래픽 분산 및 서버 자동 확장',
        },
        {
          content: 'Android 구글 스토어 , IOS 앱스토어 , 다운로드 수 100+',
        },
        {
          content:
            'skill : Node.js, PHP, MariaDB, Firebase Realtime Database, Nginx, 공공데이터 포털 API',
        },
      ],
    },
  ],
};

export default project;
