const ws = new WebSocket("ws://127.0.0.1:8000");

var output, textType, inputContent, outputConent, interactType, oldContent;

ws.onmessage = (msg) => {
    const content = document.getElementById('content');
    content.innerHTML += msg.data + '<br>';
}

function filterInteraction() {
    if (interactType.indexOf('Search') >= 0) {
        $('.output-select').removeClass('is-hidden');
        $('.output-select').nextAll('.control:first').addClass('is-hidden');
    } else if (interactType.indexOf('Generate') >= 0) {
        $('.output-select').removeClass('is-hidden');
        $('.output-select').nextAll('.control:first').find('.input').attr('placeholder', 'descriptions');
    } else {
        $('.output-select').nextAll('.control:first').find('.input').attr('placeholder', 'what content');
    }
}

$('#input-select').change(function () {
    if ($(this).val() == 'paragraph') {
        $('#input-text').addClass('is-hidden');
        $('#input-area').removeClass('is-hidden');
    }
    if ($(this).val() == 'keywords') {
        $('#input-area').addClass('is-hidden');
        $('#input-text').removeClass('is-hidden');
        $('#input-text').find('.input').attr('placeholder', 'input text');
        $('#input-text').find('.input').prop({
            type: 'text'
        });
    }
    if ($(this).val() == 'sentence') {
        $('#input-area').addClass('is-hidden');
        $('#input-text').removeClass('is-hidden');
        $('#input-text').find('.input').attr('placeholder', 'input text');
        $('#input-text').find('.input').prop({
            type: 'text'
        });
    }
    if ($(this).val() == 'article') {
        $('#input-area').addClass('is-hidden');
        $('#input-text').removeClass('is-hidden');
        $('#input-text').find('.input').attr('placeholder', 'input article url');
        $('#input-text').find('.input').prop({
            type: 'url'
        });
    }
    if ($(this).val() == 'social media post') {
        $('#input-area').addClass('is-hidden');
        $('#input-text').removeClass('is-hidden');
        $('#input-text').find('.input').attr('placeholder', 'input social media posts url');
        $('#input-text').find('.input').prop({
            type: 'url'
        });
    }
})

$('.dropdown-item').click(function () {
    $('.content-control').removeClass('is-hidden');
    $('.content-input').addClass('is-hidden');
    $('.control-button').addClass('is-hidden')
    $('.confirm-button').removeClass('is-hidden')

    // record input value
    interactType = $(this).text();
    textType = $('#input-select').find(":selected").val()
    inputContent = $('.input-content').val()

    // console.log('oldContent, ', oldContent);
    output = textType + ', ' + inputContent;

    filterInteraction();

    // display new input record
    $('.new-content-input').removeClass('is-hidden')
    $('.new-content-input').find('.field').find('.label').text(output)

    // configure interaction field
    $('.content-control').find('.label').text(interactType);
});

$('.confirm-button').find('.cancel').click(function () {
    $('.control-button').removeClass('is-hidden')
    $('.confirm-button').addClass('is-hidden')
    $('.content-control').addClass('is-hidden');

    // reset default
    $('.output-content').val('');

    if (!$('.output-select').hasClass('is-hidden')) {
        $('.output-select').addClass('is-hidden');
    }

    if ($('.output-select').nextAll('.control:first').hasClass('is-hidden')) {
        $('.output-select').nextAll('.control:first').removeClass('is-hidden');
    }
})

$('.confirm-button').find('.confirm').click(function () {
    $('.control-button').removeClass('is-hidden')
    $('.confirm-button').addClass('is-hidden')
    $('.content-control').addClass('is-hidden');

    if (!$('.field-label').hasClass('snowball')) {
        oldContent = inputContent;
    } else {
        oldContent = outputConent;
    }

    // record input value
    if (interactType.indexOf('Search') >= 0) {
        outputConent = ($('.output-select').find('select').val())
    } else if (interactType.indexOf('Generate') >= 0) {
        outputConent = ($('.output-select').find('select').val()) + ' as ' + ($('.output-content').val())
    } else {
        outputConent = ($('.output-content').val())
    }
    output = outputConent + ", by " + oldContent

    // display input value
    $('.content-control').before('<div class="field is-horizontal"> <div class="field-label is-normal snowball"> <label class="label">' + interactType + '</label></div><div class="field-body"><div class="field has-addons"><div class="field-label is-normal"><label class="label" style="font-weight:400 ; font-style: italic; text-align: left;">' + output + '</label></div></div></div></div>')

    // reset default
    $('.output-content').val('');

    if (!$('.output-select').hasClass('is-hidden')) {
        $('.output-select').addClass('is-hidden');
    }

    if ($('.output-select').nextAll('.control:first').hasClass('is-hidden')) {
        $('.output-select').nextAll('.control:first').removeClass('is-hidden');
    }

    // interactType = '';
    // filterInteraction();
})