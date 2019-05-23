import kindMock from '@/mock/kind/kind'
function getSubKindList(){
    return new Promise((resolve,reject)=>{
        resolve(kindMock.subKindList())
    })
}
function getComments(){
    return new Promise((resolve,reject)=>{
        resolve(kindMock.comments())
    })
}

export default {
    getSubKindList,
    getComments
    
}