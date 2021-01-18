import { ApolloClient, InMemoryCache } from '@apollo/client'


let URL = 'http://localhost:4000'
const client = new ApolloClient({
    uri: URL,
    cache: new InMemoryCache()
}
)

export { client }