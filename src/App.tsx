import React from 'react'
import './App.css'
import { Video } from './components/video'
import { Image } from './components/image'
import { Accordian } from './components/accordian'
import { Fab } from './components/fab'

function App() {
  const year = new Date().getFullYear()
  return (
    <main className="App">
      <header className={'header'}>
        <div>
          <img
            className={'avatar'}
            alt={'avatar'}
            src={'https://ik.imagekit.io/crso3ztbifq/3610_UTmhr5ADH.jpeg?updatedAt=1692780469163'}
          />
        </div>
        <div>
          <h1>김대웅 (Chuck)</h1>
          <a
            href="https://www.instagram.com/sh_chuck/"
            className="footer_sns_item type_instagram"
            target="_blank"
            rel="noreferrer"
          >
            <span className="blind">Instagram</span>
          </a>
        </div>
      </header>
      <section>
        <h2 style={{ marginTop: '3rem' }} className={'primary'}>
          Learn, Assure, Continue
        </h2>
        <div>
          <p className={'description'}>
            배우고 확신한 일에는 두려움 없이 진행하고, what 보단 why에 집중하여 커뮤니케이션이 진행 되도록 노력합니다.
            해외 서비스를 개발하길 좋아하고 컴퓨터와 더 친해지고 싶습니다. 요즘 Typescript와 React에 관심이 많습니다.
            야구와 탁구를 좋아합니다. 야구와 탁구는 저와 닮았습니다. 어떻게 될지 모른다는 점.
          </p>
        </div>
      </section>
      <section>
        <h2 className={'primary'}>Work Experience</h2>
        <div>
          <h3 style={{ marginTop: 0 }}>NAVER &gt; Yahoo Japan Place</h3>
          <p className={'description'}>
            일본 로컬 서비스<small>Present</small>
          </p>
          <p className={'description bold'}>FE + BE</p>
          <Accordian summary={'상점 페이지 > 메뉴탭 페이지 개발'}>
            <Video
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/portfolio/yj_menu_tab_HsmZ80G3t.mp4?updatedAt=1711584926664',
              ]}
            />
          </Accordian>
          <Accordian summary={'메뉴 페이지 개발'}>
            <Video
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/portfolio/yj_menuend_Dzo7wGzPa.mp4?updatedAt=1711584807919',
              ]}
            />
          </Accordian>
          <p className={'description bold'}>FE</p>
          <Accordian summary={'단풍 & 벚꽃 시즌 때 명소 페이지 진입 시 단풍 및 벚꽃 떨어지는 에니메이션 개발'}>
            <Video
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/portfolio/KakaoTalk_20240327_165959735_hZQfRShMV.mp4?updatedAt=1711545171706',
                'https://ik.imagekit.io/crso3ztbifq/portfolio/404190475_928428158790016_1772448287178861212_n_R7sEy91U0.mp4?updatedAt=1702774879916',
              ]}
            />
          </Accordian>
          <Accordian summary={'리뷰 페이지 개발'}>
            <p className={'description done secondary'}>Next.js Page Router 기반 Custom Scroll Restoration 개발</p>
            <Video
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/portfolio/yj_reviewend_TzN_0oijs.mp4?updatedAt=1711584929193',
              ]}
            />
          </Accordian>
          <Accordian summary={'외부 서비스 제공을 위하여 미디어 뷰어 페이지 설계 및 개발'}></Accordian>
          <Accordian summary={'자주 쓰이는 주요 컴포넌트 storybook으로 side effect 최소화'}></Accordian>

          <p className={'description bold'}>BE</p>
          <Accordian summary={'Circuit breaker 적용'}>
            <p className={'description done secondary'}>배경: 모든 데이터가 외부 플렛폼에 매우 의존적</p>
            <p className={'description done secondary'}>
              성과: 외부플렛폼 장애 시 Circuit Breaker로 인하여 서버 부하가 최소화 되고 유저에게 적절한 UI가 빠르게 노출
              됨
            </p>
          </Accordian>

          <p className={'description skill'}>next.js, nest.js, storybook</p>
        </div>
        <div>
          <h3>NAVER &gt; Line Place</h3>
          <p className={'description'}>
            일본 로컬 서비스<small>Nov 2021 - Nov 2022</small>
          </p>
          <p className={'description bold'}>FE + BE</p>
          <Accordian summary={'지역 X 카테고리 랭킹 API + 페이지 개발 + 랭킹 품질 검증 배치 개발'}>
            <Video
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/portfolio/lp_ranking_2FIvyGnxn.mp4?updatedAt=1711585941716',
              ]}
            />
          </Accordian>
          <Accordian summary={'명소 이벤트'}>
            <p className={'description done secondary'}>검색 홈 &gt; 버블 필터 API & UI 개발</p>
            <p className={'description done secondary'}>검색 결과 &gt; 명소 요약 검색 API & UI 개발</p>
            <p className={'description done secondary'}>POI END &gt; 명소 이벤트 배너 및 Bottom Sheet 개발</p>
            <p className={'description done secondary'}>이벤트 시작 & 종료 타이머 개발</p>
          </Accordian>

          <p className={'description bold'}>FE</p>
          <Accordian summary={'LCP(Largest Contentful Paint) 최적화'}>
            <p className={'description done secondary'}>리뷰 페이지: 66% 감소</p>
            <p className={'description done secondary'}>메뉴 페이지: 76% 감소</p>
          </Accordian>

          <Accordian summary={'Tree-shaking 적용하여 bundle size 최소화'}>
            <p className={'description done secondary'}>Webpack의 sideEffects 이용하여 bundle size 11% 감소</p>
          </Accordian>

          <Accordian summary={'SEO 개선'}>
            <p className={'description done secondary'}>Snippet 고도화 하여 노출 및 click 수 증가</p>
            <p className={'description done secondary'}>Canonical URL 적용하여 중복 페이지 74% 감소</p>
          </Accordian>

          <p className={'description bold'}>BE</p>
          <Accordian
            summary={
              'GraphQL Dataloader level에서 Redis 이용하여 API 캐쉬 적용 (하나의 영수증에 많은 리뷰가 작성된 경우)'
            }
          >
            <p className={'description done secondary'}>리뷰 페이지: 79% 감소</p>
            <p className={'description done secondary'}>상점 페이지: 22% 감소</p>
            <p className={'description done secondary'}>테마 페이지: 46% 감소</p>
          </Accordian>

          <p className={'description'}>React, GraphQL, nest.js</p>
        </div>
        <div>
          <h3>NAVER &gt; Vlive</h3>
          <p className={'description'}>
            KPOP 스타 커뮤니티 서비스<small>Jan 2020 - Nov 2021</small>
          </p>
          <p className={'description bold'}>FE</p>
          <Accordian summary={'JS, CSS 파일 Static File Server에 올려, 웹 초기 렌더링 속도 향상'}>
            <p className={'description done secondary'}>Slow 3G 환경, js 로드 시간 감소 (39% 향상)</p>
          </Accordian>

          <Accordian summary={'유료 채팅 페이지 개발'}>
            <p className={'description done secondary'}>구매 권한 체크를 위해 JWT 사용</p>
            <Image
              srcList={[
                'https://ik.imagekit.io/crso3ztbifq/channel_chat_1_aDBboBrjXG.gif?updatedAt=1632538868031',
                'https://ik.imagekit.io/crso3ztbifq/twice_L3ykdpYkSHS.gif?updatedAt=1632540626069',
                'https://ik.imagekit.io/crso3ztbifq/channel_chat_audio_img_IFnemDral.gif?updatedAt=1633149667920',
              ]}
            />
          </Accordian>

          <Accordian summary={'이미지 업로더 sdk 교체'}>
            <p className={'description done secondary'}>
              이미지 업로드 시 BFF에 전달하고 BFF가 이미지 SDK API 호출하여 비효율. BFF 의존성을 제거되고 글로벌 대응도
              가능하게 됨
            </p>
          </Accordian>
          <Accordian
            summary={'Slow 3G 환경, 3rd party sdk 로드되기전 sdk API 호출되어 404 에러 발생하여 수정'}
          ></Accordian>
          <Accordian summary={'새소식 UI 개발'}>
            <Image
              srcList={['https://ik.imagekit.io/crso3ztbifq/notifications_gif_2_ApeLQUg-0.gif?updatedAt=1621132744719']}
            />
          </Accordian>
          <Accordian summary={'채널 홈 UI 개발'}>
            <Image
              srcList={['https://ik.imagekit.io/crso3ztbifq/v_channelHome_TfR9vC-sP1.gif?updatedAt=1626010520165']}
            />
          </Accordian>
          <Accordian summary={'채널 My UI 개발'}>
            <Image srcList={['https://ik.imagekit.io/crso3ztbifq/channelMy__d9Cau--rG.gif?updatedAt=1617093073381']} />
          </Accordian>

          <p className={'description bold'}>BE</p>
          <Accordian summary={'쿠키 정책 변경으로 특정 브라우저에서 로그인이 안되었던 이슈 최대한 해결'}>
            <p className={'description done secondary'}>
              Redis로 유저 정보를 저장하여 인증정보로 엑세스 토큰 제공 (29% 에러 감소)
            </p>
          </Accordian>
          <Accordian summary={'MSA 구조로 검색 API 개편'}>
            <p className={'description done secondary'}>채널, 비디오, 태그 데이터를 색인하고 검색하는 과정 모두 진행</p>
          </Accordian>

          <p className={'description'}>React, Jquery, Varnish, Spring Framework, Ansible, Nginx</p>
        </div>
        <div>
          <h3>NAVER &gt; WAV Media</h3>
          <p className={'description'}>
            인디 아티스트를 위한 뮤직 커뮤니티 서비스<small>Aug 2016 - Jan 2020</small>
          </p>
          <p className={'description bold'}>FE</p>
          <p className={'done'}>웹 SPA 적용 (jQuery to React)</p>
          <p className={'done'}>Varnish 서버로 웹페이지 캐싱하여 비로그인 유저에게 빠르게 HTML 렌더링</p>
          <p className={'done'}>음원 및 영상 올리는 웹 페이지 개발</p>
          <p className={'done'}>비디오 재생 페이지에 추천 영상 리스트 UI 개발</p>
          <p className={'done'}>마케팅 툴 연동 (Braze, Facebook Pixel, Tune, GA)</p>

          <p className={'description bold'}>BE</p>
          <Accordian summary={'Lamda Architecture 기반 실시간 사용자 엑션에 의한 레벨 증가 시스템 개발'}>
            <p className={'description done secondary'}>
              시나리오: 사용자가 댓글 작성 시 일정 경험치가 증가하고 레벨마다 한도가 넘어가면 즉시 레벨업이 된다.
            </p>
            <p className={'description done secondary'}>운영툴을 이용하여 현 상황 확인 및 경험치 증가 값 변경 가능</p>
          </Accordian>

          <p className={'done'}>Prism Studio 연동</p>
          <p className={'done'}>좋아요 API 개발</p>
          <p className={'done'}>실시간 라이브스트림 시청자 수 API 및 Dashboard 개발</p>
          <p className={'done'}>아티스트 후원 관련 정보 제공 API 개발</p>
          <p className={'done'}>50개 이상 다양한 지표 제공 (Zepplelin via MySql, Hive)</p>
          <p className={'done'}>어뷰징 관련 신고 시 운영자 메일로 전달되는 기능 개발</p>

          <p className={'description bold'}>Devops</p>
          <p className={'done'}>Ansible 이용하여 인프라 구축 (Static File Server, 운영툴, Redis)</p>
          <p className={'done'}>SSL 인증서 교체</p>
          <p className={'done'}>Apache에서 Nginx로 이관 작업</p>

          <p className={'description bold'}>Ops</p>
          <Accordian summary={'미국 현지에서 라이브스트림 기술 지원'}>
            <p className={'description done secondary'}>
              안정적인 라이브스트림을 위해 라이브스트림 인프라와 데이터 흐름을 이해하고 장애를 최소화 할 수 있도록
              리허설 및 기술 지원
            </p>
          </Accordian>
          <p className={'description'}>
            React, Jquery, Varnish, Spring Framework, Flume, Kafka, Storm, Hadoop, Hive, Ansible, Nginx
          </p>
        </div>
        <div>
          <h3>Ksign</h3>
          <p className={'description'}>
            통합인증개발팀<small>June 2014 - Aug 2016</small>
          </p>
          <p className={'description bold'}>FE + BE</p>
          <p className={'done'}>웹 기반 회사 제품 라이센스 관리 프로그램 개발</p>
          <p className={'done'}>SSO &gt; 중복 로그인 시 기존 로그인이 풀리는 기능 개발</p>
          <p className={'done'}>
            SSO &gt; 세션 클러스터링 가능하도록 개발하여 다수의 에이전트 서버가 설치되어 있는 환경에서도 SSO 인증 처리
            가능
          </p>
          <p className={'done'}>EAM &gt; 유저 속성 기반 권한 관리 아키텍쳐 설계</p>
          <p className={'done'}>OAuth 2.0 기반 IOT 통신 시 인증 및 권한 관리 프로그램 개발 </p>
          <p className={'description'}>
            Java 1.4 ~ 1.6, Java Web Servlet, Spring Framework, mybatis, MySQL, Apache Web Server
          </p>
        </div>
        <div>
          <h3>Academic Computer Center</h3>
          <p className={'description'}>
            Student Consultant @MNSU USA<small>Aug 2013 - May 2014 </small>
          </p>
          <p className={'done'}>Helped customers who have trouble with computer hardware or software.</p>
          <p className={'done'}>Set up network cable on campus</p>
        </div>
        <div>
          <h3>TEST ENC</h3>
          <p className={'description'}>
            Android Application Tester <small> Summer of 2013 </small>
          </p>
          <p className={'done'}>Created test cases. Run functional, regression, and alpha testing.</p>
        </div>
        <div>
          <h3>IT Service Desk</h3>
          <p className={'description'}>
            Student Consultant @MNSU USA<small>Aug 2012 - May 2013</small>
          </p>
          <p className={'done'}>
            Provided support for administrative, academic and student computer questions via walk-in, telephone, e-mail.
          </p>
        </div>
      </section>
      <section>
        <h2 className={'primary'}>Activity</h2>
        <div>
          <h3 style={{ marginTop: 0 }}>
            <a href={'https://boostcamp.connect.or.kr/'} target={'_blank'}>
              Boostcamp Web・Mobile 8th
            </a>
          </h3>
        </div>
        <p className={'description'}>Backend(Node.js) Mentor, 2023</p>
      </section>
      <section>
        <h2 className={'primary'}>Education</h2>
        <div>
          <h3 style={{ marginTop: 0 }}>Minnesota State University, Mankato</h3>
        </div>
        <p className={'description'}>Bachelor of Science in Computer Information Technology, 2014</p>
        <p className={'description'}>Minor degree in Mathematics</p>
      </section>
      <section>
        <h2 className={'primary'}>Award</h2>
        <div>
          <h3 style={{ marginTop: 0 }}>The Hickory Tech Scholarship</h3>
          <p className={'description'}>
            Minnesota State University, Mankato <small>2013-2014 academic year</small>
          </p>
        </div>
      </section>
      <footer className={'footer'}>
        <div className={'footer-inner'}>
          <p>Daewoong Kim | Copyright © {year}</p>
        </div>
      </footer>
      <Fab onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} />
    </main>
  )
}

export default App
