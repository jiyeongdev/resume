import { IProject } from '../component/project/IProject';
import { COMPANY } from './conf';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '실시간 대기열 기반 콘서트 예매 시스템',
      startedAt: '2025-06',
      endedAt: '2025-07',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: '대용량 트래픽 환경에서 공정한 예매가 가능한 실시간 콘서트 예매 시스템',
          contribution: '백엔드/인프라 100% 기여',
          descriptions: [
            {
              content: '[동시성 제어 및 실시간 처리]',
              descriptions: [
                {
                  content:
                    'Redis MULTI/EXEC 트랜잭션 + Spring @Transactional 조합으로 좌석 점유/해제/예매 확정의 원자적 처리 구현',
                },
                { content: 'Redis ZSet + RabbitMQ로 대기열 순차 입장 처리 및 공정성 보장' },
                {
                  content:
                    'WebSocket(STOMP) + Redis Pub/Sub으로 실시간 좌석 상태 브로드캐스트 및 동기화 구현',
                },
              ],
            },
            {
              content: '[데이터 정합성 및 자동화]',
              descriptions: [
                {
                  content:
                    'Redis Key Events 리스너(notify-keyspace-events: Ex)로 TTL 만료 시 자동 처리 및 데이터 정합성 보장',
                },
                {
                  content:
                    'Spring @Scheduled(30초마다)로 큐 입장 처리 스케줄러 구현, 예매 오픈 자동화',
                },
                {
                  content:
                    'Redis TTL + DB 동기화로 상태별 다른 TTL 설정(대기열 10분, 좌석 점유 5분)',
                },
              ],
            },
            {
              content: '[운영 자동화 및 검증]',
              descriptions: [
                {
                  content:
                    'Docker Compose로 MySQL, Redis, RabbitMQ, Spring Boot 등 모든 서비스 일괄 관리 및 환경별 배포 자동화',
                },
                {
                  content:
                    'Swagger(OpenAPI 3) 기반 API 문서 자동화 및 WebSocket 테스트 페이지 제공',
                },
                {
                  content:
                    '실제 동시성 테스트 스크립트로 수천 명 동시 좌석 점유 시나리오에서 중복 예약/충돌 0건 달성',
                },
              ],
            },
          ],
        },
      ],
    },

    // {
    //   title: '실시간 대기열 기반 콘서트 예매 시스템',
    //   startedAt: '2025-06',
    //   endedAt: '2025-07',
    //   where: '개인 프로젝트',
    //   descriptions: [
    //     {
    //       content: '대용량 트래픽 환경에서 공정하고 실시간성 높은 콘서트 예매를 지원하는 백엔드 시스템을 설계 및 구현',
    //       contribution: '백엔드 100% 기여',
    //       descriptions: [
    //         {
    //           content: '[대기열/좌석 실시간 처리 아키텍처]',
    //           descriptions: [
    //             { content: 'Redis ZSet과 RabbitMQ를 활용한 대기열 시스템으로 수천~수만 동시 접속자도 공정하게 순번 관리' },
    //             { content: 'WebSocket + Redis Pub/Sub으로 좌석 점유/해제, 상태 동기화 등 실시간 브로드캐스트 구현' },
    //             { content: '좌석 등급, 좌표 기반 좌석 관리와 대기열 상태별(Waiting/Ready/Entered) 예매 흐름 설계' },
    //             { content: 'JWT 기반 사용자 인증 및 권한 분리, 관리자/사용자 API 접근 제어' }
    //           ]
    //         },
    //         {
    //           content: '[대용량 트래픽 대응 및 운영 자동화]',
    //           descriptions: [
    //             { content: 'Docker Compose로 MySQL, Redis, RabbitMQ, Spring Boot 등 모든 서비스 일괄 관리' },
    //             { content: '대기열 입장, 상태 조회, 예매 토큰 발급 등 주요 API의 트랜잭션/동시성 제어 최적화' },
    //             { content: 'Swagger(OpenAPI 3) 기반 API 문서 자동화 및 WebSocket 테스트 페이지 제공' }
    //           ]
    //         },
    //         {
    //           content: '[주요 성과]',
    //           descriptions: [
    //             { content: '실제 대기열/좌석 동시성 테스트 스크립트로 수천 명 동시 입장, 좌석 점유 충돌 방지 검증' },
    //             { content: '실시간 좌석 상태, 대기열 순번, 예매 가능 여부 등 사용자 경험 극대화' }
    //           ]
    //         }
    //       ]
    //     },
    //   ],
    // },
    {
      title: 'AI 이미지 기반 냉장고 재료 관리 및 레시피 공유 서비스',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '개인 프로젝트',
      notionLink: 'https://jiyeongs-workspace.notion.site/AI-209d4268cb5581208e69dd470172bf13',
      descriptions: [
        {
          content: '냉장고 재료 관리 및 레시피 공유 서비스',
          // href: 'https://www.fridgepal.life',
          contribution: '백엔드/인프라 100% 기여',
          descriptions: [
            {
              content: '[백엔드 개발]',
              descriptions: [
                {
                  content: 'Spring Boot 3.2.3, Java 21 기반 RESTful API 서버 설계 및 구현',
                },
                {
                  content:
                    'Spring Security + OAuth2를 활용한 구글 소셜 로그인 및 JWT 기반 인증 시스템 구축',
                },
                {
                  content:
                    '계층형 테이블 구조(대/중/소분류)를 활용한 식재료 카테고리 모델링 및 JPA/Hibernate로 구현',
                },
                {
                  content: 'QueryDSL 도입으로 JPA보다 유연하게 동적 쿼리 반영',
                },
              ],
            },
            {
              content: '[AI 이미지 처리]',
              descriptions: [
                {
                  content: 'Stable Diffusion v1.5 모델을 활용한 AI 이미지 생성 서버 구축',
                },
                {
                  content:
                    'Groq API의 Llama 3.3 70B 모델로 한→영 번역 최적화 및 프롬프트 엔지니어링',
                },
                {
                  content:
                    '14만건 식재료 데이터를 Pandas, NumPy로 전처리하여 1만건의 정제된 데이터셋 생성',
                },
                {
                  content:
                    'OpenCV로 이미지 배경을 흰색으로 변환하고, Pillow로 AI 생성 이미지를 중앙 정렬하여 일관된 이미지 품질 확보',
                },
                {
                  content:
                    'AI 이미지 생성 실패 시 검정 화면 감지하여 자동으로 재요청하는 품질 검증 시스템 구현',
                },
              ],
            },
            {
              content: '[인프라 설계 및 운영]',
              descriptions: [
                {
                  content:
                    'Terraform을 활용한 서버 관리 자동화 - ECS 스케일링 스케줄러, S3 접근 모니터링, CloudTrail 실시간 추적 구현',
                },
                {
                  content: 'ECS 롤링 배포시스템 구축 및 GitHub Actions CI/CD 파이프라인 연동',
                },
                // {
                //   content: 'HTTPS(SSL 인증서)를 적용한 보안 통신 환경 구성',
                // },
                // {
                //   content: 'API 서버 인프라를 E2E로 직접 설계·구축 및 운영',
                // },
                {
                  content: '🔗 서비스 전체 구조도',
                  href:
                    'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/fridgePal_Diagram.png',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: '파일/폴더의 권한체크 로직 전면 개선',
      contribution: '100% 기여',
      startedAt: '2024-06',
      endedAt: '2024-11',
      where: COMPANY.DIRECT_CLOUD_LAB_ENG,
      notionLink: 'https://jiyeongs-workspace.notion.site/209d4268cb5581eead1dcf118038f7d2',
      descriptions: [
        {
          content: '성과',
          descriptions: [
            { content: 'DB 호출 횟수 최대 2만 회 → 4회(99.98% 감소)' },
            { content: '응답 시간 평균 1분~최대 5분 → 1초 대(98% 단축)' },
            { content: '서버 리소스 사용량 75% 절감' },
            { content: 'TDD 기반 자동화로 2만건 데이터 검증 및 성능 측정' },
          ],
        },
        {
          content: '문제 원인: ',
          descriptions: [
            { content: '① 각 디렉토리/파일 권한을 순차적으로 확인하는 구조' },
            { content: '② 동일 경로에 대한 중복 권한 조회' },
            { content: '③ 반복적인 DB 접근으로 인한 전체 응답 속도 저하' },
          ],
        },
        {
          content: '개선 방안: ',
          descriptions: [
            {
              content:
                '① 권한 데이터 구조 간 연관성 분석을 통해 실질적 권한 체크가 필요한 경로만 선별',
            },
            { content: '② 권한 데이터를 사전 조회해 글로벌 Key-Value 캐시로 보관' },
            { content: '③ 이후 권한 확인 시 캐시 활용으로 DB 호출 최소화' },
            {
              content:
                '④ Testify를 활용한 TDD 자동화 테스트로 기존/개선 로직의 결과값 및 성능을 자동으로 검증',
            },
          ],
        },
        {
          content: '🔗 권한 체크 성능 개선 일지: 2만 번의 DB 호출을 4번으로 줄이기까지',
          href: 'https://jiyeongs-workspace.notion.site/209d4268cb5581eead1dcf118038f7d2',
        },
        // {
        //   content: '최적화 전후 시퀀스 다이어그램',
        //   href: 'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/DCL_authority.png',
        // },
      ],
    },

    {
      title: '180만 회원 대용량 SaaS 좌석·이용권 관리 시스템 E2E 구축',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      notionLink: 'https://jiyeongs-workspace.notion.site/209d4268cb558130a00de3b67e7c66c5',
      descriptions: [
        {
          content: '이용권과 좌석배치도 SaaS 구조 설계 및 개선 담당',
          contribution: 'frontend/backend/인프라 100% 기여',
        },
        {
          content:
            '10만개 대용량 데이터의 정규화 , 계층형 테이블 구조 설계로 API 실행 속도 10초 → 3초 개선',
        },
        {
          content:
            'WebSocket 폴링 방식의 서버 부하 문제를 Redis Pub/Sub 이벤트 기반 아키텍처로 전환하여 실시간성 개선',
        },
        {
          content: '🔗 실시간 좌석상태 동기화 구성도',
          href:
            'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/ing_redis-pub-sub.png',
        },
      ],
    },
    {
      title: '키오스크 실시간 광고 송출 시스템 고도화',
      startedAt: '2023-05',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      notionLink: 'https://jiyeongs-workspace.notion.site/209d4268cb5581f99154ffed33055a6b',
      descriptions: [
        {
          content: 'Google Apps Script를 활용한 Excel 송출 데이터 자동화 적용',
        },
        {
          content: 'BigQuery 기반의 실시간 로그 수집 및 분석 시스템 구축',
        },
        {
          content: 'Redash Query를 활용하여 데이터 시각화하고 타부서와 공유',
        },
        {
          content: '🔗 광고 송출 자동화 구조도',
          href:
            'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/ing_advertise.png',
        },
      ],
    },
    {
      title: 'B2B 제휴코드 관리 시스템 신규 개발',
      startedAt: '2023-01',
      endedAt: '2023-05',
      where: COMPANY.ING_STORY_ENG,
      notionLink: 'https://jiyeongs-workspace.notion.site/URL-209d4268cb55813ba6dfd65bb4af6ea5',
      descriptions: [
        {
          content:
            'Shorten URL 페이지로 SW수강생들이 신청을 하면 제휴코드를 발급해주고, 스터디룸을 이용할 수 있는 신규 프로젝트',
        },
        {
          content: '제휴코드 발급 및 중복 검증',
          descriptions: [
            {
              content: '제휴회사 회원 시스템 개발',
            },
            {
              content:
                '마이크로초 기반 랜덤 제휴코드 생성 및 Redis-DB 배치 동기화로 중복 방지 시스템 구축',
            },
          ],
        },
        {
          content: 'Shorten URL 생성',
          descriptions: [
            {
              content: 'Redis String을 활용한 단축 URL과 원본 URL 매핑 로직 구현',
            },
            {
              content: '회사별 도메인 링크 노출 요구사항을 위한 reverse proxy 아키텍처->',
              descriptions: [
                {
                  content: 'Nginx Lua에서 proxy_pass를 통한 리다이렉션 구현',
                },
              ],
            },
            {
              content: '🔗 단축URL 시스템 구성도',
              href:
                'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/ing_shortenURL.png',
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
      title: '고성능 웹 인프라 아키텍처 설계 및 구축',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: 'WAS 구조의 인프라 구축 및 운영',
          descriptions: [
            {
              content: 'OpenResty와 Lua를 활용한 고성능 웹서버 구축 및 Redis 연동',
            },
            {
              content: 'Proxy Server 및 외부 업체의 다이나믹 QR 결제 API gateway 구축',
            },
          ],
        },
      ],
    },
    {
      title: '사내 CI/CD 파이프라인 도입',
      startedAt: '2022-06',
      endedAt: '2022-08',
      where: COMPANY.ING_STORY_ENG,
      notionLink: 'https://jiyeongs-workspace.notion.site/CI-CD-209d4268cb5581cca52cd5f351e70f0f',
      descriptions: [
        {
          content: 'Jenkins Pipeline을 활용한 빌드, 테스트, 배포 파이프라인 구축',
        },
        {
          content: 'Git Webhook 연동으로 자동 빌드 및 배포 트리거 구현',
        },
        {
          content: 'SCP를 통한 빌드파일 전송 및 Symbolic Link를 활용한 무중단 배포 구현',
        },
        {
          content: '롤백 스크립트 작성 및 배포 이력 관리',
        },
        {
          content: '🔗 CI/CD 구성도',
          href:
            'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/ing_jenkins_CICD.png',
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
          descriptions: [
            {
              content: 'SQL 기반 월별 지점별 승인결제내역 등 데이터 분석',
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
          descriptions: [
            {
              content: 'DNS 이전 작업 경험',
            },
            {
              content: 'Shell & Cronjob 기반 agent방식의 문자 DB Table 성능 개선 작업',
            },
            {
              content: 'Apache, Tomcat, Java 기반 홈페이지 유지보수',
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
      notionLink: 'https://jiyeongs-workspace.notion.site/209d4268cb558135a349ef8f42adaee5',
      descriptions: [
        {
          content: '[서비스 설명]',
          descriptions: [
            {
              content:
                '파편화된 정보를 한눈에 모아 TTS 알람, 푸시알림, 위젯으로 정보를 제공하는 알람 서비스',
            },
            {
              content: '아이디어 및 기획, 앱 배포까지 진행한 경험',
              // contribution: '인프라 설계 및 구축, 백엔드 개발 80% 기여',
            },
          ],
        },
        {
          content: '[인프라]',
          descriptions: [
            {
              content: 'Apache 웹서버 기반의 AWS 클라우드 서버 구축 및 백엔드 개발 담당',
            },
            {
              content: 'Load Balancer, Auto Scaling 구축하여 트래픽 분산 및 서버 자동 확장',
            },
            {
              content: '🔗 서비스 전체 구조도',
              href:
                'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/alarm_Diagrm.png',
            },
            {
              content: '🔗 백엔드 데이터 수집 주요 로직',
              href:
                'https://my-profile-datas.s3.ap-northeast-3.amazonaws.com/profile/alarm_backend_diagram.png',
            },
          ],
        },
        {
          content: '[개발]',
          descriptions: [
            {
              content:
                '공공데이터 포털 API로 실시간 버스 위치 정보, 실시간 날씨 정보, 실시간 코로나 정보를 가져와 전처리를 거쳐 데이터를 제공',
            },
            {
              content: 'Android 구글 스토어, IOS 앱스토어, 다운로드 수 100+',
            },
          ],
        },
        {
          content: '[Skill]',
          descriptions: [
            {
              content: 'Backend: Node.js, PHP, MariaDB, Firebase Realtime Database',
            },
            {
              content: 'Infrastructure: Nginx, Apache, AWS, Load Balancer, Auto Scaling',
            },
            {
              content: 'API: 공공데이터 포털 API',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
