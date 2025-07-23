import { ITroubleshooting } from '../component/troubleshooting/ITroubleshooting';

const troubleshooting: ITroubleshooting.Payload = {
  disable: false,
  list: [
    // 1. 디스크 풀/CPU 이슈
    // {
    //   title: '디스크 풀로 인한 CPU 과부하 및 디스크 부족 이슈 해결',
    //   where: 'Backend Developer',
    //   descriptions: [
    //     {
    //       content: '[이슈 상황]',
    //       descriptions: [
    //         {
    //           content:
    //             '배포 후, 이용권 상태를 1분마다 체크하는 cron 서버의 CPU 사용률이 90% 이상 급등하며 장애가 발생함.',
    //         },
    //       ],
    //     },
    //     {
    //       content: '[해결 과정]',
    //       descriptions: [
    //         {
    //           content:
    //             'du 명령어로 디스크 사용량을 분석해 git 프로젝트 폴더의 비정상적 용량 증가와 불필요한 디버그 파일 포함을 확인, git 디렉토리 정리 후 재배포.',
    //         },
    //         {
    //           content:
    //             'EC2 미할당 30G 볼륨을 기존 파티션에 합치고 파일시스템을 확장하여 디스크 공간 확보.',
    //         },
    //       ],
    //     },
    //     {
    //       content: '[성과 및 예방 조치]',
    //       descriptions: [
    //         { content: 'CPU 사용률이 정상화되고, cron 서버가 장애 없이 운영됨.' },
    //         { content: 'Jenkins CI/CD 파이프라인을 구축하여 자동화 배포 프로세스를 도입.' },
    //       ],
    //     },
    //   ],
    //   contribution: '장애 원인 분석 및 인프라 개선 주도',
    //   notionLink: '',
    // },
    // 2. DNS 서버 이전 중 레코드 삭제 이슈
    {
      title: 'DNS 서버 이전 중 운영 레코드 삭제로 인한 장애 대응',
      where: 'Backend Developer',
      descriptions: [
        {
          content: '[이슈 상황]',
          descriptions: [
            {
              content:
                'DNS 서버 이전 테스트 중 운영 DNS 레코드를 실수로 삭제하여, 무인 스터디카페 출입 시스템이 도메인 기반 통신에 실패하고 일부 매장에 장애가 발생함.',
            },
          ],
        },
        {
          content: '[해결 과정]',
          descriptions: [
            {
              content:
                'DNS 복구 전까지 각 장비의 /etc/hosts 파일을 수정해 API 도메인을 직접 IP로 지정, 장애를 신속히 우회.',
            },
          ],
        },
        {
          content: '[성과 및 예방 조치]',
          descriptions: [
            { content: '10분 내 출입 시스템 정상화, DNS TTL 초기화 후 도메인 기반 통신 복구.' },
            {
              content:
                '운영/테스트 레코드 구분 정책을 강화하고, DNS 변경 시 자동 백업 및 롤백 스크립트를 도입해 실수 방지 체계를 마련.',
            },
          ],
        },
      ],
      contribution: '장애 대응 및 인프라 운영 프로세스 개선',
      notionLink: '',
    },
    // 3. 600만 개 이용권 만료 대규모 장애
    {
      title: '600만 개 이용권 만료 처리로 인한 대규모 장애 복구',
      where: 'Backend Developer',
      descriptions: [
        {
          content: '[이슈 상황]',
          descriptions: [
            {
              content:
                '600만 개 이용권이 실수로 만료 처리되어 전국 매장 회원들이 동시 입·출입 불가 상태에 빠지는 대형 장애 발생.',
            },
          ],
        },
        {
          content: '[해결 과정]',
          descriptions: [
            {
              content:
                '즉시 장애 범위를 파악하고, 만료된 이용권 데이터를 조건에 맞게 되돌리는 쿼리를 작성해 단계별로 상태값을 복구.',
            },
            {
              content:
                '현재 스터디카페를 사용하고 있는 유저 기준으로 우선순위를 두고, 30분 내 90% 이상 복구, 1시간 내 전체 정상화.',
            },
          ],
        },
        {
          content: '[성과 및 예방 조치]',
          descriptions: [
            { content: '대규모 장애를 신속히 복구하고, 서비스 신뢰도를 유지.' },
            { content: '대량 데이터 갱신 작업에 대한 사전 리뷰와 승인 절차를 강화.' },
          ],
        },
      ],
      contribution: '장애 복구 및 데이터 운영 프로세스 개선',
      notionLink: '',
    },
    // 4. Mac Drive Agent 환경 트러블슈팅: Charles 프록시를 활용한 API 디버깅
    {
      title: 'Mac Drive Agent 환경 트러블슈팅: Charles 프록시를 활용한 API 디버깅',
      where: 'Backend Developer',
      descriptions: [
        {
          content: '[이슈 상황]',
          descriptions: [
            {
              content:
                'Drive Agent는 시스템 서비스 형태로 동작해 콘솔 로그 확인이 어렵고, Mac 환경에서 특정 기능이 정상 동작하지 않는 문제가 발생함.',
            },
          ],
        },
        {
          content: '[해결 과정]',
          descriptions: [
            {
              content:
                'Charles의 SSL Proxying과 Rewrite 기능을 활용해 운영 서버 트래픽을 로컬로 우회, API 요청을 상세 분석하여 Agent 식별 파라미터 누락 문제를 신속히 파악하고 수정.',
            },
          ],
        },
        {
          content: '[성과 및 예방 조치]',
          descriptions: [
            {
              content:
                '특정 API 요청에 포함되어야 할 Agent 식별 파라미터가 누락되어, 서버가 이를 웹 클라이언트의 요청으로 오인하고 웹용 처리 로직을 적용하면서 오류 응답을 반환하고 있음을 확인',
            },
            {
              content:
                'Rewrite 기능을 통해 실제 운영 서버를 수정하지 않고도 테스트 환경을 자유롭게 구성, 디버깅 유연성을 키움',
            },
            {
              content:
                '동일 이슈 재발 방지를 위해 Agent 요청에 대한 필수 파라미터 체크 로직을 서버에 추가하고, 관련 테스트 케이스를 보강하여 배포 프로세스에 반영함.',
            },
          ],
        },
      ],
      contribution: '트러블슈팅 전 과정 주도 및 문제 해결',
      notionLink: '',
    },
  ],
};

export default troubleshooting;
