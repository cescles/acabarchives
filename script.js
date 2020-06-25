window.addEventListener('load', function() {
    let list= ["1267968926761312256","1267960241804763136", "1267726477275148288",
    "1267688320735166465"];
	let options = {theme: 'dark'};
	let element = document.getElementById('tweet-container');

	list.forEach(id => {
		twttr.widgets.createTweet(id,element,options);
	});
});