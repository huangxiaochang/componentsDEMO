<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<!-- <div> -->
			<header class="header">
				welcome to huangxiaochang vue-components-demo project
			</header>
			<div class="container">
				<aside class="nav-wrape">
					<pg-menu :menus="menuList"></pg-menu>
				</aside>
				<section class="content-wrape">	
					<transition name="fade">
						<router-view></router-view>
					</transition>
				</section>
			</div>
		<!-- </div> -->
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	// .active {
	// 	background-color: yellow;
	// }
	// .router-link-active {
	// 	font-size: 20px;
		// background-color: red;
	// }
	// .router-link-exact-active {
	// 	background-color: red;
	// }
	.header {
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		background-color: rgba(205, 215, 225, 0.5);
		font-size: 18px;
	}
	.container {
		width: 100%;
		.nav-wrape {
			width: 200px;
			float: left;
		}
		.content-wrape {
			padding-left: 20px;
			overflow-y: auto;
		}
	}
	.fade-enter-active {
        animation: fade-in 1s;
    }
    .fade-leave-active {
        opacity: 0;
    }
    @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
</style>
<script type="text/babel">
	import { menuList } from 'src/data/menu.js'
	export default {
		data() {
			return {
				menuList: []
			}
		},
		mounted() {
			this.menuList = menuList
		}
	}
</script>