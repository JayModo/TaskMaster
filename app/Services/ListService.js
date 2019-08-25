import List from "../models/List.js";

//Private
let _state = {
    lists: []
}

console.log("service")
//Public
export default class ValuesService {
    deleteNote(ListIndex, noteIndex) {
        _state.lists[ListIndex].note.splice(noteIndex, 1)
        this.saveLists()
        this.confirmList()
    }

    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
        this.confirmList()
    }

    addNote(newNote, listIndex) {
        _state.lists[listIndex].note.push(newNote)
        this.saveLists()
    }

    addList(newList) {
        _state.lists.push(new List(newList))
        console.log(_state.lists)
        this.saveLists()
    }
    constructor() {
        console.log("this is the loading")
        this.getLists()
    }
    get List() {
        return _state.lists.map(list => new List(list))

    }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?




    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
    confirmList() {
        if (this.deleteList) {
            window.confirm("is it really done?")
        }
    }


}
