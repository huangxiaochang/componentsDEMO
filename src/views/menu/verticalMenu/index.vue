<template>
	<section>
		<h2 class="title">菜单组件 > 垂直菜单</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			这个垂直的菜单组件可一般用于后台管理，组件接受一个数组作为参数，此菜单可以是二级菜单，也可以是三级菜单，这取决于你传入的这个数组的数据结构，如果只是嵌套一层数组，那么他会是一个二级的菜单，但是如果嵌套了两级数组，那么他会是一个三级菜单。不过他最多的菜单层级只能是三级。对于菜单的颜色样式，可进行修改。
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引入&lt;pg-menu :menus="menuList"&gt;&lt;/pg-menu&gt;
			然后menuList可以传入
			<pre>
			[
				{
			        path: '/',
			        name: '订单管理',
			        iconCls: '',
			        children: [
			            {
			                path: '/order',
			                name: '订单管理首页',
			                iconCls: ''
			            },
			            {
			                path: '/orderList',
			                name: '订单列表',
			                iconCls: '',
			                children: [
			                    {
			                        path: '/orderDetail',
			                        name: '订单详情',
			                        iconCls: '',
			                    }
			                ]
			            },
			        ]
			    }
			]
			</pre>
			便可以
		</p>
		<p class="content-item">
			如果在项目中使用了iconfont,只需要传入相应的字体图标的类名到iconCls字段即可显示，
			这样的菜单可以是静态的，也可以是动态的菜单，既可以从请求接口获取。动态的菜单可以结合账号和角色进行系统的权限配置
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果见项目左侧的菜单
		</p>
	</section>
</template>
<style type="text/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
</style>
<script type="text/babel">
	export default {
		// beforeRouteEnter(to,from,next) {
		// 	console.log(6)
		// 	next()
		// }
	}
</script>