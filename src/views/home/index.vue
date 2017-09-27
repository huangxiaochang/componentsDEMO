<template>
	<section>
		<h2 class="title">首页</h2>
			<p class="content-item">
				欢迎来到本人的GitHub发布的项目
			</p>
		<h3 class="title-item">项目介绍</h3>
			<p class="content-item">
				背景: 近几年，使用vue框架进行webapp开发的公司越来越多，其中vue的一个特性就是可以组件化。
				对于整个项目来说，可以重用的部分可以组件化，组件化不仅可以减少项目的体积、重用代码，
				还可以提高开发的效率，各项目成员用到的时候进行引入使用即可。
			</p>
			<p class="content-item">
				目的:
				本人进行本项目的目的是编写尽量适合多数情况的组件，在工作中如有适合的情景，可以进行直接的引用或者进行改进以适合项目的需求之后再进行使用。这样不仅可以提高工作的效率，在进行本项目的同时，也会加深对组件化的了解和提高编写项目组件的能力。
			</p>
			<p class="content-item">
				项目技术栈:
				此项目采用nodejs+webpack进行配置构建的，项目的js框架是vue2.0,此项目并没有使用UI框架，使用的是less的css预编译实现样式的控制
			</p>
		<h3 class="title-item">使用方法</h3>
			<p class="content-item">
				使用的方法很简单，直接复制代码过去，按照说明传递所需的参数即可，当然可能这里的组件并不是能够适合所有的业务逻辑，不过也可进行组件的修改之后再使用。
			</p>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
</style>
<script type="text/babel">
	export default {

	}
</script>