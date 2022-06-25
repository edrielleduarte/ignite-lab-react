import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { client } from './lib/apollo'
import { Event } from './pages/Event'

function App(){
  return(
      // <Event />
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
        
    </ApolloProvider>
    
  )
}

export default App











// import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"

// const GET_LESSONS_QUERY = gql `
//   query{
//     lessons {
//       id
//       title

//       # teacher {
//       #   name
//       # }
//     }
//   }
// `

// interface Lesson{
//   id: string;
//   title: string;
// }


// function App() {

//   const {data} = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

//   console.log(data)
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  // return ( 
    // <h1 className="title">Hellow word</h1>
    // <h1 className="text-5xl font-bold text-violet-500">Hello word</h1>
//     <ul>
//       {data?.lessons.map(lesson => {
//         return <li key={lesson.id}>{lesson.title}</li>
//       })}
//     </ul>
   
//   )
// }

// export default App
