    $('.confirm').click(function () {
        $('.incomplete').addClass('is-hidden')
        $('.incomplete').next().addClass('is-hidden')
        $('.complete').removeClass('is-hidden')
        $('.complete').next().removeClass('is-hidden')
        $('.addition').removeClass('is-hidden')
    })

    $('.addNewControl').click(function () {
        $('.complete').addClass('is-hidden')
        $('.complete').next().addClass('is-hidden')
        $('.incomplete').removeClass('is-hidden')
        $('.incomplete').next().removeClass('is-hidden')
        $('.addition').addClass('is-hidden')
    })

    $('.selectPrompts a').click(function () {
        $('.selectPrompts').addClass('is-hidden')
        $('.writePrompts').removeClass('is-hidden')
    })

    $('.writePrompts a').click(function () {
        $('.writePrompts').addClass('is-hidden')
        $('.selectPrompts').removeClass('is-hidden')
    })

    $('.existControl a').click(function () {
        $('.existControl').addClass('is-hidden')
        $('.newControl').removeClass('is-hidden')
    })

    $('.newControl a').click(function () {
        $('.newControl').addClass('is-hidden')
        $('.existControl').removeClass('is-hidden')
    })