import './App.css';
import RenderSingleCard from './components/destructure/renderSingleCard';
import RenderListCards from './components/destructure/renderListofCards';
import RenderUsers from './components/props/renderUsers';
// import RenderIndCardsProps from './components/props/renderIndCardsProps';
import RenderIndCardsPropsWithDest from './components/destructure/destructureWithProps';
import RenderAllCardProps from './components/props/RenderAllCardProps';

function App() {
   const namesArr = ['Aliza', 'Adil', 'Abdullah', 'hira', 'bilal'];

   return (
      <>

         {/* <RenderList/> */}

         {/* <RenderSingleCard/>
         <RenderListCards /> */}

         {/* <RenderUsers username='Aliza' />
         <RenderUsers username='Adil' />
         <RenderUsers username='Abdullah' />
         <RenderUsers username='ABC' /> */}

         {/* {
         namesArr.map((value, i) => {
          return(
              <RenderUsers username ={value} key={i}/>
          )
         })
      } */}

         {/* <RenderIndCardsPropsWithDest /> */}
         {/* <RenderIndCardsProps /> */}

         <RenderAllCardProps/>

      </>
   )
}

export default App;
