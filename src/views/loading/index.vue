<template>
	<section>
		<h2 class="title">菜单组件 > 加载组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			
			<pre>
				
			</pre>

		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			实际使用方法如下：
			&lt;pg-steps :tabsList="tabsList" :active="active" class="tabs" :type="type" :styles="styles" @hanlderClick="hanlderClick"&gt;
				&lt;div&gt;&lt;/div&gt;
			&lt;/pg-steps&gt;
			
		</p>
		<p class="content-item">
			如下: 可以根据不同的订单状态来获取订单列表，然后更新slot中的内容
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		
		<pg-loading ></pg-loading>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">说明</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">tabsList</td><td>标签页项</td><td class="tr-td">array</td><td class="tr-td">[]</td>
			</tr>
			<tr>
				<td class="tr-td">active</td><td>开始时所处的标签页</td><td class="tr-td">number</td><td class="tr-td">0(第一个把标签页)</td>
			</tr>
			<tr>
				<td class="tr-td">type</td><td>标签页的类型(basic/card)</td><td class="tr-td">string</td><td class="tr-td">basic</td>
			</tr>
			<tr>
				<td class="tr-td">styles</td><td>样式集合</td><td class="tr-td">object</td><td class="tr-td">{}</td>
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