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
			lastClickMenu: {},//记录最后点击的跳转菜单，便于样式的控制
		}
	},
	mounted() {
		this.addIsShowToMenus()
	},
	methods: {
		// 改变传来的菜单列表menus,为每一项添加isShow,isActive字段，进行展开和收缩的控制
		addIsShowToMenus() {
			this.menus.forEach((menus) => {
				menus.isShow = false
	  			menus.isActive = false
				if (menus.children) {
					for (let subMenu of menus.children) {
						subMenu.isShow = false
						menus.isActive = false
						if (subMenu.children) {
							for (let item of subMenu.children) {
								item.isShow = false
								menus.isActive = false
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
				// 第一个点击的菜单
				if (this.lastClickMenu != null) {
					this.lastClickMenu.isActive = false
				}
				this.lastClickMenu = menu
				menu.isActive = true
				this.$router.push({
					path: menu.path
				})
			}
			this.$forceUpdate() // 强制刷新dom
		}
	}

}