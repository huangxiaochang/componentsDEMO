<template>
	<section class="month-select">
		<h2 class="title">菜单组件 > 年月面板组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			年月选择的组件的逻辑比较简单,月份是固定的，年份是可变的。组件对外提供了内容的分派slot,允许在引用的地方进行自定义分派的内容。面板的弹出触发点是分派的内容，同样在文档对象document设置了监听事件，如果点击的不是分派的内容，将会关闭面板。对于分派的内容，用户可以自行定义它的样式。
			组件的对外数据接口是通过双向绑定来实现的。通过双向绑定value字段，即可获取到用户选择到的内容。使用的方法见示例，通过data中定义的time字段即可获取到数据，数据的格式形如： '2017-09'
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
		在页面中引入
			<pre>
				&lt;pg-month-select :value.sync="time" class="pg-month">
					&lt;input type="text" class="input-item" readonly v-model="time">
				&lt;/pg-month-select>
			</pre>
			pg-month-select :value.sync="time"&gt;&lt;/pg-month-select&gt;
			同时可以通过传入的styles对象对组件的样式进行调整，比如传入
			<pre>
				styles: {
					'width': '60%'
				}
			</pre>
			来设置组件的宽度
		</p>
		
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<pg-month-select :value.sync="time" class="pg-month">
			<input type="text" class="input-item" readonly v-model="time">
		</pg-month-select>
	</section>
</template>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.month-select {
		padding-bottom: 500px;
	}
	.pg-month {
		width: 50%;
	}
	.input-item {
		width: 220px;
		height: 28px;
		line-height: 28px; 
		padding: 0 5px; 
		border: 1px solid #e1e1e1; 
		color: #999;
	}
</style>