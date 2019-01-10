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
    url: '/koalas'
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

// Post request for adding a koala to the database
function saveKoala(){
  // ajax call to server to get koalas
  // variable holding the koala data from input fields
  let koalasToServer = { name: $('#nameIn').val(),
                         age: $('#ageIn').val(),
                         gender: $('genderIn').val(),
                         transfer: $('readyForTransferIn').val(),
                         notes: $('#notesIn').val()
                       }
  $.ajax({ method: 'POST',
           url: '/koalas',
           data: koalasToServer
        }).then((result) =>{
          console.log(result);
          getKoalas();
        }).catch((errorMessage) => {
          // alert telling the user no record was created
          alert(`There was a problem with adding your koala`);
          console.log(`Error message: ${errorMessage}`);
        });
} // end saveKoalla
