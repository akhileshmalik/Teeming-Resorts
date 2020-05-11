$('#resort-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $.get('/resorts?' + search, function(data) {
    $('#resort-grid').html('');
    data.forEach(function(resort) {
      $('#resort-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail">
            <img src="${ resort.image }">
            <div class="caption">
              <h4>${ resort.name }</h4>
            </div>
            <p>
              <a href="/resorts/${ resort._id }" class="btn btn-primary">More Info</a>
            </p>
          </div>
        </div>
      `);
    });
  });
});

$('#resort-search').submit(function(event) {
  event.preventDefault();
});