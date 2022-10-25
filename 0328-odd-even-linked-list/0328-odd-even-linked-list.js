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
var oddEvenList = function(head) {
    if(head == null || head.next == null || head.next.next == null) return head; 
    let odd = new ListNode(head.val); 
    let even = new ListNode(head.next.val); 
    let evenPointer = even; 
    let oddPointer = odd; 
    let pointer1 = head.next.next
    let isOdd = true; 
    while(pointer1 !=null){
        if(evenPointer != null && !isOdd){
          evenPointer.next = new ListNode(pointer1.val); 
          evenPointer = evenPointer.next;
        }else if(oddPointer != null && isOdd){
          oddPointer.next = new ListNode(pointer1.val); 
          oddPointer = oddPointer.next;
        }
        pointer1 = pointer1.next; 
        isOdd = !isOdd;
    }
   oddPointer.next = even; 
   return odd; 
};

/**
Desc:
- Given a head
- Order the nodes(starting from the odd to even)
- Time complexity O(n), time complexity of O(1)

  1-2-3-4-5
  

**/
