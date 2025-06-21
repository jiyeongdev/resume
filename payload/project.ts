import { IProject } from '../component/project/IProject';
import { COMPANY } from './conf';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 이미지 기반 냉장고 재료 관리 및 레시피 공유 서비스',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: '냉장고 재료 관리 및 레시피 공유 서비스',
          href: 'https://www.fridgepal.life',
          contribution: '100% 기여',
          descriptions: [
            {
              content: '[백엔드 개발]',
              descriptions: [
                {
                  content: 'Spring Boot 3.2.3, Java 21 기반의 RESTful API 서버 설계 및 구현',
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
                  content:
                    'Python 기반 AI 이미지 생성 서버 구축 - Stable Diffusion v1.5(runwayml) 모델 활용',
                },
                {
                  content:
                    'Groq API(Llama 3.3 70B)를 활용한 한→영 번역 최적화 및 프롬프트 엔지니어링',
                },
                {
                  content:
                    'Pandas, NumPy를 활용한 14만건 식재료 데이터 전처리 및 1만건 고유 데이터셋 구축',
                },
                {
                  content: 'OpenCV, Pillow를 활용한 이미지 후처리 및 품질 검증 자동화',
                },
              ],
            },
            {
              content: '[인프라 설계 및 운영]',
              descriptions: [
                {
                  content: 'API 서버를 Docker로 컨테이너화하고, AWS ECS + EC2 환경에 배포 및 운영',
                },
                {
                  content: 'Ubuntu 서버에 HTTPS(SSL 인증서)를 적용한 보안 통신 환경 구성',
                },
                {
                  content: 'API 서버 인프라를 E2E로 직접 설계·구축 및 운영',
                },
                {
                  content: 'CI/CD , 서버 인프라 구성도 (자세한 설명은 포트폴리오 참조)',
                  contribution: '100% 인프라 구축',
                  href:
                    'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/092f77a2-a1a5-4057-91e4-27975f2fbd7c/fridgePal_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1_%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.png?table=block&id=219d4268-cb55-817b-b6e6-ff8e351b2788&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=2HxXFKulk8wsq18ezVdK98NxllfNo_1mFT2m9hqazA8&downloadName=fridgePal+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1+%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.png',
                },
              ],
            },
          ],
        },
      ],
    },
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
            'DB 스냅샷 기반 테스트 자동화 구축 - 20,000건의 데이터에 대해 기존/개선 로직 간 권한 체크 결과값 검증 및 성능 측정 자동화',
        },
        {
          content: '최적화 전후 시퀀스 다이어그램 비교 (자세한 설명은 포트폴리오 참조)',
          href:
            'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/227411f6-1b79-4cc0-b96b-605ef5919a4d/%E1%84%80%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%8F%E1%85%B3_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA_%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%AE_%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD_%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.png?table=block&id=219d4268-cb55-803a-95fb-d7806a6aba52&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750550400000&signature=DLZU-5wbCwh7OAUtXy4n3EvWXpZcfwMf8ZWLP4vP-5g&downloadName=%E1%84%80%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%8F%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%AE+%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD+%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.png',
        },
      ],
    },

    {
      title: 'SaaS 기반 좌석·이용권 시스템 개선',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content:
            '동접자 수 1,000 ~ 3,000명과 회원 수 180만명의 대용량 데이터를 처리하기 위한 스터디카페 키오스크 서비스 개선 프로젝트',
          descriptions: [
            {
              content: '이용권과 좌석배치도 SaaS 구조 설계 및 개선 담당',
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
              content:
                'SaaS 환경을 고려한 Electron, React, PHP API 하이브리드 애플리케이션 아키텍처 설계 및 구현',
            },
            {
              content:
                'Redis pub/sub 실시간 좌석상태 동기화 시스템 구성도 (자세한 설명은 포트폴리오 참조)',
              contribution: '100% 인프라 구축',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/1b773d24-d96a-4ad9-9deb-8eb1152aceba/ing_Redis_PubSub_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB_%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB_%E1%84%8C%E1%85%AA%E1%84%89%E1%85%A5%E1%86%A8_%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2_%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5%E1%84%92%E1%85%AA.png?table=block&id=209d4268-cb55-81e7-bb83-c125e12dade8&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=ReHhVRJht88Qw2430MfkWm5IAahSSeEiVH_P7My7xTE&downloadName=%5Bing%5D+Redis+Pub%2CSub+%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB+%E1%84%8C%E1%85%AA%E1%84%89%E1%85%A5%E1%86%A8+%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2+%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5%E1%84%92%E1%85%AA.png',
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
            {
              content:
                '키오스크 실시간 광고 송출 및 데이터 수집 시스템 구성도 (자세한 설명은 포트폴리오 참조)',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/4362860c-18f6-4a1f-93bd-1b4df75ce6c2/%E1%84%8F%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3_%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB_%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9_%E1%84%89%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%AE%E1%86%AF_%E1%84%86%E1%85%B5%E1%86%BE_%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%B5%E1%86%B8_%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%90%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A7.png?table=block&id=219d4268-cb55-8181-8345-e8b01d15fe4d&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=Rq2Dtk9erSRfhyHX6vq7zTtFGH65iHWYVODbe9uA8-Q&downloadName=%E1%84%8F%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3+%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9+%E1%84%89%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5+%E1%84%89%E1%85%AE%E1%84%8C%E1%85%B5%E1%86%B8+%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%90%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A7.png',
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
            {
              content: '단축URL 시스템 구성도 (자세한 설명은 포트폴리오 참조)',
              contribution: '100% 인프라 구축',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/d29cf976-dd7d-4f2b-8a5e-c18d4ce939ae/ing_shorenURL.png?table=block&id=209d4268-cb55-8160-95e9-ef6d67477389&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=GsnaByp506sZJwOjSC2gkcQMSS9PZe2Ioyug1cGix9k&downloadName=%5Bing%5D+shorenURL.png',
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
      title: '고성능 웹 인프라 아키텍처 설계 및 구축 (Redis/Lua 기반)',
      startedAt: '2022-01',
      endedAt: '2023-07',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: 'WAS 구조의 인프라 구축 및 운영',
          contribution: '100% 기여',
          descriptions: [
            {
              content: 'OpenResty와 Lua를 활용한 고성능 웹서버 구축 및 Redis 연동',
            },
            {
              content: '프록시 서버 및 외부 업체의 다이나믹 QR 결제 API gateway 구축',
            },
          ],
        },
      ],
    },
    {
      title: 'Jenkins CI/CD 구축 및 운영',
      startedAt: '2022-06',
      endedAt: '2022-08',
      where: COMPANY.ING_STORY_ENG,
      descriptions: [
        {
          content: '전사 CI/CD 파이프라인 구축 및 배포 자동화 시스템 개발',
          contribution: '100% 기여',
          descriptions: [
            {
              content: 'Jenkins Pipeline을 활용한 자동화된 빌드, 테스트, 배포 파이프라인 구축',
            },
            {
              content: 'Git Webhook 연동으로 코드 커밋 시 자동 빌드 및 배포 트리거 구현',
            },
            {
              content:
                'Jenkins로 빌드 → scp를 통해 서버로 build파일 전송 → 배포 스크립트 실행 → 배포 완료',
            },
            {
              content: 'Multi-stage 배포 전략 구현 (Dev → Staging → Production)',
            },
            {
              content: '배포 실패 시 자동 롤백 시스템 구축 및 배포 이력 관리',
            },
            {
              content: 'Certbot을 활용한 SSL 인증서 자동 갱신 및 관리 시스템 구축',
            },
            {
              content: 'CI/CD 파이프라인 구성도 (자세한 설명은 포트폴리오 참조)',
              contribution: '100% 인프라 구축',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/eb8582be-f9d4-4693-a280-d11e89220131/ing_Jenkins_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB_%E1%84%86%E1%85%AE%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A1%E1%86%AB_%E1%84%87%E1%85%A2%E1%84%91%E1%85%A9_%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%80%E1%85%AE%E1%84%8E%E1%85%AE%E1%86%A8_%E1%84%86%E1%85%B5%E1%86%BE_%E1%84%85%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8_%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA.png?table=block&id=209d4268-cb55-810b-a3e9-f5fb501f77fc&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=VvoVzUr5IKiwpVlBUA-qXW5eeKth1m3oJJxHgBxL2Sg&downloadName=%5Bing%5D+Jenkins+%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB+%E1%84%86%E1%85%AE%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A1%E1%86%AB+%E1%84%87%E1%85%A2%E1%84%91%E1%85%A9+%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB+%E1%84%80%E1%85%AE%E1%84%8E%E1%85%AE%E1%86%A8+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%85%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8+%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA.png',
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
          content: '[서비스 설명]',
          descriptions: [
            {
              content:
                '파편화된 정보를 한눈에 모아 TTS 알람, 푸시알림, 위젯으로 정보를 제공하는 알람 서비스',
            },
            {
              content: '아이디어 및 기획, 앱 배포까지 진행한 경험',
              contribution: '인프라 설계 및 구축 , 백엔드 개발 80% 기여',
            },
          ],
        },
        {
          content: '[인프라]',
          descriptions: [
            {
              content: 'apache 웹서버 기반의 AWS 클라우드 서버 구축 및 백엔드 개발 담당',
            },
            {
              content: 'load balance, auto scaling 구축하여 트래픽 분산 및 서버 자동 확장',
            },
            {
              content: '서비스 전체 구조도',
              contribution: '100% 인프라 구축',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/855c03c3-6707-4775-aeb0-b13b1dd84911/Untitled.png?table=block&id=209d4268-cb55-8169-b24c-f7c0771fbaa5&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=mHhap-oOWe3XCSYDvnFE_7Wma5qheZrBzQk4TNOMy-M&downloadName=Untitled.png',
            },
            {
              content: '백엔드 데이터 수집 주요 로직',
              contribution: '100% 인프라 구축',
              href:
                'https://file.notion.so/f/f/51184175-bd2a-4149-9558-677f61fa24ec/0138fa39-adda-482d-8949-a0b14d7d3fbd/Untitled.png?table=block&id=209d4268-cb55-8188-862e-f100fef5817e&spaceId=51184175-bd2a-4149-9558-677f61fa24ec&expirationTimestamp=1750543200000&signature=V3ffo7gS5BBGruhubU5vWPwcrYZ1c16sy8FnJLSmp0c&downloadName=Untitled.png',
            },
          ],
        },
        {
          content: '[개발]',
          descriptions: [
            {
              content:
                '공공 데이터 API로 실시간 버스 위치 정보, 실시간 날씨 정보, 실시간 코로나 정보를 가져와 전처리를 거쳐 데이터를 제공',
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
