import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Product } from 'shared/model/product';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';
import { ActionSequence } from 'protractor';
import { shiftInitState } from '@angular/core/src/view';


@Injectable()
export class ShoppingCartService {
     cartRef: AngularFireObject<ShoppingCart>;
     itemsRef: AngularFireList<any>;
     items$: Observable<any>;
     itemRef: AngularFireObject<ShoppingCartItem>;
     item: ShoppingCartItem;  
     inCart: boolean  
     keys: string[];          
    

  constructor(private db: AngularFireDatabase) {
    this.cartRef = db.object('/shopping-carts/'+this.getOrCreateCartId());
    this.itemsRef = db.list('/shopping-carts/'+ this.getOrCreateCartId() + '/items/');    
   }

  private create(){
    return this.db.list('/shopping-carts').push({
      created_at: new Date().getTime()      
    })
  }

  private getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;
      let result =this.create();      
      localStorage.setItem('cartId', result.key);
      return result.key;       
  }    

  public getCart(){    
    return this.cartRef;        
  }  

  addItemToCart(key:string, product:Product){    
      this.itemsRef.update(key,
        { title: product.title,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1   
      });      
  }     

  getItems(){
   return this.itemsRef.snapshotChanges().map(actions => {
     return actions.map( c=> {         
         const data = c.payload.val() as ShoppingCartItem
         const key =  c.payload.key
         return {key, ...data} 
         });
    });      
  }

  // public getQuantity(id){    
  //   this.itemRef = this.db.object('/shopping-carts/'+ this.getOrCreateCartId() + '/items/' + id)
  //   this.itemRef.valueChanges().subscribe(item => this.item = item)
  //   return this.item.quantity;
  // }

  public updateQuantity(id, newQuantity){
    this.itemRef = this.db.object('/shopping-carts/'+ this.getOrCreateCartId() + '/items/' + id)   
    if(newQuantity === 0) this.itemRef.remove(); 
    else this.itemRef.update({quantity: newQuantity })
  }   

  // isInCart(product: Product){      
  //   let item = this.itemsRef.snapshotChanges().map(actions =>
  //     actions.map(c=>{
  //       const key =  c.payload.key        
  //       return key
  //        }).filter(key => key === product.id))
  //   return item? true : false
  // }       

  deleteItem(key){
    this.itemsRef.remove(key)
  }

  deleteAll(){
    this.itemsRef.remove()
  }

  }


  
  
    

