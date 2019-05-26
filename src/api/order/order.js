import orderMock from '@/mock/order/order.js'
function getOrderList(data){
    return new Promise((resolve,reject)=>{
        resolve(orderMock.orderListByType(data.status))
    })
}

export default {
    getOrderList
    
}