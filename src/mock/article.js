import Mock from 'mockjs'
const Random  = Mock.Random

function articleList(){
    var list = []
    for(var i = 0 ; i <10 ; i ++){
        list.push({
            id: Random.uuid(),
            title: Random.ctitle(),
            author: Random.cname(),
            pubTime: Random.date(),
            summary: Random.cparagraph(1),
            cover: Random.image('375x200',Random.color()),
            // cover: 'https://api.dujin.org/pic/?ts='+Random.integer(),
            zanCount: Random.integer(0,30),
            viewCount: Random.integer(10,100),
            commentCount: Random.integer(0,6)
        })
    }
    return list
}

export default{
    articleList
}