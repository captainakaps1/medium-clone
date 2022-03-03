export interface Post {
    _id: string
    _created: string
    title: string
    author: {
        name: string
        image: string
    }
    description: string
    mainImage: {
        assest: {
            url: string
        }
    }
    slug: {
        current: string
    }
    body: object[]
}