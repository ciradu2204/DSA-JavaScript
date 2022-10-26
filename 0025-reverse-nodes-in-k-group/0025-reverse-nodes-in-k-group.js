/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null || k <=1) return head;
    let headPointer = head; 
    let result = null; 
    let current = null; 
    let currentPointer = null; 
    let visitedNodes = 0; 
    while(headPointer !=null){
        
        if(visitedNodes == k){
           let reversedCurrent =  reverse(current);
           result = newResult(reversedCurrent, result)
           visitedNodes = 0; 
           current = null; 
        }
        if(current == null){
            current = new ListNode(headPointer.val);
            currentPointer = current; 
        }else{
            currentPointer.next = new ListNode(headPointer.val); 
            currentPointer = currentPointer.next; 
        }
        visitedNodes++; 
        headPointer= headPointer.next;
    }
   
    if(visitedNodes == k){
         let reversedCurrent =  reverse(current);
         result  = newResult(reversedCurrent, result)
         visitedNodes = 0; 
    }else{
         result = newResult(current, result)

    }
    return result;
    
};

var reverse = function(headA){
    let prev = null; 
    while(headA != null){
        let temp = headA.next; 
        headA.next = prev; 
        prev = headA; 
        headA = temp; 
    }
       

    return prev; 
}

var newResult = function(head, result){
    let last = result; 
    while(last != null && last.next != null){
        last = last.next; 
    }
    if(last == null){
      return head;   
    }else{
       last.next = head; 
    }  
    return result;
}

/**
-Given head 
- reverse the nodels of list k at a time 
- k <= length 
- 
 Example: 
1. -2-1-4-3-5
2.  3-2-1-4-5 
k = 2
let node = 4 - 5
let result = 3-2-1-4-5
1 - 2 - 3 - 4 - 5

Algorithm: 
1. loop through the list
2. keep track of the number of visited node(k)
3. add each visited node to the current var
3. if(visited node == k ) reverse the current var and append it to the result
3. after looping (visited node == k) reverse and append || append from current

Test: 
1-2-3-4-5  k=3
      p
let headPointer = 4; 
let current = 4-5; 
let result = 3-2-1; 
let visitedNodes = 0; 

**/