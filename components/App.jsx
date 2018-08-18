

var GIPHY_PUB_KEY = "BaLdsmYkdzzsGxqxtPJfMcFMBDam96S4";
var GIPHY_API_URL = "http://api.giphy.com";

var App = React.createClass( {
	getInitialState: function() {
		return {
			sourceUrl: '',
			url: '',
			isLoading: false
		}
	},

	handleKeyUp: function(a) {
		if(a.length <= 2) {
			return
		}
		console.log(a);
		var self = this; 
		this.getGif(a, function(gif) {
			console.log(gif);
			self.setState({
				sourceUrl: gif.sourceUrl,
				url: gif.url
			})
		});
	},

	getGif: function(searchingText, callback) {
		var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText).data;
				var gif = {
					url: data.fixed_width_downsampled_url,
					sourceUrl: data.url
				};
				callback(gif);
			}
		};
		xhr.send();
	},

	render: function() {
		return (
			<div>
				<h1>Wyszukiwarka GIFów!</h1>
				<p>Znajdź gifa na giphy. Naciśnij enter, aby pobrać kolejne gify.</p>
				<Search
					handleKeyUp = {this.handleKeyUp}
				/>
				<Gif
					sourceUrl = {this.state.sourceUrl}
					url = {this.state.url}
					isLoading = {this.state.isLoading}
				/>
			</div>
		)
	},
});