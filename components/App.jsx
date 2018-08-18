var App = React.createClass( {
	render: function() {
		return (
			<div>
				<h1>Wyszukiwarka GIFów!</h1>
				<p>Znajdź gifa na giphy. Naciśnij enter, aby pobrać kolejne gify.</p>
				<Search/>
				<Gif
					sourceUrl="https://giphy.com/gifs/sauYjWmJJ18xW"
					url="https://media.giphy.com/media/sauYjWmJJ18xW/giphy.gif"
				/>
			</div>
		)
	},
});