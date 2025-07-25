import { IIntroduce } from '../../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '👋 **문제 해결 중심의 개발자, 배지영입니다**',
    '저는 레거시 시스템의 한계를 이해하고, 이를 개선하는 데 강한 역량을 가진 개발자입니다. --특히 PHP 기반 레거시 시스템을 JAVA/Golang으로 전환하며,-- 단순한 마이그레이션을 넘어 구조적 병목 해소와 품질 향상을 함께 이끌어낸 경험이 있습니다. 이 경험은 --복잡한 기기 연동 구조와 실시간 동기화가 중요한 티오더 환경에 직접적으로 기여할 수 있는 역량이라고 생각합니다.--',

    '**티오더에 끌린 이유 – “현장성과 기술이 만나는 곳”**',
    '그런 저에게 티오더는 자연스럽게 관심을 끌 수밖에 없었습니다. POS, 주문 태블릿 등 다양한 디바이스가 실시간으로 연결되고, 그것이 실제 오프라인 사용자 경험에 직결되는 구조는 개발자에게 가장 도전적이면서도 의미 있는 환경이라고 생각합니다.',

    '**PHP -> Golang으로 안정적으로 전환한 경험**',
    '기존에 PHP 기반으로 운영되던 레거시 API 서버를 Golang 기반으로 --점진적으로 전환--하는 작업을 수행했습니다. 단순히 기능만 옮기는 것이 아니라, --구조적 병목을 개선--하고 --테스트 기반의 안정적인 이전--을 목표로 했습니다.',

    '포팅 과정에서 가장 중요하게 여긴 것은 기존 기능의 정합성과 안정성이었습니다. 이를 위해 API 단위로 포팅을 진행하며, 각 API마다 testify를 활용해 유닛 테스트와 Mock을 작성하고, 포팅 전후의 결과값을 자동 비교할 수 있는 회귀 테스트 체계를 구축했습니다.',

    '**성능 병목을 해결한 권한 시스템 리디자인 경험**',
    '실제 프로젝트에서, 수만 회의 DB 호출이 발생하던 권한 시스템을 기존의 중첩된 권한 구조를 재설계하고 글로벌 캐시 전략을 도입했습니다. 이로써 --DB 호출 횟수를 20,000회에서 4회로 줄이고, 평균 1분 이상 걸리던 응답 속도를 1초대로 단축--시켰습니다. 단순한 마이그레이션을 넘어, 도메인 모델과 데이터 흐름을 깊이 이해한 결과였습니다.',

    '**TDD 자동화로 2만 건 이상 검증**',
    '또한 권한 로직이 업무 전반에 영향을 주는 만큼 TDD 기반의 자동화 테스트 환경을 구축해, 수만 건의 실제 데이터를 바탕으로 성능과 정합성을 검증하고 회귀 테스트 자동화까지 완성하며 품질과 생산성을 함께 높였습니다. 신뢰도 높은 테스트 커버리지를 통해 안정성을 확보할 수 있었고, 이 경험은 --티오더와 같은 실시간 고가용성 환경에서 신속하면서도 안전한 구조 변경이 필요한 상황에 바로 적용할 수 있습니다.--',

    '**첫 회사에서의 디바이스 연동 구조 경험 – 티오더와의 기술적 접점**',
    '저는 ‘아이엔지스토리’  에서 --지문인식기, 카드리더기 등의 외부 장치가 키오스크 및 운영 서버와 안정적으로 통신해야 하는 환경을 경험--했습니다. 이 시스템은 통신사망, 공유기, 허브, 키오스크, WebSocket 서버, 바이오스타(지문 인증 시스템) 등 여러 계층을 거쳐야만 실시간 인증 및 동기화가 가능했기에, --복잡한 물리적 환경에서도 안정적인 데이터 흐름과 시스템 연결을 보장하는 기술 설계 역량--은, 티오더가 운영하는 주문 태블릿·POS·키오스크 환경에도 바로 적용 가능한 경험이라 생각합니다.',

    '**기술이 아닌 ‘구조’에 집중합니다**',
    '첫 회사에서의 주 언어 였던 --PHP 및 Laravel, CodeIgniter 환경에 익숙--하며, 이후에는 --Java(Spring Boot) 기반으로도 콘서트 예매 시스템, 식재료 AI 이미지 분류 API 등 다양한 프로젝트를 주도적으로 구현--해왔습니다. 언어나 프레임워크에 얽매이지 않고, 서비스 구조와 문제 해결에 집중하는 개발자로서, 어떤 환경이든 빠르게 적응하고 구조적 개선을 이끌 수 있습니다.',

    '**구조를 이해하고 개선하는 개발자로, 티오더에 기여하겠습니다**',

    '언어보다 구조를, 코드보다 서비스의 흐름을 이해하는 개발자로서, 저는 다양한 기술 스택을 넘나들며 문제를 해결해 왔습니다. PHP, Laravel, CodeIgniter에 대한 경험은 물론이고, --Java(Spring Boot) 기반에서도 API 설계, 자동 배포 인프라 구성까지 전방위적인 역량을 갖췄습니다--. 티오더의 기술 스택과 운영 구조, 서비스 지향점 모두 제가 경험해 온 방향성과 맞닿아 있으며, 안정성과 품질 중심의 개발 문화에 깊이 공감합니다. 복잡한 문제를 단순하고 견고하게 바꾸는 일에 기여하고 싶습니다.',

    '감사합니다.',
  ],
  sign: 'jiyeong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
