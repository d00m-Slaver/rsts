import React from "react";
import {Header} from '../components/Header'
import {HeaderMenu} from '../components/HeaderMenu'
import {Footer} from '../components/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom';

import {MainLizing} from "./mainLizing";

import {NewComCars} from './newComCars';
import {Catalogue} from './catalogue';
import {UsedСars} from './UsedCars';
import {Trucks} from './Trucks';
import {SpesialCars} from './spesialCars';
import {CarRefound} from './CarRefound';
import {Equipment} from './Equipment';
import {LeasebackEquipment} from './LeasebackEquipment';
import {CommercialProperty} from './CommercialProperty';
import {LeasebackProperty} from './LeasebackProperty';

export function Main(){
    return(
        <>
            <Header/>
            <HeaderMenu/>
                <Routes>
                    <Route path="/" element={<MainLizing/>}></Route>
                    <Route path="/NewComCars" element={<NewComCars/>}></Route>
                    <Route path="/Catalogue" element={<Catalogue/>}></Route>
                    <Route path="/UsedCars" element={<UsedСars/>}></Route>
                    <Route path="/Trucks" element={<Trucks/>}></Route>
                    <Route path="/SpesialCars" element={<SpesialCars/>}></Route>
                    <Route path="/CarRefound" element={<CarRefound/>}></Route>
                    <Route path="/Equipment" element={<Equipment/>}></Route>
                    <Route path="/LeasebackEquipment" element={<LeasebackEquipment/>}></Route>
                    <Route path="/CommercialProperty" element={<CommercialProperty/>}></Route>
                    <Route path="/LeasebackProperty" element={<LeasebackProperty/>}></Route>
                </Routes>
            <Footer/>
        </>
    )
}

export default Main;