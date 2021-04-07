var form = document.getElementById('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    base_url = "https://asia-northeast2-yuyuyui-script-search-20200915.cloudfunctions.net/generate-image-churutto01";
    image_name = "background1.jpg";
    text = document.form.text.value;
    image_url = base_url + "?image_name=" + encodeURIComponent(image_name) + "&text=" + encodeURIComponent(text);
    $("#image").attr("src", image_url);
    $("#image").attr("alt", text);
});
