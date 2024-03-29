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

    //first insert method 
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
    BFS(){
    let node = this.root 
    let data = [] 
    let queue = [] 
    queue.push(node) 

    while(queue.length){
        node = queue.shift() 
        data.push(node.val) 
        if(node.left)  queue.push(node.left) 
        if(node.right) queue.push(node.right)
    }
    return data
}
    DFSPreOder() {
        let data = [] 
        let current = this.root
        function traverse(node){
           data.push(node.val) 
           if(node.left) traverse(node.left)
           if(node.right) traverse(node.right)
        }
        traverse(current) 
        return data
    }
    
    DFSPostOrder(){ 
        let data = [] 

        function traverse(node){
            if(node.left) traverse(node.left) 
            if(node.right) traverse(node.right) 
            data.push(node.val)
        }
        traverse(this.root)
        return data
    }
    
    DFSInOrder() {
    let data = [] 

    function traverse(node) {
        if(node.left) traverse(node.left)
        data.push(node.val) 
        if(node.right) traverse(node.right)
    
    }
    traverse(this.root)
    return data
}
    
}

let tree = new BinarySearchTree() 
tree.insert(20)
tree.insert(30) 
tree.insert(19) 
console.log(tree)
