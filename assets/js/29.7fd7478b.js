(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{511:function(t,a,e){"use strict";e.r(a);var r=e(4),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"스프링-컨테이너와-스프링-빈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스프링-컨테이너와-스프링-빈"}},[t._v("#")]),t._v(" 스프링 컨테이너와 스프링 빈")]),t._v(" "),e("h3",{attrs:{id:"스프링-빈-조회-상속-관계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스프링-빈-조회-상속-관계"}},[t._v("#")]),t._v(" 스프링 빈 조회 - 상속 관계")]),t._v(" "),e("ul",[e("li",[t._v("부모 타입으로 조회 하면, 자식 타입도 함께 조회 한다.")]),t._v(" "),e("li",[t._v("모든 자바 객체의 최고 부모인 "),e("code",[t._v("object")]),t._v(" 타입으로 조회 하면, 모든 스프링 빈을 조회 한다.")])]),t._v(" "),e("h3",{attrs:{id:"beanfactory와-applicationcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory와-applicationcontext"}},[t._v("#")]),t._v(" BeanFactory와 ApplicationContext")]),t._v(" "),e("p",[t._v("< interface > BeanFactory ⬅️ < interface > ApplicationContext ⬅️ < interface > AnnotaionConfigApplicationContext")]),t._v(" "),e("h4",{attrs:{id:"beanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory"}},[t._v("#")]),t._v(" BeanFactory")]),t._v(" "),e("ul",[e("li",[t._v("스프링 컨테이너의 최상위 인터페이스")]),t._v(" "),e("li",[t._v("스프링 빈을 관리하고 조회 하는 역할을 담당")]),t._v(" "),e("li",[e("code",[t._v("getBean()")]),t._v("을 제공")])]),t._v(" "),e("h4",{attrs:{id:"applicationcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext"}},[t._v("#")]),t._v(" ApplicationContext")]),t._v(" "),e("ul",[e("li",[t._v("BeanFactory 기능을 모두 상속받아서 제공")]),t._v(" "),e("li",[t._v("부가기능 제공\n"),e("ul",[e("li",[t._v("MessageSource : 메세지 국제화")]),t._v(" "),e("li",[t._v("EnvironmentCapable : 환경 변수")]),t._v(" "),e("li",[t._v("ApplicationEventPulbisher : 어플리케이션 이벤트 구독 모델 지원")]),t._v(" "),e("li",[t._v("ResourceLoader : 리솟스 조회")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("BeanFactory나 ApplicationContext를 스프링 컨테이너라고 합니다.")])]),t._v(" "),e("h3",{attrs:{id:"스프링-빈-설정-메타-정보-beandefinition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스프링-빈-설정-메타-정보-beandefinition"}},[t._v("#")]),t._v(" 스프링 빈 설정 메타 정보-BeanDefinition")]),t._v(" "),e("ul",[e("li",[t._v("스프링은 어떻게 이런 다양한 설정 형식을 지원하는 것일까? "),e("code",[t._v("BeanDefinition")]),t._v("이라는 추상화가 있다.")]),t._v(" "),e("li",[t._v("역할과 구현을 개념적으로 나눈 것이다.")]),t._v(" "),e("li",[e("code",[t._v("BeanDefinition")]),t._v(" 을 빈 설정 메타정보라고 한다.")]),t._v(" "),e("li",[e("code",[t._v("@Bean")]),t._v(" 당 하나씩 메타정보가 생성 된다.")]),t._v(" "),e("li",[t._v("스프링 컨테이너는 이 메타정보를 기본으로 빈을 생성한다.")])]),t._v(" "),e("h2",{attrs:{id:"싱글톤-컨테이너"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#싱글톤-컨테이너"}},[t._v("#")]),t._v(" 싱글톤 컨테이너")]),t._v(" "),e("h3",{attrs:{id:"웹-애플리케션과-싱글톤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#웹-애플리케션과-싱글톤"}},[t._v("#")]),t._v(" 웹 애플리케션과 싱글톤")]),t._v(" "),e("ul",[e("li",[t._v("스프링은 태생이 기업용 온라인 서비스 기술을 지원하기 위해서 탄생")]),t._v(" "),e("li",[t._v("웹 애플리케이션은 여러 고객이 동시에 요청을 한다")])]),t._v(" "),e("h3",{attrs:{id:"싱글톤-패턴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#싱글톤-패턴"}},[t._v("#")]),t._v(" 싱글톤 패턴")]),t._v(" "),e("ul",[e("li",[t._v("클래스 인스턴스가 1개만 생성")])]),t._v(" "),e("h2",{attrs:{id:"참고"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.yes24.com/Product/Goods/7516911?OzSrank=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("토비의 스프링 3.1 세트"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("스프링 핵심 원리 기본편"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://spring.io/guides",target:"_blank",rel:"noopener noreferrer"}},[t._v("스프링 가이드"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);