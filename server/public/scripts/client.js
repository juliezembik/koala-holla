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
  $( '#viewKoalas').on( 'click', '.transfer', transferKoala);
  $( '#viewKoalas').on( 'click', '.delete', deleteKoala);

}

function getKoalas(){
  console.log( 'in getKoalas' );
  $('#viewKoalas').empty();
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log('in GET response', response);
    let listOfKoala = response;
    for(koala of listOfKoala){
     // append each koala to the DOM
      $('#viewKoalas').append(`<tr>
                                    <td>${koala.name}</td>
                                    <td>${koala.age}</td>
                                    <td>${koala.gender}</td>
                                    <td>${koala.ready_to_transfer}</td>
                                    <td>${koala.notes}</td>
                                    <td><button type="button" class="transfer" data-koalaready=${koala.id}>Ready to transfer</button></td>
                                    <td><button type="button" class="delete" data-koaladelete=${koala.id}>Delete</button></td>
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
                         gender: $('#genderIn').val(),
                         ready_to_transfer: $('#readyForTransferIn').val(),
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
    console.log(`Error message in POST: ${errorMessage}`);
  });
} // end saveKoalla

// function for changing the transfer koala value
function transferKoala() {
  // get the id from transfer button
  console.log('In transferKoala');
  const koalaData = $(this).data('koalaready');
  console.log(koalaData);
  $.ajax({ method: 'PUT',
           url: `/koalas/${koalaData}`
  }).then((result) => {
    console.log(result);
    getKoalas();
  }).catch((errorMessage) => {
    // alert telling the user no record was created
    alert(`Koala transfer did not go through!`);
    console.log(`Error message in PUT: ${errorMessage}`);
  })
} // end transferKoala

function deleteKoala(){
  console.log('in delete button');
  let koalaData = $(this).data('koaladelete');
  console.log(koalaData);
  $.ajax({
    method: 'DELETE',
    url:`/koalas/${koalaData}`
  }).then(function(result){
    console.log('in result', result);
    getKoalas();
  }).catch(function(error){
    alert(`Koala delete button not working`)
    console.log(`error message in DELETE ${error}`);
  })
} // end deleteKoala