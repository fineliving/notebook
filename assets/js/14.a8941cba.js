(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{336:function(n,s,t){"use strict";t.r(s);var a=t(33),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[n._v("#")]),n._v(" npm")]),n._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[n._v("#")]),n._v(" 常用命令")]),n._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" login "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#登陆")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("whoami")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#查看当前使用的用户")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" update xxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#更新模块")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" publish  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#上传包")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" unpublish xxx --force  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#删除远程包")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" rimraf -g "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装删除工具")]),n._v("\n\nrimraf node_modules  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#删除本地文件夹")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" list -g --depth "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#查看本地全局安装过的包")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" uninstall -g xxx   "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#卸载本地全局安装包")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" outdated "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#检查依赖的最新版本")]),n._v("\n\n")])])]),t("h2",{attrs:{id:"注册和登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册和登录"}},[n._v("#")]),n._v(" 注册和登录")]),n._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 先安装nrm，方便进行源切换")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 把源设为官方源")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" i -g nrm\nnrm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ls")]),n._v("\nnrm use "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" adduser "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 按照提示，分别输入用户名，密码，邮箱，并到邮箱里去进行确认")]),n._v("\n\n\n")])])]),t("h2",{attrs:{id:"发布包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布包"}},[n._v("#")]),n._v(" 发布包")]),n._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" login "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 登录，依次输入用户名，密码，邮箱，")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 发布包")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tip1：发布至少要有 index.js  package.json  README.md 三个文件")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tip2：不能发布其他用户发布的包，名称必须唯一。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tip3：每次发布，版本号都必须要变")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" unpublish xxx --force "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 删除上传的包")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tip1: 根据规范，只有在发包的24小时内才允许撤销发布")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tip2：对于测试包，不要污染网站，测试成功后就删除。")]),n._v("\n\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);