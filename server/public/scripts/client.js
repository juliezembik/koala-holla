console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', saveKoala); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koala'
  }).then(function(response){
    console.log('in GET response', response);
    listOfKoala = response;
    for(koala of listOfKoala){
     // append each koala to the DOM
      $('#viewKoalas').append(`<tr>
                                    <td>${koala.name}</td>
                                    <td>${koala.gender}</td>
                                    <td>${koala.age}</td>
                                    <td>${koala.ready_to_transfer}</td>
                                    <td>${koala.notes}</td>
      </tr>`)
    }
  }).catch(function(error){
    alert('Something went wrong, GET method not working on client side');
    console.log('Error in koala GET', error);
  })// end ajax
} // end getKoalas

function saveKoala(){
  // ajax call to server to get koalas
 
}
