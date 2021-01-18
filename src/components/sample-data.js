import { useQuery, gql } from '@apollo/client'

const Sample = ({ index }) => {
    const query = gql`
    query{
        OneMessage(index: ${index}){
          message
        }
      }
    `
    const { loading, error, data } = useQuery(query)
    if (loading) {
        return <div>Loading ...</div>
    }
    if (error) {
        return <div>
            Error while fetching data!
        </div>
    }
    if (data) {
        if (data.OneMessage === null) {
            return <div>
                Message not found!
            </div>
        } else {

            return <div>
                {
                    data.OneMessage.message
                }
            </div>
        }
    }
}


export { Sample }