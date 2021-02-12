(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{511:function(e,s,r){"use strict";r.r(s);var t=r(4),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("유용한 Docker 명령어 모음.")]),e._v(" "),r("h3",{attrs:{id:"모든-컨테이너-stop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모든-컨테이너-stop"}},[e._v("#")]),e._v(" 모든 컨테이너 stop")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker stop $(docker ps -a -q)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("docker run -d --name redis-master01 --network host -v /redis/master01:/data redis:5.0.10 redis-server --port 6379 --cluster-enabled yes --cluster-config-file node.conf --cluster-node-timeout 5000 --bind 0.0.0.0\ndocker run -d --name redis-slave03 --network host -v /redis/slave03:/data redis:5.0.10 redis-server --port 6381 --cluster-enabled yes --cluster-config-file node.conf --cluster-node-timeout 5000 --bind 0.0.0.0 --appendonly yes")]),e._v(" "),r("h3",{attrs:{id:"node-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-1"}},[e._v("#")]),e._v(" Node #1")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -d --name redis-c1-master --network host -v /tmp/redis/c1-master:/data redis:5.0.10 redis-server --port 6379:6379 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1\ndocker run -d --name redis-c2-slave1 --network host -v /tmp/redis/c2-slave1:/data redis:5.0.10 redis-server --port 6382:6382 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1 --appendonly yes\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h3",{attrs:{id:"node-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-2"}},[e._v("#")]),e._v(" Node #2")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -d --name redis-c1-slave1 --network host -v /tmp/redis/c1-slave1:/data redis:5.0.10 redis-server --port 6380:6380 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1\ndocker run -d --name redis-c2-master --network host -v /tmp/redis/c2-master:/data redis:5.0.10 redis-server --port 6383:6383 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1 --appendonly yes\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h3",{attrs:{id:"node-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-3"}},[e._v("#")]),e._v(" Node #3")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -d --name redis-c1-slave2 --network host -v /tmp/redis/c1-slave2:/data redis:5.0.10 redis-server --port 6381:6381 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1\ndocker run -d --name redis-c2-slave2 --network host -v /tmp/redis/c2-slave2:/data redis:5.0.10 redis-server --port 6384:6384 --cluster-enabled yes --cluster-node-timeout 5000 --bind 127.0.0.1 --appendonly yes\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("docker run -i --rm --network host redis:5.0 redis-cli --cluster create 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6382 127.0.0.1:6383 --cluster-replicas 1")])])}),[],!1,null,null,null);s.default=a.exports}}]);