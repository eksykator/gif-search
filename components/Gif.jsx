var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

var Gif = React.createClass( {
	propTypes: {
		sourceUrl: React.PropTypes.string,
		url: React.PropTypes.string,
		isLoading: React.PropTypes.bool.isRequired
	},

	render: function() {
		return (
			<a href={this.props.sourceUrl}>
				<img src={this.props.isLoading ? GIPHY_LOADING_URL : this.props.url} />
			</a>
		)
	},
});