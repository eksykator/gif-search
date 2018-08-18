var Gif = React.createClass( {
	propTypes: {
		sourceUrl: React.PropTypes.string,
		url: React.PropTypes.string
	},

	render: function() {
		return (
			<a href={this.props.sourceUrl}>
				<img
				src={this.props.url}
				/>
			</a>
		)
	},
});