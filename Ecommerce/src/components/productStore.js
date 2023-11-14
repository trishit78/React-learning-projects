
const productArray = [
    {
        id:'1',
        title:"Coffee",
        price:1.99
    },
    {
        id:'2',
        title:"Flower",
        price:2.99
    },
    {
        id:"3",
        title:"Pen",
        price:5.99
    },

];

function getProductData(id){
    const product= productArray.find(product => product.id == id);
    if(product === undefined){
        console.log('product is undifined')
    }
    return product;
}

export  {productArray,getProductData};