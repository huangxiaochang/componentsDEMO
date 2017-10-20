<template>
	<section>
		<h2 class="title">菜单组件 > 时间选择组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			时间选择器同样在对外提供了slot,允许用户自行设置需要的内容，而且该组件的选择面板是有slot中定义的内容进行点击事件触发的，同时在文档document中定义的事件监听的处理程序，如果用户点击的不是选择面板的区域，将会触发关闭选择面板的事件。
			此外 ，组件提供了唯一的对外获取数据的方法，那就是进行value字段的双向绑定。
		</p>
		<p class="content-item">
			在实现的过程中，难点是如果确定用户选择到的时间。本组件的实现的方法是在选择的面板中，定义了一个区块，只用处于该区块中的时分秒都会当成用户选择到的时间，但是由此产生的另一个问题就是，如果可以使用户可以让不同的时分秒处于定义好的区块？由于本组件中的选择面板的高度是固定了，每一项的高度也是固定的，所以采用的方法是获取每一个选择列的滚动条的滚动的位置，由滚动的距离来计算处于选择区块的时分秒，由于要获取滚动条的位置，该组件进行了获取Dom的操作，这是一个缺点。
			用户除了可以通过滚动条来让某一个时分秒处于选择的区块，还可以进行点击时分秒，点击之后会进行滚动条的滚动操作，根据计算应该滚动的距离进行滚动。这样就可以解决了用户选择时分秒的问题。
		</p>
		<p class="content-item">
			但是由于会出现滚动条，而自带的滚动条的样式不是太友好，所以本组件进行滚动条样式的自定义，还有进行了滚条的显示和隐藏，只有鼠标在选择的区域之内，才会出现滚动条，否则隐藏滚动条。这样优化了用户的体验。
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			只需在需要使用的地方引入:&lt;pg-time-pack&gt;/*这里是slot的内容*/&lt;/pg-time-pack&gt;
			比如：
			<pre>
				&lt;pg-time-pack :value.sync="value"&gt;
					&lt;input type="text" class="pg-time-pack" v-model="value" readonly&gt;
				&lt;/pg-time-pack&gt;
			</pre>
		</p>
		<p class="content-item">
			只需要使用sync进行双向绑定组件的value字段，即可获取用户选择到的时间，组件的value字段的类型是String,时间格式如下
			'09:02:00'
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