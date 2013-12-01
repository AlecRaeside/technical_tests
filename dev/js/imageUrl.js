app.factory("imageUrl", function() {
	var api = {
		getImageUrl: function(imageId, width, height) {
			return "http://res.cloudinary.com/wlabs/image/fetch/c_pad,f_auto,h_" + height + ",w_" + width + "/http://res.cloudinary.com/wlabs/image/upload/"+ imageId +".png";
		}
	}
	return api;
});