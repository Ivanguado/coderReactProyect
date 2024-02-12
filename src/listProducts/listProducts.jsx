const products = [
    {id:'1', name:'ivan'},
    {id:'2', name:'ROdrigo'}
]

export const mFetch = () => new Promise((res, rechazado)=>{
 //Acciones
 setTimeout(()=>{
    res(products)
 }, 1000)
 
 //rechazado('NO te puedo devolver el dinero')
})
