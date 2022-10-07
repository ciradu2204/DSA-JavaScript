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
/**
  * First solution with a time complexity on nlogn and space complexity of O(1)
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
**/

var sortList = function(head) {
   if(head == null || head.next == null ) return head; 
return divide(head); 
}

var divide = function(head){
    if (!head || !head.next){
        return head; 
    }
    let [head1, head2] = findMidPoint(head); 
    let left = divide(head1); 
    let right = divide(head2);
    let result =  merge(left, right);
    return result; 
}

var findMidPoint = function(head){
    let slow = head; 
    let faster = head.next; 
     while(faster !== null && faster.next !== null){
        slow = slow.next; 
        faster = faster.next.next; 
    }
    let left = head; 
    let right = slow; 
    let temp = right.next; 
    right.next = null; 
    right = temp;
    return [left, right]
}

var merge = function(head1, head2){
    let mergedList = new ListNode(); 
    let head = mergedList; 
    while(head1 !=null || head2 !=null){
         if(head1 == null){
            head.next = head2; 
            head2 = head2.next;
        }else if(head2 == null){
            head.next = head1; 
            head1 = head1.next;
        }else{
            if(head1.val < head2.val){
            head.next = head1; 
            head1 = head1.next;
            }else{
            head.next = head2; 
            head2 = head2.next; 
            }
       }
        head = head.next; 
    }
    
    return mergedList.next; 
}



