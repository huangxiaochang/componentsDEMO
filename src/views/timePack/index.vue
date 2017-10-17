<template>
	<section>
		<h2 class="title">菜单组件 > 无限级树形组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			无限级树形组件的应用场景也比较广泛，动态菜单，动态目录，分销等级等等。它的难点在于无限级，即它是动态的，所以没有固定的HTML模板，如果是使用Rect来实现，这个不是一个很大的问题，当然对于vue来说，使用render的渲染函数也可以解决动态模板的问题，但是它的逻辑很复杂，对于事件的处理也会加重逻辑的复杂性；然而，幸运的是，vue提供了递归的组件模式可以很好地解决这个问题。所有本组件正是采用vue的递归组件的方法来实现了无限级的树形结构。
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引用该组件其实和其他的组件没什么不同，它的递归组件的实现方法是在组件的内部实现的，所以引用的时候，像正常的组件那样进行引用即可&lt;pg-tree :treeData="treeDate" :styles="styles"&gt;&lt;/pg-tree&gt;
			
		</p>
		<p class="content-item">
			在实际的项目中使用的时候，每一个层级的treeData可以是通过请求接口得到的数据，本组件模拟使用了一个本地的treeData的json数据。实际应用中，可以在组件的内部进行接口的请求得到treeData数据。样式也可以自行的修改，对于展开和关闭的按钮，可以使用图片或者字体图标。或者重写符合自己项目的无限级树形组件，只需要知道使用递归组件的方法来实现相关的逻辑即可，但是在使用递归组件的时候，有一点需要特别的注意，那就是递归组件的终止的条件，可以使用v-if进行设置，如果没有设置递归的终止条件，会出现调用栈已满的错误信息。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>

		<pg-time-pack :value.sync="value">
			<input type="text" class="pg-time-pack" v-model="value" readonly>
		</pg-time-pack>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				value: ''
			}
		}
	}
</script>