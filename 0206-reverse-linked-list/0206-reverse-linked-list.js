/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pointer  = head; 
     let prev = null; 
    while(pointer != null && pointer.next  != null){
        let temp = pointer.next; 
        pointer.next = prev; 
        prev = pointer; 
        pointer = temp; 
    }
    if(pointer != null){
          pointer.next = prev;  
    }
    return pointer; 
};

//example:
//null-1 - 2 - 3 - 4 -5 
    