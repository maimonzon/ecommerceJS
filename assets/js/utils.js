export const renderList = (listaId, lista) => {

    const listaContainer = document.getElementById(listaId)

    for (const item of lista) {
        const itemList = document.createElement('li')

        itemList.innerText = item

        listaContainer.appendChild(itemList)

    }

}