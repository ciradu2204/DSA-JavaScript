/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(head == null) return head; 
    if(head.next == null) return head;
    let leftPointer = findPointer(head, left);
    let rightPointer = findPointer(head, right); 
    if(leftPointer == null || rightPointer == null) return head;
    let rightPointerNext = rightPointer.next;
     while(leftPointer != rightPointer ){
         let temp = leftPointer.next; 
         leftPointer.next = rightPointerNext; 
         rightPointerNext = leftPointer; 
         leftPointer = temp; 
     }
     leftPointer.next = rightPointerNext;
     let leftPointerPrev = findLeftPointerPrev(head, left);
     if(leftPointerPrev != null){
         leftPointerPrev.next = leftPointer; 
         return head; 
    }
    return leftPointer; 
};

var findPointer = function(head, right){
    let index = 1; 
    let pointer = head; 
    while(pointer != null){
        if(index == right){
            return pointer;   
        }
        index++;
        pointer = pointer.next; 
    }
    return null; 
}

var findLeftPointerPrev = function(head, left){
    let index = 1;
    let pointer = head; 
    while(pointer.next != null){
        if(index == left-1){
            return pointer; 
        }
        index++;
        pointer = pointer.next; 
    }
    return null; 
}




/**
[1,2, 3,4,5]     [4,3,2,5]
   i   j
[1,2,3]
     
      
    
1. loop through to search the left node -> p1
2. loop through to seach the right node -> p2
4. swap(p1, p2)
5. increment p1
6. decrement p2

**/