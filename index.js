class Node {
    constructor(val){
        this.val = val 
        this.right = null 
        this.left = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
        }

        let current = this.root 

        while(true){
            if(val === current.val) return undefined 

            if(val < current.val){
                if(current.left === null) {
                    current.left = newNode 
                    return this
                }
                current = current.left
            }else {
                if(current.right === null){
                    current.right = newNode 
                    return this
                }
                current = current.right
            }
        }
    }
    
    
    find(val){
    if(this.root === null) return false 

    let start = this.root 
    let found = false 


    while(start && !found) {
        if(val < start.val){
            start = start.left
        }else if(val > start.val){
             start = start.right
        }else {
            found = true 
        }
    } 
    if(!found) return undefined
    return start
}
}

let tree = new BinarySearchTree() 
tree.insert(20)
tree.insert(30) 
tree.insert(19) 
console.log(tree)
