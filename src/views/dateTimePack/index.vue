<template>
	<section>
		<h2 class="title">菜单组件 > 日期时间选择组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			其实在完成日历组件，月份选择组件和时间选择组件之后，实现这个组件的话是很简单的，因为实现的逻辑其实是那三个组件实现逻辑的集合。也就是把上面提到的三个组件组合在一起，然后再修改一下即可完成此组件。对于选择面板的弹出和隐藏实现的原来和时间选择组件是一样。组件返回的日期时间的格式如下，'2017-10-23 09:32:00'。组件中也进行了初始化的操作，即如果在slot的内容中如果绑定的value字段的值有初始值的话，在选择的面板中，开始时的选中的值即为该值，否则默认为当前的日期和时间。
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引用的时候，组件中的slot的内容和样式可以自己定义，如下&lt;pg-date-time :value.sync="value"&gt;
				&lt;input type="text" class="pg-time-pack" v-model="value" readonly&gt;
			&lt;/pg-date-time&gt;
			
		</p>
		<p class="content-item">
			该组件弹出的选择的面板是固定宽度的，而且始终是和slot的内容左对齐的。本组件的布局和样式可能不会是和全部的应用场景，但是只要知道它的核心实现原理，组件的布局和样式可以根据实际项目的需要进行重新的自定义，甚至在理解实现的原理之后，可以指定修改部分的逻辑以适合实际项目的需求，比如增加日期可选范围的限制等。在本组件中，并没有实现该部分的逻辑，只是实现了基本的逻辑，以为这样就可以适合大部分的实际项目了，其他的内容可以根据实际的需求进行增加。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item test">
			效果如下
			<pg-date-time :value.sync="value">
				<input type="text" class="pg-time-pack" v-model="value" readonly>
			</pg-date-time>
		</p>
		
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.test {
		margin-bottom: 500px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				value: ""
			}
		}
	}
</script>