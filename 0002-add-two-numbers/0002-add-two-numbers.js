/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null; 
    let headPointer = head; 
    let rem = 0; 
    while(l1 && l2){
       let sum = l1.val+ l2.val + rem; 
       rem = parseInt(sum/10); 
       let val = parseInt(sum%10);
       if(head == null){
          head = new ListNode(val); 
          headPointer = head;
       }else{
          headPointer.next = new ListNode(val);
          headPointer = headPointer.next;
       }
       l1 = l1.next; 
       l2 = l2.next; 
    } 
    while(l1){
      let sum = l1.val + rem; 
      rem = parseInt(sum/10) ; 
      let val = parseInt(sum%10)
      headPointer.next = new ListNode(val); 
      headPointer = headPointer.next;
      l1 = l1.next; 
    }
    
    while(l2){
      let sum = l2.val + rem; 
      rem = parseInt(sum/10) ; 
      let val = parseInt(sum%10); 
      headPointer.next = new ListNode(val); 
      headPointer = headPointer.next;
      l2 = l2.next;   
    }
    if(rem > 0){
        headPointer.next = new ListNode(rem);
        headPointer = headPointer.next;
    }
    return head; 
};

/**
 Descr: 
 1. non-empty 
 2. add the numbers together 

 Ex: 2-4-3
     5-6-4
     7-0-8

Algo: 
1. start from the beginning of both list. As long as l1 && l2
2. let sum  = add the two numbers (l1.val + l2.val) 
3. if sum >9  rem = sum/10; newNodeVal = sum%10
4. if(l1) loop through the remaining l2 nodes 
5. if(l2) loop through the remaining l1 nodes
4. if(rem > 0) create a node and add it
**/