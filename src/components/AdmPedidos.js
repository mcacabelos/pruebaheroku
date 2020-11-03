import React from "react";

import img1 from '../assets/images/users/1.jpg';
import img2 from '../assets/images/users/2.jpg';
import img3 from '../assets/images/users/3.jpg';
import img4 from '../assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Pedidos = () => {
    return (
        
        <Card classname="card">
            <CardBody  className="cardbody">
                <div >
                    <div>
                        <CardTitle > Reservas</CardTitle>
                        <CardSubtitle>Listado completo de reservas del día</CardSubtitle>
                    </div>
                    <div className="tipo-reserva">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Todos</option>
                                <option value="1">Pendientes</option>
                                <option value="2">Confirmados</option>
                                <option value="3">Cancelados</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table >
                    <thead>
                        <tr className="border">
                            <th className="border-0">Cliente</th>
                            <th className="border-0">Tipo de mesa</th>
                            <th className="border-0">Estado</th>
                            <th className="border-0">Cantidad de personas</th>
                            <th className="border-0">Horario de la reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Leandrito Pastower</h5><span>pastorsito@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Mesa de 4</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp1"></i>

                            </td>
                            <td>3</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">12:40</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Martin Cascabeles</h5><span>CascabelesSerpentinas@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Mesa de 6</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp2"></i>

                            </td>
                            <td>6</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">13:30</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Tomyto Recaldo</h5><span>tomyrecaldo@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Mesa de 2</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>2</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">20:30</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Chelo</h5><span>chelodelgado@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Mesa de 10</td>

                            <td>
                                <i className="fa fa-circle text-red" id="tlp4"></i>

                            </td>
                            <td>8</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">22:15</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Pedidos;
