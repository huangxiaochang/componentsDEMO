<template>
	<section>
		<h2 class="title">菜单组件 > 步骤条组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			步骤条的应用场景也比较广泛，本组件的步骤条可分为两种类型，一种是水平方向，一种是垂直方向。不管是水平方向还是垂直方向，他们的逻辑是完全一样的，他们的区别只是样式和布局的区别。步骤条组件的目前所属的步骤是由active字段进行控制，字段类型为Number,索引的开始位置为1，默认的情况是微0。步骤条的方向是由于direction字段进行控制，类型为String,取值为horizontal/vertical，默认的情况下是horizontal，当该字段传入的值不是其中一个的话，将默认为垂直的方向。data字段是一个Array类型的。每一项是一个步骤所需的数据，包括title标题字段和description描述字段。其中title，description为可选字段。数据结构如下：
			<pre>
				data: [
					{
						title: '步骤1',
						description: '这是步骤1'
					},
					{
						title: '步骤2',
						description: '这是步骤2'
					},
					{
						title: '步骤3',
						description: '这是步骤3这是步骤'
					}
				]
			</pre>

		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			实际使用方法如下：
			&lt;pg-steps :steps="data" :active="active" :direction="direction"&gt;&lt;/pg-steps&gt;
			
		</p>
		<p class="content-item">
			步骤的类型分为三类，三类都有不同的样式进行区分。类型1：在目前所处的步骤之前的步骤的样式的字体为绿色，圆圈中的文字为白色。类型2：目前步骤的下一步的样式为圆圈的背景为灰色，标题和描述信息为黑色。类型3：除上述类型1和类型2之外的类型，圆圈没有背景，边框为灰色，标题和描述信息文字为灰色。在区分这三种类型的样式的逻辑实现上，使用了vue的动态类:class的方法，即根据不同的条件，为某一个元素动态添加类。本组件使用的条件即active字段。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<div class="btn-group">
			<button @click="pre">上一步</button>
			<button @click="next">下一步</button>
			<button @click="changeDirection">垂直方向</button>
		</div>
		<pg-steps :steps="data" :active="active" :direction="direction"></pg-steps>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">data</td><td class="tr-td">array</td><td class="tr-td">[]</td>
			</tr>
			<tr>
				<td class="tr-td">active</td><td class="tr-td">number</td><td class="tr-td">0</td>
			</tr>
			<tr>
				<td class="tr-td">direction</td><td class="tr-td">string</td><td class="tr-td">horizontal/vertical</td>
			</tr>
		</table>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.btn-group {
		margin-bottom: 10px;
	}
	.tr-td {
		padding: 10px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				data: [
					{
						title: '步骤1',
						description: '这是步骤1'
					},
					{
						title: '步骤2',
						description: '这是步骤2'
					},
					{
						title: '步骤3',
						description: '这是步骤3这是步骤'
					}
				],
				styles: {},
				active: 1,
				direction: 'horizontal'//horizontal/vertical
			}
		},
		methods: {
			pre() {
				if (this.active <= 0) {
					this.active = 0
				}
				else {
					this.active--
				}
			},
			next() {
				if (this.active >= this.data.length) {
					this.active = this.data.length
				}
				else {
					this.active++
				}
			},
			changeDirection() {
				if (this.direction === 'horizontal') {
					this.direction = 'vertical'
				}
				else {
					this.direction = 'horizontal'
				}
			}
		}
	}
</script>