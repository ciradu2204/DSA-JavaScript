/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
  //find the mid point
  let slow = head;
  let fast = head.next; 
  while(fast && fast.next){
      slow = slow.next; 
      fast = fast.next.next;
  }
  //the second half 
  let second = slow.next;
  slow.next = null; 
    
   //reverse the second half
   let prev = null; 
   while(second != null){
       let tmp = second.next; 
       second.next = prev; 
       prev = second;
       second = tmp; 
   }
    second = prev; 
   let first = head; 
    
   while(second != null){
      let tmp1 = first.next; 
      let tmp2 = second.next; 
      first.next = second; 
      second.next = tmp1;
      second = tmp2;
      first = first.next.next;
   }
   
    
};

/*
          p
null -3-4
     h
 1-4-2-3-null null<-3<-4
                  f
*/
 
 