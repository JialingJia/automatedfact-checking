// add example into input box when click

$('.example').click(function () {
  var example = $(this).find('p').text();
  $(this).parent().find('.textarea').val(example.replace(/\s+/g, " ").replace(/\"/g, ""));
})

// add loading when analyze button click
$('.analyze').click(function () {
  var analyze = $(this).addClass("is-loading");

  setTimeout(function () {
    analyze.removeClass('is-loading')
    analyze.closest(".columns").find(".refresh").trigger('click')
  }, 10000)

})

// update each iframe when click

$('#reload-checkable-claim').click(function () {
  var iframe = document.getElementById('iframe-checkable-claim');
  iframe.src = iframe.src;
})

$('#reload-checkworthy-claim').click(function () {
  var iframe = document.getElementById('iframe-checkworthy-claim');
  iframe.src = iframe.src;
})

$('#reload-generate-article-briefs').click(function () {
  var iframe = document.getElementById('iframe-generate-article-briefs');
  iframe.src = iframe.src;
})

$('#reload-robocheck').click(function () {
  var iframe = document.getElementById('iframe-robocheck');
  iframe.src = iframe.src;
})

// log clent's input to google sheet

const checkableURL = 'https://script.google.com/macros/s/AKfycbxvWyIsBkGjLe0MzmWgPLhsE4eVsPlazsfbGbtM54iopq36xdDB_tB5QvzyR-XAv567FA/exec'
const checkableForm = document.forms['detect-checkable-claims']

checkableForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(checkableURL, {
      method: 'POST',
      body: new FormData(checkableForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


const checkworthyURL = 'https://script.google.com/macros/s/AKfycbz4dMfu5rf0ubWAtj0aiC-4sij9EUSsTodXldMZ4TU84JtgsBt9ZyzpRmDCLiTdwp3o/exec'
const checkworthyForm = document.forms['detect-checkworthy-claims']

checkworthyForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(checkworthyURL, {
      method: 'POST',
      body: new FormData(checkworthyForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


const briefsURL = 'https://script.google.com/macros/s/AKfycbwCTy2AHUjvyIoTOaSrXEyeDH0qph4u5CFTxenOA_v3qVLNpaQ0wAuTlZR9yYLe9zTDyQ/exec'
const briefsForm = document.forms['generate-article-briefs']

briefsForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(briefsURL, {
      method: 'POST',
      body: new FormData(briefsForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


const robocheckURL = 'https://script.google.com/macros/s/AKfycbxjVEmXFLvriXK1HqZQGGfdUbW91XuHiu1KGYyjzvu7LJVmAsx5dKm0_Ix4TGKGIwlpAw/exec'
const robocheckForm = document.forms['robocheck']

robocheckForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(robocheckURL, {
      method: 'POST',
      body: new FormData(robocheckForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

//widget