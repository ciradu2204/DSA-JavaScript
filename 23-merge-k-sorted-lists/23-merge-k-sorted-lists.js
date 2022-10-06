/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) { 
    if(!lists || !lists.length) return null;
    return divide(lists, 0, lists.length-1)
};

var divide = function(lists, start, end){
  if(start === end){
      return lists[start]; 
  }
  let mid = Math.floor((start + end)/2); 

  let left = divide(lists, start, mid); 
  let right = divide(lists, mid+1, end); 
  return merge(left, right); 
}

var merge = function(left, right){
   let point = new ListNode(); 
   let head = point; 
   while(left != null && right != null){
       if(left.val <= right.val ){
           head.next = left
           left = left.next; 
       }else{
           head.next = right; 
           right = right.next; 
       }
       head = head.next;
   }
   if(left != null){
       head.next = left; 
   }else{
       head.next = right;
   }
   return point.next;
    
}

 