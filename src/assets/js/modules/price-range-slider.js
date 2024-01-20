import nouislider from "nouislider"

export const priceRange = ({ 
    id, 
    minInputId, 
    maxInputId,
    min,
    max,
    step,
    startValues
}) => {
    const slider = document.getElementById(id)
    const minInput = document.getElementById(minInputId)
    const maxInput = document.getElementById(maxInputId)

    if (!slider || !minInput || !maxInput) return

    const inputs = [ minInput, maxInput ]

    nouislider.create(slider, {
        start: startValues,
        connect: true,
        step,
        range: { min, max }
    })

    slider.noUiSlider.on("update", (values, handle) => {
        inputs[handle].value = Math.round(values[handle])
    })

    inputs.forEach((input, index) => {
        input.addEventListener("change", event => {
            const value = event.currentTarget.value

            setRangeValueByInput(slider, index, value)
        })
    })
}

function setRangeValueByInput(slider, index, value) {
    const values = [null, null]

    values[index] = value

    slider.noUiSlider.set(values)
}
