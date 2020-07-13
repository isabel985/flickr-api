const loadData = (url) => {
    $.get(url, data => {
        let photosRow = $("#photos-row");
        let pictures = data.photos.photo

        pictures.map((item) => {
            if (item.farm == 0) {
                photosRow.append(`<div class="photo"></div>`)
            } else {
                photosRow.append(`<div class="photo"><img src="https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg"/></div>`);
            }

        })
    });
};

$("#tag-form").submit(event => {
    event.preventDefault();
    $("#photos-row").empty();

    var tag = $("#tag-name").val();
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f93d0daa4c0af5da43c95e700797464&tags=${tag}&format=json&nojsoncallback=1`;

    loadData(url);
    $("#tag-name").val("")
});