# Remember Plus에 오신 것을 환영합니다!

# 리드미

> 주제 : SMART 가계부 서비스
> 

> 네이버 OCR(api) 를 활용해 영수증 사진을 넣으면 결제 정보(매장이름,결제금액)을 자동으로 읽어 가계부를 작성해주는 웹 서비스
> 

> 기획 의도
> 
- 사용자가 편리하게 가계부를 작성할 수 있는 것이 없을까?
- 수입 지출 내역을 한 눈에확인할 수 없을까?

> 내 돈 꽉 잡아줄 나만의 가계부!
> 
- 깔끔한 화면 디자인
- 영수증 사진만으로 간단하게 지출 내역 등록
- 과소비를 막아주는 지출 챌린지 서비스
- 다양한 통계 그래프 제공

> System Architecture
> 

!https://velog.velcdn.com/images/zinwonzung/post/e2e82dd0-97a8-4078-a79d-6e3b43b0f8e6/image.png

> Tech Stack
> 

!https://velog.velcdn.com/images/zinwonzung/post/1fd12521-aee5-4d6a-9092-807eec7307dc/image.png

> 기술 스택 선정 이유
> 

**웹 개발 프로임워크로 `Django`와 `Django Rest Framework`를 사용한 이유**

1.`python`이라는 언어의 강력함

백엔드를 맡은 팀원들이 `python`이 사용하기에 친숙하여 선택하였습니다.

2.`django`가 제공하는 여러 좋은 기능들이 간단하고 쉽게 구현이 가능합니다.

3.많은 사람들이 사용하고 있고 web application을 개발하기 위한 대부분의 기능들이 갖추어져 있기 때문입니다.

> mysql을 사용한 이유
> 
1. 오픈 소스이기 때문에 금액 부담이 없습니다.
2. 방대한 양의 데이터를 처리하지 않기 때문에 속도가 빠르고 안정적입니다.
3. 잘 이해되고 설정 및 관리가 비교적 쉬워 선택하였습니다.

> NGINX를 선택한 이유
> 
- *1.**성능과 가벼움을 중시하여 `NginX`를 선택하였습니다.
- *2.**load balancing

유저가 여럿 몰렸을 때, WAS에 적절히 부하를 분산해주기 위해서 입니다.

- *3.**동시요청이 많아도 메모리 사용량이 현저히 적습니다.
- *4.**비동기 처리

Event loop 기반으로 상당히 많은 트래픽을 동시에 처리 가능합니다.

> uWSGI gunicorn을 선택한 이유
> 

정적인 웹서버(Nginx)와 python으로 작성된 Web Framework(Django) 사이의 통신을 도와주는 역할

`django`에서 `Nginx`를 웹 서버로 사용할 경우, `Nginx`는 `python` 언어를 이해할 수 없기에 `gunicorn`이 http request를 `python`으로 번역하고 `django`의 response는 `nginX`가 알아들을 수 있도록 변환해주는 역할을 수행합니다.

***(여러 언어 사용자들의 다양한 요청을 이해할 수 있도록 이를 공통된 규칙으로 변환하는 관문 역할을 하는 것입니다.)***

WSGI는 멀티 쓰레드(multi-thread)를 생성할 수 있어 클라이언트 요청이 많아도 효율적으로 처리할 수 있습니다.

> React 사용하는 이유
> 
1. 수 많은 커뮤니티가 활성화되어 있습니다.
2. `Component`를 사용한 재사용이 가능하고 유지보수가 용이합니다.
3. 빠른 렌더링 속도, `virtual DOM`의 존재
- ***기존의 DOM은 페이지가 바뀔 때마다, **새 HTML를 로드하면서 DOM 전체**를 바꾸게 됩니다.

`Virtual Dom`은 `React` 컴포넌트가 리턴하는 값에 의해 만들어져서 실제 보이고 있는 **DOM과 비교해서 달라진 부분만 찾아내어 바꾸게** 됩니다. 이러한 `Virtual DOM` 때문에 `React`에서 컴포넌트 단위의 개발이 가능하게 됩니다.

> Backend
> 

API는 다음 영역을 처리합니다.

- 가입, 로그인, 로그아웃
- 지출 내역 CRUD
- 수입 내역 CRUD
- 영수증 사진에서 데이터 추출 후 내보내기
- 지출 챌린지 내역 생성, 가져오기
- 로그인, 로그아웃은 `localstorage`를 이용하여 구현하였습니다.
- 수입/지출 비율 계산
- 지출 유형별 비율 계산
- 전월 대비 지출 비교 계산
- 3개월치 수입/지출 총합 및 평균 계산

!https://velog.velcdn.com/images/zinwonzung/post/21994e0b-8a70-4ee4-b47d-decd3b8c82c9/image.png

!https://velog.velcdn.com/images/zinwonzung/post/d88166d8-1a3d-4a93-9d7b-ac9763626d0e/image.png

!https://velog.velcdn.com/images/zinwonzung/post/fb0b0d64-8347-46a4-ba07-d5a5b485d3c6/image.png

> AI
> 

광학 문자 인식(OCR), `NAVER CLOVA OCR` 사용하였습니다.

광학 문자 인식(OCR)은 텍스트 이미지를 기계가 읽을 수 있는 텍스트 포맷으로 변환하는 과정입니다. 예를 들어 양식 또는 영수증을 스캔하는 경우 컴퓨터는 스캔본을 이미지 파일로 저장합니다. 이미지 파일에서는 텍스트 편집기를 사용하여 단어를 편집, 검색하거나 단어 수를 계산할 수 없습니다. 그러나 OCR을 사용하면 이미지를 텍스트 문서로 변환하여 내용을 텍스트 데이터로 저장할 수 있습니다. 프로젝트에서는 영수증 특화 모델을 적용해 출력의 정확도를 높였습니다.

> OCR Process
> 

!https://velog.velcdn.com/images/zinwonzung/post/58bdebf9-4cad-4ab7-ba01-92eb68623029/image.png

!https://velog.velcdn.com/images/zinwonzung/post/4fb51514-f676-4ad4-b208-3050975666af/image.png

!https://velog.velcdn.com/images/zinwonzung/post/6eb6c6b2-24da-4f88-b50b-f441597b6e73/image.png

> ER diagram
> 

!https://velog.velcdn.com/images/zinwonzung/post/458dc9be-0816-4ab4-89f2-f496f88caab2/image.png

> Monitoring
> 

prometheus, grafana, node-expoter, cadvisor 사용 하였습니다.

!https://velog.velcdn.com/images/zinwonzung/post/945d96cf-1702-47b4-b838-d230b6929311/image.png

### **Google Analytics 사용하였습니다.**

!https://velog.velcdn.com/images/zinwonzung/post/d96ed9da-0e1b-4961-93ee-6ffe22a99b81/image.png

!https://velog.velcdn.com/images/zinwonzung/post/c481bb9a-3efe-4c07-acd0-b9db852876f2/image.png

!https://velog.velcdn.com/images/zinwonzung/post/332c3f0a-6503-4e3b-9b62-992e0bfe2104/image.png

> Features
> 

처음 접속 화면입니다.

!https://velog.velcdn.com/images/zinwonzung/post/24f37a55-010d-47bf-8c1e-7b33aa1ca383/image.gif

회원가입 후 로그인을 할 수 있습니다.

!https://velog.velcdn.com/images/zinwonzung/post/c49ab4cf-5a40-453c-bcb0-954d26ae0e32/image.gif

수입 내역을 추가,수정,삭제할 수 있습니다.

!https://velog.velcdn.com/images/zinwonzung/post/8c2f4c22-c904-445e-9e02-2b23f194d211/image.gif

~~영수증 이미지 선택 후 업로드 후 영수증 내용이 자동 기입됩니다.~~

영수증 이미지를 업로드 하면 지출 내용이 자동으로 기입됩니다.

!https://velog.velcdn.com/images/zinwonzung/post/02f9ae63-f5c4-4e68-a09b-18813d98d5f6/image.gif

용도별 그래프, 수입/지출 그래프, 3개월 내 수입지출 그래프입니다.

!https://velog.velcdn.com/images/zinwonzung/post/b7996c9d-ce78-47be-a5ed-97addb28e080/image.gif

목표금액을 설정하면, 목표금액에서 이번 달 지출금액을 뺀 남은 지출 금액을 알려줍니다.

!https://velog.velcdn.com/images/zinwonzung/post/50d6f34b-eb6d-40e2-b67a-db6ea722200b/image.gif

Dark mode로 변경할 수 있습니다.


<div>
  <h1>Tech Stack</h1>
  <div>
    <h3>Frontend</h3>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
    <img src="https://img.shields.io/badge/D3.js-F9A03C?style=flat-square&logo=D3.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=Three.js&logoColor=white" />
  </div>
  <div>
    <h3>Backend</h3>
    <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white" />
    <img src="https://img.shields.io/badge/Neo4j-4581C3?style=flat-square&logo=Neo4j&logoColor=white" />
  </div>
  <div>
    <h3>DevOps</h3>
    <img src="https://img.shields.io/badge/NGINX-092E20?style=flat-square&logo=NGINX&logoColor=white" />
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" />
    <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=flat-square&logo=Amazon%20EC2&logoColor=white" />
  </div>
  <div>
    <h3>ETC</h3>
    <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white" />
    <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white" />
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=white" />
  </div>
</div>


