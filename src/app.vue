<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<div>
			<header class="header">
				welcome to huangxiaochang vue-components-demo
			</header>
			<div class="container">
				<aside class="nav-wrape">
					<pg-menu :menus="menuList"></pg-menu>
				</aside>
				<section class="content-wrape">
					<router-view></router-view>
				</section>
			</div>
		</div>
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	.header {
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		background-color: rgba(205, 215, 225, 0.5);
		font-size: 18px;
	}
	.container {
		position: relative;
		width: 100%;
		.nav-wrape {
			display: inline-block;
			width: 200px;
			vertical-align: top;
		}
		.content-wrape {
			position: absolute;
			display: inline-block;
			top: 0;
			left: 230px;
			right: 0;
			vertical-align: top;
			overflow-y: auto;
		}
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