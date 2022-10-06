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
var sortList = function(head) {
    if(head === null) return head; 
    let current = head; 
    let  array = []
    while(current != null){
          array.push(current.val);
          current = current.next; 
    }
    let result = divide(array, 0, array.length-1); 
    let pointer = new ListNode(); 
    let head2 = pointer; 
    console.log(result)
    for(let i = 0; i<result.length;i++){
         head2.next = new ListNode(result[i]); 
         head2 = head2.next; 
    }
    return pointer.next; 
     
};
var divide = function(array, start, end){
     if(start === end){
         return array.slice(start, end+1); 
     }
     let mid = Math.floor((start + end)/2); 
     let left = divide(array, start, mid ); 
     let right = divide(array, mid+1, end); 
     return merge(left, right); 
}
var merge = function(left, right){ 
     let result = []; 
     let p1 = 0; 
     let p2 = 0;
     while(p1 < left.length && p2 < right.length){
         if(left[p1] <= right[p2]){
             result.push(left[p1]); 
             p1++; 
         }else{
             result.push(right[p2]); 
             p2++; 
         }
     }
     while(p1 < left.length){
         result.push(left[p1]); 
         p1++; 
     }
     while(p2 < right.length){
         result.push(right[p2]); 
         p2++; 
     }
    return result;
}


/**
head = [-1,5,3,4,0]
//find length
// divide 
// merge
         

**/