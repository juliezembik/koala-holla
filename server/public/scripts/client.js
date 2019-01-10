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
           url: '/koala',
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
