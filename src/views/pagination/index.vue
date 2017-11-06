<template>
	<section>
		<h2 class="title">菜单组件 > 分页组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			分页组件广泛应用在项目的多个地方，在数据多的时候，可以按页进行加载，这样不仅优化了一次请求接口获取太多数据造成卡顿的性能问题，也不会造成出现长距离的滚动条。
			此组件在页面数和当前页发什么变化的时候，都会触发事件，可以通过该事件，获取到当前的页面数和当前页，然后进行下一步的操作，比如进行数据的请求。该组件添加了判断的条件，只有当总的条数不为0的时候，才会显示。
		</p>
		<p class="content-item">
			组件提供了显示每页条数和跳转到指定页数的选择接口，分别对应isShowSize，isGoTo字段，默认为true，即显示。如果不想提供这部分的功能，可以传入false进行隐藏。
		</p>
		<h3 class="title-item">使用示例</h3>
		<p class="content-item">
			在实际的应用中引入&lt;pg-pagination :size="pageSize" :total="total" :isShowSize="isShowSize" :isGoTo="isGoTo" @pageSizeChange="pageSizeChange" @pageChange="pageChange"&gt;&lt;/pg-pagination&gt;
		</p>
		<p class="content-item">
			组件的难点在与页面数多的时候，进行页面数的隐藏和显示的控制，本组件默认提供7个可看到的页数，其中首页和尾页是固定的，中间的5页是动态的。本组件中，采用根据目前页active进行判断获取动态页列表，即获取active的附近5页。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		
		
		<pg-pagination :size="pageSize" :total="total" :isShowSize="isShowSize" :isGoTo="isGoTo" @pageSizeChange="pageSizeChange" @pageChange="pageChange"></pg-pagination>

		<p><span class="pageSize">当前页数:{{pageSize}}</span><span>当前页:{{page}}</span></p>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">说明</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">size</td><td>每页条数</td><td class="tr-td">number</td><td class="tr-td">15</td>
			</tr>
			<tr>
				<td class="tr-td">total</td><td>总的条数</td><td class="tr-td">number</td><td class="tr-td">0</td>
			</tr>
			<tr>
				<td class="tr-td">pageSizeChange</td><td>每页条数发生改变的时候，触发的事件</td><td class="tr-td">event</td><td class="tr-td">当前选中的每页条数</td>
			</tr>
			<tr>
				<td class="tr-td">pageChange</td><td>当前页发生变化的时候，触发的事件</td><td class="tr-td">event</td><td class="tr-td">当前页</td>
			</tr>
			<tr>
				<td class="tr-td">isShowSize</td><td>是否显示每页条数的选择</td><td class="tr-td">boolean</td><td class="tr-td">true</td>
			</tr>
			<tr>
				<td class="tr-td">isGoTo</td><td>是否显示跳转的功能</td><td class="tr-td">boolean</td><td class="tr-td">true</td>
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
		margin-bottom: 20px;
	}
	.pageSize {
		display: inline-block;
		margin-left: 10px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				pageSize: 15,
				total: 100,
				page: 1,
				isShowSize: true,
				isGoTo: true
			}
		},
		methods: {
			pageSizeChange(val) {
				this.pageSize = val
			},
			pageChange(val) {
				this.page = val
			}
		}
	}
</script>