<template>
	<section>
		<h2 class="title">菜单组件 > 加载组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			加载动画是一种常用的场景，一般用于请求数据时的等待时间，来提示用户增加加载之后，提升用户的体验，可以使用纯css的方式来实现该动画，也可以是js+css的方式来实现，下面提供了4中类型的加载动画，该组件中的动画效果使用了css的animation属性来进行实现。
			实现各种类型的加载动画的难点在于了解每一种类型加载动画的实现逻辑，比如要实现1/4圆形轨迹的运动，使用到了边框颜色的transparent的属性。运动的原来只要的逻辑是transform的rotate属性。
		</p>
		<h3 class="title-item">使用示例</h3>
		<p class="content-item">
			在实际的项目之后，一般一个项目只使用一种的加载的动画，所以出于减少项目代码量的角度考虑，本组件并没有提供一个类型的选择接口，要是用的时候，用户可以选择以下4中的一种，在组件中复制所需的代码即可。在组件的内部，每一种类型的加载动画所对应的html、css或者js都有相应的注释，对应复制过来即可使用。
		</p>
		
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<!-- <i class="icon iconfont icon-addpeople_fill"></i> -->
		<pg-loading title="拼命加载中"></pg-loading>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">说明</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">title</td><td>动画的提示内容</td><td class="tr-td">string</td><td class="tr-td">''</td>
			</tr>
		</table>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.tabs {
		width: 60%;
	}
	.tr-td {
		padding: 10px;
	}
	.content {
		padding-left: 10px;
		padding-top: 10px;
	}
	.btn-group {
		margin-bottom: 10px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>