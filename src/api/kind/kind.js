import kindMock from '@/mock/kind/kind'
function getSubKindList(){
    return new Promise((resolve,reject)=>{
        resolve(kindMock.subKindList())
    })
}

export default {
    getSubKindList
    
}