export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.name = data.name
        this.note = data.note || []
}

getTemplate(index){
  let template = 
    `
     <div class="col-4">
              <h2>${this.name}</h2>
             `
                
template += this.drawNote(index)
template += `
<form onsubmit="app.controllers.listController.addNote(event, ${index})"> 
<ul> 
     
     <div class="form-group">
    <label for="note"></label>
    <input type="text" class="form-control" name="note" placeholder="note">
    </div>
    <button type="submit">new note</button>
    <button type ="button" onclick="app.controllers.listController.deleteList(${index})">remove</button>
    </ul>
    </form>
   </div>
`
return template
}
drawNote(listIndex) {
    let noteTemplate = ""
    this.note.forEach((n, noteIndex)=> {
        noteTemplate += `<li>${n}<span onclick="app.controllers.listController.deleteNote(${listIndex}, ${noteIndex})"> X </span></li>`
    });
    return noteTemplate
  }
}





