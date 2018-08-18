var App = React.createClass( {
	render: function() {
		return (
			<div>
				<h1>Wyszukiwarka GIFów!</h1>
				<p>Znajdź gifa na giphy. Naciśnij enter, aby pobrać kolejne gify.</p>
				<Search/>
				<Gif/>
			</div>
		)
	},
});