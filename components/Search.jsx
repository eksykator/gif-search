var Search = React.createClass( {
	propTypes: {
		handleKeyUp: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			value: ""
		};
	},

	handleChange: function(event) {
		this.setState({
			value: event.target.value
		});

		this.props.handleKeyUp(event.target.value)
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