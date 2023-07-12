/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 == null && list2 == null)  return null
    if (list1 == null && list2 !=null)  return list2
    if (list1 !=null && list2 == null) return list1; 
    let result = new ListNode(-1, null); 
    let head = result; 
    while(list1 != null && list2 != null){
         if(list1.val < list2.val){
               head.next = new ListNode(list1.val, null)
               list1 = list1.next; 
         }else if(list2.val < list1.val){
                head.next = new ListNode(list2.val, null)
                 list2 = list2.next;
         }else{
               head.next = new ListNode(list1.val, null)
               head = head.next;
               head.next = new ListNode(list2.val, null)
               list1 = list1.next; 
               list2 = list2.next;
         }

         head = head.next; 
    }

    if(list1 != null){
      head.next = list1; 
    }
    if(list2 != null){
      head.next = list2
    }

    return result.next;

    
};