import articeMock from '@/mock/article'
function getArticleList(){
    return new Promise((resolve,reject)=>{
        resolve(articeMock.articleList())
    })
}

export default {
    getArticleList
}