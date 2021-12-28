export const renderList = (lista) => {

    for (const item of lista) {
        const itemList = document.createElement('li')

        itemList.innerText = item


    }

}