    $('.confirm').click(function () {

        // get new task and its description
        var getNewTask = $('.existControl select option:selected').text()
        var getTaskContent = $('#newTaskContent').val()

        // $('.incomplete').addClass('is-hidden')
        // $('.incomplete').next().addClass('is-hidden')
        // $('.complete').removeClass('is-hidden')
        // $('.complete').next().removeClass('is-hidden')
        // $('.addition').removeClass('is-hidden')

        // add new tasks and description into the output list
        $('.nlpPlaceholder').addClass('is-hidden')

        if (getTaskContent == ""){
            $('#existTask ol').append('<li>' + getNewTask + " " + '<i>please describe your task outputs</i>' + '</li>')
        } else {
            $('#existTask ol').append('<li>' + getNewTask + " " + getTaskContent + '</li>')
        }

        // clear input
        $('#newTaskContent').val("")
    })

    // $('.addNewControl').click(function () {
    //     // $('.complete').addClass('is-hidden')
    //     $('.complete').next().addClass('is-hidden')
    //     $('.incomplete').removeClass('is-hidden')
    //     $('.incomplete').next().removeClass('is-hidden')
    //     $('.addition').addClass('is-hidden')

    //     $('.incomplete .field-label label').addClass('is-hidden')
    //     $('.incomplete .field-body .line').removeClass('is-hidden')

    // })

    $('.resetTask').click(function () {
        // hide all complete widget
        // $('.complete').addClass('is-hidden')
        // $('.complete').next().addClass('is-hidden')
        // $('.addition').addClass('is-hidden')

        // display all incomplete widget and remove existing tasks
        // $('.incomplete').removeClass('is-hidden')
        // $('.incomplete').next().removeClass('is-hidden')
        // $('.incomplete .field-label label').removeClass('is-hidden') // display label
        // $('.incomplete .field-body .line').addClass('is-hidden') // remove line
        $('#existTask ol').empty() // empty existing tasks list
        $('.nlpPlaceholder').removeClass('is-hidden')
    })

    $('.selectPrompts a').click(function () {
        $('.selectPrompts').addClass('is-hidden')
        $('.writePrompts').removeClass('is-hidden')
    })

    $('.selectDesignPrompt a').click(function () {
        $('.writePrompts').addClass('is-hidden')
        $('.selectPrompts').removeClass('is-hidden')

        $('.newPrompt').val("")
    })

    $('.existControl a').click(function () {
        $('.existControl').addClass('is-hidden')
        $('.newControl').removeClass('is-hidden')

    })

    $('.newControl .option a').click(function () {
        $('.newControl').addClass('is-hidden')
        $('.existControl').removeClass('is-hidden')
    })

    $('.newControl .createNewOption a').click(function () {
        var newOption = $('.newControl input').val()
        $('.existControl .select select').append('<option>' + newOption + '</option>')
        $('.newControl').addClass('is-hidden')
        $('.existControl').removeClass('is-hidden')
        $('.existControl .select select').val(newOption)
    })

    $('.confirmNewPrompt').click(function () {
        var newOption = $('.newPrompt').val()
        $('.selectPrompts .select select').append('<option>' + newOption + '</option>')
        $('.writePrompts').addClass('is-hidden')
        $('.selectPrompts').removeClass('is-hidden')
        $('.selectPrompts .select select').val(newOption)

        $('.newPrompt').val("")
    })

    // change text input placeholder based on the selected content
    $('.content-type .select select').on('change', function () {
        if (this.value == 'keywords') {
            $('.textarea').attr('placeholder', 'I would like to start from analyzing keywords such as....')
        }
        if (this.value == 'sentence') {
            $('.textarea').attr('placeholder', 'I would like to start from analzying sentences such as....')
        }
        if (this.value == 'paragraphs') {
            $('.textarea').attr('placeholder', 'I would like to start from analyzing paragraphs that....')
        }
        if (this.value == 'article') {
            $('.textarea').attr('placeholder', 'I would like to start from analyzing the article (try to describe what kinds of article they are)....')
        }
        if (this.value == 'social media content') {
            $('.textarea').attr('placeholder', 'I would like to start from analyzing the tweets or facebook posts (try to describe what social media content they are)....')
        }
        if (this.value == 'other') {
            $('.textarea').attr('placeholder', 'I would like to start from analyzing....')
        }
    })


    // update design prompts on output
    $('.selectPrompts .select select').on('change', function () {
        var prompt = this.value.toLowerCase();
        $('#designPrompts').text(prompt)
    })

    $('.confirmNewPrompt a').click(function () {
        var prompt = $('.newPrompt').val().toLowerCase();
        $('#designPrompt').text(prompt)
    })

    // update input content on ouput
    $('.confirm').click(function () {
        var inputContentType = $('.content-type .select select').val()
        $('#inputContentType').text(inputContentType + ": ")

        var inputContent = $('.textarea').val()
        if (inputContent == "") {
            $('#inputContent').text(`please specify your ${inputContentType}`)
        }
        else {
            $('#inputContent').text(inputContent)
        }

        $('.newControl input').val('')
    })