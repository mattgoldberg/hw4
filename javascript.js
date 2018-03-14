jQuery(function() {
  let url1 = "http://api.nytimes.com/svc/books/v3/reviews.json?isbn=9781446484197&api-key=e83a26a09b3e426b9775a3df555e38ae";
  $.get(url1, function(data) {
    console.log("nytimes data");
    console.log(data);
    $(".col-sm-4.nytimes").empty();
    for (let i=0; i<data.results.length; i++) {
      let book = data.results[i];
      let html = '<div class="row">';
      html = html + '<div class="card">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + book.book_title + '</h4>';
      html = html + '<p class="card-text">' + book.book_author + '</p>';
      html = html + '</div></div></div>';
      $(".col-sm-4.nytimes").append(html);
    }
    $(".col-sm-4.nytimes").fadeIn(2000);
  });
  let url2 = "http://api.openweathermap.org/data/2.5/weather?appid=809641918c27565e40980e3407c5042d&lat=41.8853&lon=87.6215";
  $.get(url2, function(data) {
    console.log("weatherdata");
    console.log(data);
    $(".col-sm-4.openweather").empty();
    for (let i=0; i<data.weather; i++) {
      let weather = data.weather.main[i];
      let html = '<div class="row">';
        html = html + '<div class="card">';
        html = html + '<div class="card-body">';
        html = html + '<h4 class="card-title">' + main.grnd_level + '</h4>';
        html = html + '<p class="card-text">' + main.humidity + '</p>';
        html = html + '</div></div></div>';
      $(".col-sm-4.openweather").append(html);
    }
    $(".col-sm-4.openweather").fadeIn(2000);
  });
  let url3 = "https://api.nytimes.com/svc/news/v3/content/content.json&api-key=e83a26a09b3e426b9775a3df555e38ae";
  $.get(url3, function(data) {
    console.log("nytimes data 2");
    console.log(data);
    $(".col-sm-4.nytimes2").empty();
    for (let i=0; i<data.results.length; i++) {
      let article = data.results[i];
      let html = '<div class="row">';
      html = html + '<div class="card">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + article.title + '</h4>';
      html = html + '<p class="card-text">' + article.abstract + '</p>';
      html = html + '</div></div></div>';
      $(".col-sm-4.nytimes2").append(html);
    }
    $(".col-sm-4.nytimes2").fadeIn(2000);
  });
});
