/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  /** 
    First approach
    
    let headALength = findLength(headA); 
    let headBLength = findLength(headB);
    
    if(headALength == 0 || headB.length == 0 ) return null; 
    let intersection = null; 
    
    if(headALength > headBLength ){
         let difference = headALength - headBLength; 
         while(difference > 0){
             headA = headA.next; 
             difference--; 
         }
       return findIntersection(headA, headB)
    }else if(headBLength > headALength){
        let difference = headBLength - headALength; 
         while(difference > 0){
             headB = headB.next; 
             difference--; 
         }
        return  findIntersection(headA, headB);
    }else{
        return findIntersection(headA, headB);
    }
    
    return intersection;
**/
    if(headA== null || headB == null) return null; 
    let headAPointer = headA; 
    let headBPointer = headB; 
    while(headAPointer != headBPointer){
        headAPointer = headAPointer == null? headB: headAPointer.next; 
        headBPointer = headBPointer == null? headA: headBPointer.next; 
    }
    return headAPointer; 
    
       

};

var findLength = function(head){
    let length = 0;
    while(head != null){
        length++;
        head = head.next; 
    }
    return length; 
}

var findIntersection = function(headA, headB){
     while(headA != null && headB != null){
        if(headA == headB){
            return headA; 
        }
        headA = headA.next; 
        headB = headB.next;
      }

    return null; 
}

/**
1. we need to find the interception

                    
 a1-a2-c1 - c2- c3   
 b1-b2-b3-c1 - c2- c3  

 1.find the length of both 

**/