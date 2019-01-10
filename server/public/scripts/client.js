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
    

  }).catch(function(error){
    alert('Something went wrong, GET method not working on client side');
    console.log('Error in koala GET', error);
    
  })// end ajax
  
} // end getKoalas

function saveKoala(){
  // ajax call to server to get koalas
 
}
