// add example into input box when click

$('a.example').click(function () {
  var example = $(this).find('p').text();
  $(this).parent().find('.textarea').val(example.replace(/\s+/g, " ").replace(/\"/g, ""));
})

// add loading when analyze button click
$('.analyze').click(function () {
  var analyze = $(this).addClass("is-loading");

  setTimeout(function () {
    analyze.removeClass('is-loading')
    analyze.closest(".columns").find(".refresh").trigger('click')
  }, 15000)

})

// update each iframe when click

$('#reload-stand-alone-claims').click(function () {
  var iframe = document.getElementById('iframe-stand-alone-claims');
  iframe.src = iframe.src;
})

$('#reload-ambiguous-terms').click(function () {
  var iframe = document.getElementById('iframe-ambiguous-terms');
  iframe.src = iframe.src;
})

$('#reload-quantitative-information').click(function () {
  var iframe = document.getElementById('iframe-quantitative-information');
  iframe.src = iframe.src;
})

$('#reload-review-argumentation').click(function () {
  var iframe = document.getElementById('iframe-review-argumentation');
  iframe.src = iframe.src;
})

// log clent's input to google sheet
const standaloneURL = 'https://script.google.com/macros/s/AKfycbxi3qwlwFxRXV5VHm4dr8wC8RjcqZun9Kl6BHY_hahbEhzVj7Wo88Ob5GMDwQYvNBZCHg/exec'
const standaloneForm = document.forms['prepare-stand-alone-claims']

standaloneForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(standaloneURL, {
      method: 'POST',
      body: new FormData(standaloneForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const ambiguousURL = 'https://script.google.com/macros/s/AKfycbzaXdCJR0ys8aC3Yim4nEnXOrfpI_TRhwBiQ3ZoQ4kU-JqVHxfsunG82cKlvrCKBCR7/exec'
const ambiguousForm = document.forms['ambiguous-terms']

ambiguousForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(ambiguousURL, {
      method: 'POST',
      body: new FormData(ambiguousForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const quantitativeURL = 'https://script.google.com/macros/s/AKfycbzktqbtmsZOaS-rnPku5ljT5U9GdOePX5Ql1D1WxAt5RPIIC9uuRqyclbJ3Zq_VKW5lfA/exec'
const quantitativeForm = document.forms['quantitative-information']

quantitativeForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(quantitativeURL, {
      method: 'POST',
      body: new FormData(quantitativeForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const argumentationURL = 'https://script.google.com/macros/s/AKfycbzsIdyUn48RIcIt7OunGYL4pCiV2Vd1Q87FBlOX03Ux5Idvg5cY6n4WtSZW2Xzpb0j-jA/exec'
const argumentationForm = document.forms['review-argumentation']

argumentationForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(argumentationURL, {
      method: 'POST',
      body: new FormData(argumentationForm)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

//widget