<template>
	<ul class="menu-wrape">
		<li v-for="menu in menus" class="menu-item">
			<!-- <span class="menu-name" :class="[menu.isActive ? 'active' : '', menu.isOpen ? 'open' : 'close']" @click="showSubMenu(menu)">{{menu.name}}</span> -->
			<div class="menu-name" :class="[menu.isActive ? 'active' : '']" @click="showSubMenu(menu)">
				<span>{{menu.name}}</span>
				<span class="open" v-if="menu.isOpen">></span>
				<span class="close" v-else>></span>
			</div>
			
			<transition name="fade">
			<ul class="sub-menu" v-if="menu.isShow && menu.children.length !== 0">
				<li class="sub-menu-item" v-for="subMenu in menu.children">
					<!-- <span class="menu-name sub-name" :class="[subMenu.isActive ? 'active' : '', {'open': subMenu.children && subMenu.isOpen} ,{'close': subMenu.children && !subMenu.isOpen}]" @click="showSubMenu(subMenu)">{{subMenu.name}}</span> -->
					<div class="menu-name sub-name" :class="[subMenu.isActive ? 'active' : '']" @click="showSubMenu(subMenu)">
						<span>{{subMenu.name}}</span>
						<span class="open" v-if="subMenu.children && subMenu.isOpen">></span>
						<span class="close" v-if="subMenu.children && !subMenu.isOpen">></span>
					</div>
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
		// background-color: #2894ff;
		// color: #fff;
		color: #2894ff;
	}
	// 控制三角形的展开或收缩
	.open {
		float: right;
		display: inline-block;
		transform: rotate(-90deg);
		margin-right: 25px;
	}
	.close {
		float: right;
		display: inline-block;
		transform: rotate(90deg);
		margin-right: 25px;
	}
	/*.close:after {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 45%;
		right: 10px;
		border-top: 8px solid #1F2D3D;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
	}
	.open:after {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 45%;
		right: 10px;
		border-left: 8px solid #1F2D3D;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
	} */
	// 菜单标题
	.menu-name {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
		box-sizing: border-box;
		position: relative;
		&:hover {
			// background-color: #949449;
			// color: #c4ef12;
			color: #EE9A49;
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
