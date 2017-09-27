<template>
	<ul class="menu-wrape">
		<li v-for="menu in menus" class="menu-item">
			<span class="menu-name" @click="showSubMenu(menu)">{{menu.name}}</span>
			<ul class="sub-menu" v-if="menu.isShow && menu.children.length !== 0">
				<li class="sub-menu-item" v-for="subMenu in menu.children">
					<span class="menu-name" @click="showSubMenu(subMenu)">{{subMenu.name}}</span>
					<ul class="sub-menu" v-if="subMenu.isShow && subMenu.children.length !== 0">
						<li class="sub-menu-item" v-for="item in subMenu.children">
							<span class="menu-name" @click="showSubMenu(item)">{{item.name}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>

<style type="stylesheet/less" lang="less" scoped>
	li {
		list-style: none;
	}
	// 菜单标题
	.menu-name {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		padding-left: 8px;
	}
	.menu-wrape {
		margin: 0;
		padding: 0;
		cursor: pointer;
		.menu-item {
			
		}
	}
	// 子菜单的样式
	.sub-menu {
		padding-left: 16px;
	}
</style>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
