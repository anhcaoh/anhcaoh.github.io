var data = [];

var urlPhotosFromFB = "https://graph.facebook.com/3076640354955/photos?summary=true&access_token=CAACEdEose0cBAOnxjTeQqldt6pIe167pJJxPXBcTChWALxr2pBdtYK9ZAWZC8EbZBobmFBc2Uaj99rod8j1UOlh8xTqe0rsIiZBDgfJ7OsffNq2iesZBII7PIRvNocQOSkVz1PeHUf9i73pmEHoMKL8KhuyLbhpPLKZB6PzRMeZBN73JQIsEA2fjWDZC8poeXjZBGuwTV40aKQwZDZD";

var CommentBox = React.createClass({
	componentDidMount: function(){
		$.ajax({
			url: urlPhotosFromFB,
			dataType: "json",
			cache: false,
			success:function(data){
				this.props.data = data.data[0].images;
			}.bind(this),
			error: function( xhr, status, error ){
				// console.log(error);
			}.bind(this)
		});
	},
	render: function(){

		return (
			<section className="collections">
			<img data={this.props.data.source} src={this.props.data.source} />
			</section>
		)
	}
});
  
$(document).ready(function(){
	React.render(<CommentBox data={data}/>, document.getElementById("content") );
});