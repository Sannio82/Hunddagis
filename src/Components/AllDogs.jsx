
import React, {Component} from 'react'; 
import axios from "axios";

class AllDogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true, 
                    dogs: json,
                })
            });
    }

    render() {

        var { isLoaded, dogs } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
            <div className='AllDogs'>
               <ul>
                   {dogs.map(dog => (
                       <li key={dog.chipNumber}>
                           {dog.name} 
                           
                       </li>
                   ))};
               </ul>
            </div>
            );
        }

        return (
            <div className='AllDogs'>

            </div>
        );
    }
}

    export default AllDogs;


//const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41"
// Detta är från min egen BIN const url = "https://api.jsonbin.io/b/6241b8e3061827674381b441"
//const apiKey = $2b$10$LF.SyjrpryWY37Dq961/eOKM/oaafa/HmgBfRu9gjR/PY.GvYLSKG

// export default class FetchAllDogs extends React.Component {

//     state = {
//         loading: true,
//         dog: null,
//     };

// async componentDidMount() {
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ dog: data. results[0], loading: false })
//     console.log(data.results[0]);
//     //this.setState({ dog: data.results[2], loading: false });
//    // this.setState({ dog: data.results, loading: false });
// }

// render() {
//     return (
//         <div>
//             {this.state.loading || !this.state.dog ? (
//              <div>loading...</div> 
//              ) : ( 
//              <div>
//                  <div>{this.state.dog.name}</div>
//              </div>
//              )}
//         </div>
        
//     );
// }
// }
 
// const AllDogs = () => {
//     const [isLoading, setIsLoading] = React.useState(true);
//     const [dogs, setDogs] = React.useState([]);

//     React.useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//     const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41";
//     axios(url)
//         .then((response) => {
//         setIsLoading(false);
//         console.log("RES", response.data);

        
//         if (response.data.dogs) {
 
//         setDogs(response.data.dogs);
//      } 
//     else {
//         console.log("An error happened");
//     }
//     })
//     .catch(error => {
//         setIsLoading(false);
//         console.log("An error ocurred", error);
//     });
//     };

//     const dogsRenderer = dogs.map((dog) => (
//          <div key={dog.chipNumber}>{dog.sex}
//          </div>
//     ));
        
//     const content = isLoading ? ( 
//     <div>Loading...</div>
//      ) : (
//     <div>{dogsRenderer}</div>
//      );
//     return <div>{content}</div>;
// }
// const AllDogs = ({showDogInfo}) => {
//     return (
//         <section>
//             <h2>Här är en liten lista över alla hundar som vi har här!</h2>
//             <p>Klicka på en liten hund för att se info om denna</p>
//             <button onClick={showDogInfo}>Ja tack!</button>
//         </section>
//     )
// }

 


// OK! KOllar igen om det blir någon ändring...