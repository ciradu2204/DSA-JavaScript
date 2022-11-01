/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.doublyLinkedList = new DoublyLinkedList(); 
    this.capacity = capacity; 

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
      let node = this.map.get(key); 
      if(node == undefined){
         return -1;
      }
     let value = node.val; 
     this.doublyLinkedList.remove(node); 
     let newNode = this.doublyLinkedList.add(key, value); 
     this.map.set(key, newNode);
     return value; 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     let node = this.map.get(key)
      if(node != undefined) this.doublyLinkedList.remove(node); 
      let newNode = this.doublyLinkedList.add(key,value);
      this.map.set(key, newNode); 
      if(this.doublyLinkedList.length > this.capacity){
        this.map.delete(this.doublyLinkedList.head.key); 
        this.doublyLinkedList.remove(this.doublyLinkedList.head);
      }
 };

class ListNode { 
    constructor(key, val){
       this.val = val; 
       this.key = key; 
       this.prev = null; 
       this.next = null;
    }   
}

class DoublyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    add(key, val){
        const node = new ListNode(key, val); 
        if(!this.head){
            this.head = node;
            this.tail = this.head; 
        }else{
            this.tail.next = node; 
            node.prev = this.tail; 
            this.tail = node;
        }
        this.length++; 
        return node; 
    }
    remove(node){
       if(!node.next && !node.prev){
          this.head = null; 
          this.tail = null; 
        }else if(!node.prev){
        this.head = node.next; 
        this.head.prev = null; 
        }else if(!node.next){
        this.tail = node.prev; 
        this.tail.next = null; 
        }else{
        let prev = node.prev; 
        let next = node.next; 
        prev.next = next; 
        next.prev = prev;     
        }
     this.length--; 
}
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/**
capacity = 2; 
recentlyVisited = ; 
[1;1, 3:3, 4:4]


**/