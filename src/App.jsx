import Home from './pages/home/Home.jsx'

const App = ()=> { //javascrpt function to handle the app of the whole page

  return (
   
    //this is jsx; inside the html javascript can be used if covered by a {} task


    /* For example if I want to use show static javascript expression inside an h1 I would:

      const ExampleJXS = () => {

        const title = 'Hello World'

        return (
          <h1>{title}</h1>
        )
      }

      this is much better than setting an id to the h1 and using innerHTML = 'Hello World'

    */
    <>
      <Home />
    </>
  )
}

export default App; //exports app to be used in index.js

//app is really just a master component usually called a container component and composes other components
