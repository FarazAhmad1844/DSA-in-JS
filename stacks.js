class Stack{
    constructor(){
        this.stack=[]
    }

    push (item) {
        return this.stack.push(item)        
    }
    pop(){
        return this.stack.pop()
    }
    peak(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length - 1];
    }
    isEmpty(){
        return this.stack.length===0
    }
    size(){
        return this.stack.length;
    }
}

const stack=new Stack();
stack.push(1),
stack.push(2),
stack.push(3),
stack.push(4),
console.log(stack.pop())
console.log(stack.peak())
console.log(stack.size())
console.log(stack.isEmpty())
