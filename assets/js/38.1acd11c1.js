(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{520:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("git의 tag 기능에 대한 사용법 정리한 것으로 주로 배포 후 버젼을 master에 tag 하여 관리 함")]),a._v(" "),t("h2",{attrs:{id:"태그-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#태그-생성"}},[a._v("#")]),a._v(" 태그 생성")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ git tag -a v2022.03.08 -m "post api 추가"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"태그-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#태그-push"}},[a._v("#")]),a._v(" 태그 Push")]),a._v(" "),t("h3",{attrs:{id:"특정-태그만-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#특정-태그만-push"}},[a._v("#")]),a._v(" 특정 태그만 push")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git push origin v2022.03.08 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"모든-버젼-태그-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#모든-버젼-태그-push"}},[a._v("#")]),a._v(" 모든 버젼 태그 push")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git push origin --tags  \n$ git show v2022.03.*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"태그-삭제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#태그-삭제"}},[a._v("#")]),a._v(" 태그 삭제")]),a._v(" "),t("h3",{attrs:{id:"로컬-태그-삭제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#로컬-태그-삭제"}},[a._v("#")]),a._v(" 로컬 태그 삭제")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git tag -d v2022.03.08\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"원격-태그-삭제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격-태그-삭제"}},[a._v("#")]),a._v(" 원격 태그 삭제")]),a._v(" "),t("p",[a._v("2가지 방법으로 가능하며 "),t("code",[a._v("tags/태그이름")]),a._v(" 또는 "),t("code",[a._v(":")]),a._v(" 를 사용")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git push -u origin :tags/[TAG_NAME]\n\n$ git push origin :v2022.03.08\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"특정-태그-버젼으로-롤백"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#특정-태그-버젼으로-롤백"}},[a._v("#")]),a._v(" 특정 태그 버젼으로 롤백")]),a._v(" "),t("ol",[t("li",[a._v("tag 확인")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git tag\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("원격지 tag 로컬로 가져오기")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git fetch --all --tags\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("tag 확인")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git tag\n\n2022.03.08\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[a._v("tag_v2022.03.08")]),a._v(" 브랜치로 체크 아웃")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git checkout tags/v2022.03.08 -b tag_v2022.03.08\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"참고"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[a._v("#")]),a._v(" 참고")]),a._v(" "),t("h3",{attrs:{id:"젠킨스-롤백"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#젠킨스-롤백"}},[a._v("#")]),a._v(" 젠킨스 롤백")]),a._v(" "),t("ol",[t("li",[a._v("로컬에서 tag branch 생성 후 push")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git checkout tags/v2022.03.08 -b live-v2022.03.08\n$ git push \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("젠킨스에서 배포 브랜치로 tag branch 지정")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Branch Specifier : */live-v2022.03.08\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("blockquote",[t("p",[a._v("자동화 하는 방법 찾아 봐야 겠다. ㅜㅜ")])])])}),[],!1,null,null,null);s.default=r.exports}}]);