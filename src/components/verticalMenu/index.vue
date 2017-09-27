<template>
	<ul class="menu-wrape">
		<li v-for="menu in menus" class="menu-item">
			<span class="menu-name" :class="menu.isActive ? 'active' : ''" @click="showSubMenu(menu)">{{menu.name}}</span>
			<transition name="fade">
			<ul class="sub-menu" v-if="menu.isShow && menu.children.length !== 0">
				<li class="sub-menu-item" v-for="subMenu in menu.children">
					<span class="menu-name sub-name" :class="subMenu.isActive ? 'active' : ''" @click="showSubMenu(subMenu)">{{subMenu.name}}</span>
					<transition name="fade">
					<ul class="sub-menu sub-sbu-menu" v-if="subMenu.isShow && subMenu.children.length !== 0">
						<li class="sub-menu-item" v-for="item in subMenu.children">
							<span class="menu-name sub-sub-name" :class="item.isActive ? 'active' : ''" @click="showSubMenu(item)">{{item.name}}</span>
						</li>
					</ul>
					</transition>
				</li>
			</ul>
			</transition>
		</li>
	</ul>
</template>

<style type="stylesheet/less" lang="less" scoped>
	li {
		list-style: none;
	}
	.menu-item {
		background-color: #a5a552;
	}
	.active {
		background-color: #2894ff;
		color: #fff;
	}
	// 菜单标题
	.menu-name {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
		box-sizing: border-box;
		&:hover {
			background-color: #949449;
			color: #c4ef12;
		}
		&.sub-name {
			padding-left: 25px;
		}
		&.sub-sub-name {
			padding-left: 40px;
		}
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
		width: 100%;
		padding-left: 0;
		background-color: #cdcd9a;
		box-sizing: border-box;
		&.sub-sbu-menu {
			background-color: #e8e8d0;
			box-sizing: border-box;
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
        100% { opacity: 100% }
    }

</style>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
