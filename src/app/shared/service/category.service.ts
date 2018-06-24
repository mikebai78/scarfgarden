import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  create(category){
    return this.db.list('/categories').push(category);
  }

  getCategories(){
    return this.db.list('/categories').snapshotChanges().map(actions =>{
      return actions.map( a =>{
        const data = a.payload.val()
        const id = a.payload.key
        return {id, ...data}
      })
    })
  } 

  getCategory(id){
    return this.db.object(`/categories/${id}`);
  }

  update(id:string, category){
   return this.db.object(`/categories/${id}`).update(category);
  }

  delete(id:string){
    return this.db.object(`/categories/${id}`).remove();
  }  

}



  

 

  
