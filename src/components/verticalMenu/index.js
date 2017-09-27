export default {
	name: 'PgMenu',
	props: {
		menus: {
			type: Array,
			default: function() {
				return []
			}
		}
	},
	data() {
		return {
			
		}
	},
	mounted() {
		this.addIsShowToMenus()
	},
	methods: {
		// 改变传来的菜单列表menus,为每一项添加isShow字段，进行展开和收缩的控制
		addIsShowToMenus() {
			this.menus.forEach((menus) => {
				menus.isShow = false
				if (menus.children) {
					for (let subMenu of menus.children) {
						subMenu.isShow = false
						if (subMenu.children) {
							for (let item of subMenu.children) {
								item.isShow = false
								
							}
						}
					}
				}
			})
		},
		// 点击标题时，展开或者收缩菜单项
		showSubMenu(menu) {
			// 如果有子菜单的话，展开或者收缩，否则跳转到相应的路由
			if (menu.children && (menu.children.length !== 0)) {
				menu.isShow = !menu.isShow
			}
			else {
				console.log('跳转')
				this.$router.push({
					path: menu.path
				})
			}
			this.$forceUpdate() // 强制刷新dom
		}
	}

}