<template>
	<section>
		<h2 class="title">菜单组件 > 标签页组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			标签页中的内容采用slot的形式，用户可以自行定义其中的内容，点击标签的时候，会触发hanlderClick事件，通过该事件，可以获取到点击的标签，然后可以根据获取得内容进行处理，如数据接口的请求，拿到数据之后，更新slot中的内容。
			<br>
			本组件的标签页有两种模式，一种是基础的类型，另一种是卡片的类型，默认情况下是基础的类型，
			可以通过type一段来决定使用哪一种类型。
			<pre>
				tabsList: [
					{
						title: '第一页',
						id: 1
					},
					{
						title: '第二页',
						id: 2
					},
					{
						title: '第三页',
						id: 3
					},
					{
						title: '第四页',
						id: 4
					}
				]
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
		<div class="btn-group">
			<button @click="changeType">{{typeDesc}}</button>
		</div>
		<pg-tabs :tabsList="tabsList" :active="active" class="tabs" :type="type" :styles="styles" @hanlderClick="hanlderClick">
			<div class="content">{{content}}</div>
		</pg-tabs>

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
				tabsList: [
					{
						title: '待付款',
						id: 1
					},
					{
						title: '已付款',
						id: 2
					},
					{
						title: '已取消',
						id: 3
					},
					{
						title: '已完成',
						id: 4
					}
				],
				active: 1,//默认的标签页
				type: 'basic',
				typeDesc: '卡片',
				styles: {
					width: '90%'
				},
				content: '第二页'
			}
		},
		methods: {
			// 标签页点击
			hanlderClick(item) {
				this.content = item.title
			},
			// 标签页类型
			changeType() {
				if (this.type === 'card') {
					this.type = 'basic'
					this.typeDesc = '卡片'
				}
				else {
					this.type = 'card'
					this.typeDesc = '基础'
				}
			}
		}
	}
</script>