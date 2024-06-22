function getSelecteds(side, getAll = false) {
    let elements = []
    let listOptions = document.querySelectorAll('.container-list-' + side + ' option')

    listOptions.forEach(elem => {
        if (getAll || elem.selected) {
            elements.push(elem)
        }
    })

    return elements
}

function removeSelecteds(elements) {
    if (elements != null) {
        elements.forEach(elem => {
            elem.remove()
        })
    }
}

function addSelecteds(elements, toSide) {
    if (elements != null) {
        let containerList = document.querySelector('.container-list-' + toSide + ' select')

        elements.forEach(elem => {
            elem.selected = false
            containerList.append(elem)
        })
    }
}

function moveElements(toSide, moveAll = false) {
    let currentSide = toSide == 'left' ? 'right' : 'left'
    let selectedOptions = getSelecteds(currentSide, moveAll)
    
    removeSelecteds(selectedOptions)
    addSelecteds(selectedOptions, toSide)
}

let btnOneToRight = document.querySelector('.btn-one-to-right')
let btnAllToRight = document.querySelector('.btn-all-to-right')
let btnOneToLeft = document.querySelector('.btn-one-to-left')
let btnAllToLeft = document.querySelector('.btn-all-to-left')

btnOneToRight.addEventListener('click', function(event) {
    event.preventDefault()
    moveElements('right')
})

btnAllToRight.addEventListener('click', function(event) {
    event.preventDefault()
    moveElements('right', true)
})

btnOneToLeft.addEventListener('click', function(event) {
    event.preventDefault()
    moveElements('left')
})

btnAllToLeft.addEventListener('click', function(event) {
    event.preventDefault()
    moveElements('left', true)
})
