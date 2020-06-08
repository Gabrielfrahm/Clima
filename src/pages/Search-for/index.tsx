import React, { useEffect, useState, } from 'react';
import Axion from 'axios';

import './style.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
// import { Map, TileLayer, Marker } from 'react-leaflet'
import { Map, TileLayer, Marker} from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

const SearchFor = () => {

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log(position);

            setInitialPosition([latitude, longitude]);
        })
    }, []);

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng,
        ]);
    }

    return (
        <>
            <div id="page-create-point">
                <header>
                    <img src={logo} alt="Climax" width="100" />
                    <Link to="/"> <FiArrowLeft />Voltar para Home</Link>
                </header>

                <form >
                    <h1>Procure pelo seu clima</h1>
                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>

                        <Map center={initialPosition} zoom={15} onclick={handleMapClick} >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={selectedPosition} zoom={15}>
                               
                            </Marker>
                        </Map>


                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select
                                    name="uf"
                                    id="uf"

                                >
                                    <option value="0">Selecione uma UF</option>
                                    {/* {ufs.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))} */}
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="city">cidade</label>
                                <select
                                    name="city"
                                    id="city"
                                >

                                    <option value="0">Selecione uma Cidade</option>
                                    {/* {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))} */}
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit">Pesquisa clima</button>
                </form>
            </div >

        </>
    );
}

export default SearchFor;