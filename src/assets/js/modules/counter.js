export const handleCounter = event => {
    const { type, action } = event.target.dataset

    if (type !== "counter-button" || !action) {
        return 
    }

    const input = event.target.parentElement.previousElementSibling

    switch (action) {
        case "increase":
            input.value = Number(input.value) + 1

            break
        case "decrease":
            const currentValue = input.value

            if (currentValue > 1) {
                return input.value = Number(currentValue) - 1
            }
            
            break
    }
}




