//  discrimantion array for the best using of type 

interface square{
    kind:"square",
    side:number   
}
interface circle{
    kind:"circle", 
    radius:number,
}
interface rectangle{
    kind:"rectangle",
    length:number,
    width:number 
}
type shape = square | circle | rectangle 

function getArea(shape:shape){
    switch(shape.kind){
        case "circle": 
            return Math.PI*shape.radius 
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        // add a verificator type 
        default:
            const _defaultForShape:never = shape
            return _defaultForShape
    }
}

const test01:shape = {kind:"rectangle", length:7,width:9}
console.log(getArea(test01));

