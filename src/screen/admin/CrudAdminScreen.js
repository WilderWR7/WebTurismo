import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
export const CrudAdminScreen = () => {
    const baseCopa = "http://localhost/prueba/copa/";
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [copa, setcopa] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setcopa((prevState) => ({
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
    const peticionGet = async () => {
        await axios
        .get(baseCopa)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };    
    
    //-------PETICIONES POST   añade
    const peticionPost = async () => {
        var f = new FormData();
        f.append("nomcopa", copa.nomcopa);
        f.append("gestion", copa.gestion);
        f.append("METHOD", "POST");
        await axios
        .post(baseCopa, f)
        .then((response) => {
            setData(data.concat(response.data));
            // console.log(data)
            peticionGet();
            abrirCerrarModalInsertar();
        })
        .catch((error) => {
            console.log(error);
        });
    };
    /// peticiones put
const peticionPut = async () => {
    var f = new FormData();
    f.append("nomcopa", copa.nomcopa);
    f.append("gestion", copa.gestion);
    f.append("METHOD", "PUT");
    await axios
    .post(baseCopa, f, { params: { nomcopa: copa.nomcopa } })
    .then((response) => {
        console.log(response)
        let dataNueva = data;
        dataNueva.map((cup) => {
        if (cup.nomcopa === copa.nomcopa) {
            //cup.nomcopa = copa.nomcopa;
            cup.gestion = copa.gestion;
        }
        return cup;
        });
        //setData(dataNueva);
        // console.log(dataNueva)  
        abrirCerrarModalEditar();
        //peticionGet();
    })
    .catch((error) => {
        console.log(error);
    });
};

// ELIMINA
const peticionDelete = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios
    .post(baseCopa, f, { params: { nomcopa: copa.nomcopa } })
    .then((response) => {
        setData(
        data.filter((c) => c.nomcopa !== copa.nomcopa)
    );
    abrirCerrarModalEliminar();
    })
    .catch((error) => {
        console.log(error);
    });
};

///VERIDICAR
const seleccionarFramework = (framework, caso) => {
    setcopa(framework);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
};
useEffect(() => {
    peticionGet();
}, []);
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
                <th>Nombre</th>
                <th>Gestion</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
            data.map((framework) => (
                <tr key={framework.nomcopa}>
                <td>{framework.nomcopa}</td>
                <td>{framework.gestion}</td>
                <td>
                    <button
                    className="btn btn-primary"
                    onClick={() => seleccionarFramework(framework, "Editar")}
                    >
                    Editar
                    </button>{" "}
                    {"  "}
                    <button
                    className="btn btn-danger"
                    onClick={() => seleccionarFramework(framework, "Eliminar")}
                    >
                    Eliminar
                    </button>
                </td>
                </tr>
            ))}
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
                <button className="btn btn-primary" onClick={() => peticionPost()}>Insertar</button>
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
                <button className="btn btn-primary" onClick={() => peticionPut()}>Editar </button>
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
                <button className="btn btn-danger" onClick={() => peticionDelete()}>Sí</button>
                <button className="btn btn-secondary" onClick={() => abrirCerrarModalEliminar()}>No</button>
            </ModalFooter>
        </Modal>
        </div>
    </div>
    )
}