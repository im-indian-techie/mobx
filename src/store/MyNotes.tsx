import { action, makeObservable, observable } from "mobx";

export type Note = {
    id?: number;
    title: string;
    content: string;
};

class MyNotes {
    notes:Note[] = [];
    constructor() {
     makeObservable(this,{
        addMyNotes:action,
        deleteMyNote:action,
        notes:observable
     },
     {
        autoBind:true
     }
    );
    }
    addMyNotes=(note: Note) =>{
        this.notes = [...this.notes, { ...note, id: Math.random() }]
    }
    deleteMyNote=(id:number)=>
    {
      this.notes=this.notes.filter(item=>item.id!==id);
    }
}
const mynotesStore=new MyNotes();
export default mynotesStore