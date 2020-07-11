const loadData = (url) => {
    $.get(url, data => {
        let photosRow = $("#photos-row");
        for (let i = 0; i < 101; i++) {
            photosRow.append(`<div class="photo"><img src="https://farm${data.photos.photo[i].farm}.staticflickr.com/${data.photos.photo[i].server}/${data.photos.photo[i].id}_${data.photos.photo[i].secret}.jpg"/></div>`);
        };
    });
};

$("#tag-form").on("submit", event => {
    event.preventDefault();
    $("#photos-row").empty();

    var tag = $("#tag-name").val();
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f93d0daa4c0af5da43c95e700797464&tags=${tag}&format=json&nojsoncallback=1`;

    loadData(url);

    $("#tag-name").val("")
});