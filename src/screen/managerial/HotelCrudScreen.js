import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { LoadingScreen } from "../../components/public/LoadingScreen";
import { useGetHotels } from "../../hooks/useGetHotels";
export const HotelCrudScreen = () => {
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [copa, setcopa] = useState([]);
    const [data, setInput] = useState([]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    };
    
    const abrirCerrarModalEditar = () => {
        setModalEditar(!modalEditar);
    };
    
    const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar);
    };

    //----- PETICIONES GET
    // const peticionGet = async () => {
    //     await axios
    //     .get(baseCopa)
    //     .then((response) => {
    //         setData(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };    
    
    const {dataHotel,isLoading}=useGetHotels()

    console.log(dataHotel)
    if(isLoading){
        return <LoadingScreen/>
    }
    const {hotels} = dataHotel

    //-------PETICIONES POST   añade
    // const peticionPost = async () => {
    //     let f = new FormData();
    //     f.append("nomcopa", copa.nomcopa);
    //     f.append("gestion", copa.gestion);
    //     f.append("METHOD", "POST");
    //     await axios
    //     .post(baseCopa, f)
    //     .then((response) => {
    //         setData(data.concat(response.data));
    //         // console.log(data)
    //         // peticionGet();
    //         abrirCerrarModalInsertar();
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };
    /// peticiones put
// const peticionPut = async () => {
//     let f = new FormData();
//     f.append("nomcopa", copa.nomcopa);
//     f.append("gestion", copa.gestion);
//     f.append("METHOD", "PUT");
//     await axios
//     .post(baseCopa, f, { params: { nomcopa: copa.nomcopa } })
//     .then((response) => {
//         console.log(response)
//         let dataNueva = data;
//         dataNueva.map((cup) => {
//         if (cup.nomcopa === copa.nomcopa) {
//             //cup.nomcopa = copa.nomcopa;
//             cup.gestion = copa.gestion;
//         }
//         return cup;
//         });
//         //setData(dataNueva);
//         // console.log(dataNueva)  
//         abrirCerrarModalEditar();
//         //peticionGet();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };

// ELIMINA
// const peticionDelete = async () => {
//     let f = new FormData();
//     f.append("METHOD", "DELETE");
//     await axios
//     .post(baseCopa, f, { params: { nomcopa: copa.nomcopa } })
//     .then((response) => {
//         setData(
//         data.filter((c) => c.nomcopa !== copa.nomcopa)
//     );
//     abrirCerrarModalEliminar();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };

///VERIDICAR
const seleccionarFramework = (hotel, caso) => {
    setcopa(hotel);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
};
// useEffect(() => {
//     peticionGet();
// }, []);


    return (
        <div className="page-wrapper">
            <div style={{ textAlign: "center" }}>
                <br/>
                <button
                    className="btn btn-success"
                    onClick={() => abrirCerrarModalInsertar()}>
                    Insertar
                </button>
                <br/>
                <br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="text-center">Codigo</th>
                        <th className="text-center" >Nombre</th>
                        <th className="text-center" >Lugar</th>
                        <th className="text-center" >Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hotels && hotels.map((hotel) => (
                            <tr key={hotel.Name}>
                                <td>{hotel.Cod_Hotel}</td>
                                <td>{hotel.Name}</td>
                                <td>{hotel.Location}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => seleccionarFramework(hotel, "Editar")}>Editar</button>
                                    {" "}
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => seleccionarFramework(hotel, "Eliminar")}>Eliminar</button>
                                </td>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>

        {/* insertar */}


        <Modal isOpen={modalInsertar}>
            <ModalHeader>Agregar Hotel</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nombre: </label>
                    <br />
                    <input type="text" className="form-control" name="nomcopa" onChange={handleChange} 
                    value={data && data.nomcopa}
                    />
                    <br />
                    <label>Gestion: </label>
                    <br />
                    <input type="file" className="form-control" name="gestion" onChange={handleChange}
                        value={data && data.gestion}/>
                    <br/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary">Insertar</button> {/*onClick={() => peticionPost()} */}
                {"   "}
                <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cancelar</button>
            </ModalFooter>
        </Modal>
        
        {/* fin agregar */}
        {/* editar */}
        <Modal isOpen={modalEditar}>
            <ModalHeader>Editar</ModalHeader>
            <ModalBody>
            <div className="form-group">
                <label>Nombre del Stadium: </label>
                <br />
                <input type="text" className="form-control" name="nomcopa" onChange={handleChange} value={copa && copa.nomcopa}/>
                <br />
                <label>Gestion: </label>
                <br />
                <input type="number" className="form-control" name="gestion" onChange={handleChange} value={copa && copa.gestion}/>
                <br/>
            </div>
            </ModalBody>
            <ModalFooter>
            {/* onClick={() => peticionPut()} */}
                <button className="btn btn-primary">Editar </button>
                {"   "}
                <button className="btn btn-danger" onClick={() => abrirCerrarModalEditar()}>Cancelar</button>
            </ModalFooter>
        </Modal>

        {/* eliminar */}
        <Modal isOpen={modalEliminar}>
            <ModalBody>
            ¿Estás seguro que deseas eliminar la Copa{" "}
            {data && data.nomcopa}?
            </ModalBody>
            <ModalFooter>
            {/* onClick={() => peticionDelete()} */}
                <button className="btn btn-danger">Sí</button>
                <button className="btn btn-secondary" onClick={() => abrirCerrarModalEliminar()}>No</button>
            </ModalFooter>
        </Modal>
        </div>
    </div>
    )
}