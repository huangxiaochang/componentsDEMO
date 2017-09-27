<template>
	<div id="app">
		<header class="header">
			welcome to huangxiaochang vue-components-demo project
		</header>
		<div class="container">
			<div class="nav-wrape">
				<pg-menu :menus="menuList"></pg-menu>
			</div>
			<div class="content-wrape">
				<router-view></router-view>
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
			height: 600px;
			background-color: rgba(105, 115, 125, 0.5);
			vertical-align: top;
		}
		.content-wrape {
			position: absolute;
			display: inline-block;
			top: 0;
			left: 210px;
			right: 0;
			height: 600px;
			vertical-align: top;
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