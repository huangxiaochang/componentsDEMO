export default {
	name: 'PgSteps',
	props: {
		steps: {
			type: Array,
			default() {
				return []
			}
		},
		active: {
			type: Number,
			default() {
				return 0
			}
		},
		direction: {
			type: String,
			default() {
				return 'horizontal'
			}
		}
	},
	methods: {
		
	}
}