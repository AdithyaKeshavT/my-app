import { useQuery } from 'react-query'
// import { QueryClientProvider, QueryClient } from 'react-query';
import axios from 'axios'

// const queryClient = new QueryClient()

const fetch = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQ = () => {
    const { isLoading, data } = useQuery('q1',fetch)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
         {/* <QueryClientProvider client={queryClient}> */}
          <h2>using React Query</h2>  
          {
            data?.data.map((a)=>{
                return <div key={a.id}>{a.name}</div>
            })
          }
          {/* </QueryClientProvider> */}
        </>
    )
}

export default RQ
