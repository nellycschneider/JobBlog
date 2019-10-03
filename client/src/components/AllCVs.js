// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// // import CVDetail from "./CVDetail";

// export default class AllCVs extends Component {
//   state = {
//     cvs: []
//   };

//   getAllCVs = () => {
//     axios.get(`/api/cv/all`).then(responseFromApi => {
//       this.setState({
//         cvs: responseFromApi.data
//       });
//     });
//   };

//   componentDidMount() {
//     this.getAllCVs();
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           {this.state.cvs.map(cv => {
//             return (
//               <div key={cv._id}>
//                 <Link to={`/api/cv/${cv._id}`}>
//                   <h3>{cv.name}</h3>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
