import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from 'shared/model/product';
import { Observable} from 'rxjs';

@Injectable()
export class ProductService {
 
  constructor(private db: AngularFireDatabase) { }
  

  create(product){
    return this.db.list('/products').push(product);
  }

  getProducts(){
    return this.db.list('/products').snapshotChanges().map(actions =>{
      return actions.map( a =>{
        const data = a.payload.val() as Product
        const id = a.payload.key
        return {id, ...data}
      })
    })
  };

  getProduct(id:string){
    return this.db.object(`/products/${id}`).valueChanges();
  }

  update(id:string, product){
   return this.db.object(`/products/${id}`).update(product);
  }

  delete(id:string){
    return this.db.object(`/products/${id}`).remove();
  }
}
