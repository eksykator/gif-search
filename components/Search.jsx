var Search = React.createClass( {
	getInitialState: function() {
		return {
			value: ""
		};
	},

	handleChange: function(event) {
		this.setState({
			value: event.target.value
		}) 
	},

	render: function() {
		return ( <input 
					type='text' 
					placeholder='Tutaj wpisz wyszukiwaną frazę' 
					value={this.state.value}
					onChange={this.handleChange}
				/>
		)
	},
});