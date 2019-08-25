import ListService from "../Services/ListService.js";


//Private
let _listService = new ListService()
console.log("the list")

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let lists = _listService.List
    lists.forEach((List, index) => {
        template += List.getTemplate(index)
    })

    document.querySelector('#name').innerHTML = template

}

//Public
export default class ListController {
    constructor() {
        console.log("the controls")

        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }
    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value
        }
        _listService.addList(newList)
        _drawLists()
    }
    addNote(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newNote = form.note.value
        _listService.addNote(newNote, listIndex)
        _drawLists()
    }
    deleteList(index) {
        _listService.deleteList(index)
        _drawLists()
    }
    deleteNote(listIndex, noteIndex) {
        _listService.deleteNote(listIndex, noteIndex)
        _drawLists()
    }


    //TODO: Your app will need the ability to create, and delete both lists and listItems
}