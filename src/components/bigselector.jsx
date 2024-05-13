import React from "react";
import CarItem from "./carItem";

import audi from "../carimgs/audi.png";
import baic from "../carimgs/baic.png";
import bmw from "../carimgs/bmw.png";
import caseCar from "../carimgs/case.png";
import catmann from "../carimgs/catman.png";
import chery from "../carimgs/chery.png";
import citroen from "../carimgs/citroen.png";
import dongfeng from "../carimgs/dongfeng.png";
import exeed from "../carimgs/exeed.jpg";
import fawBestune from "../carimgs/Faw bestune.png";
import faw from "../carimgs/faw.png";
import ford from "../carimgs/ford.png";
import gaz from "../carimgs/gaz.png";
import geely from "../carimgs/geely.png";
import haval from "../carimgs/haval.png";
import higer from "../carimgs/higer.png";
import hyunday from "../carimgs/hyundai.png";
import jac from "../carimgs/jac.png";
import jetour from "../carimgs/jetour.png";
import kia from "../carimgs/kia.png";
import koluman from "../carimgs/koluman.jpg";
import lada from "../carimgs/lada.png";
import mazda from "../carimgs/mazda.png";
import mitsubishi from "../carimgs/mitsubushi.png";
import nissan from "../carimgs/nissan.png";
import opel from "../carimgs/opel.png";
import peugeot from "../carimgs/peugeot.jpg";
import porsche from "../carimgs/porsche.png";
import renault from "../carimgs/renault.png";
import shaanxi from "../carimgs/shaanxi.jpg";
import shacman from "../carimgs/shacman.png";
import sunward from "../carimgs/sunward.png";
import toyota from "../carimgs/toyota.png";
import uaz from "../carimgs/uaz.png";
import volkswagen from "../carimgs/volkswagen.png";
import volvo from "../carimgs/volvo.png";
import voyah from "../carimgs/voyah.png"
import zeekr from "../carimgs/zeekr.png";
import zhongtong from "../carimgs/zhongtong.png";
import alfaran from "../carimgs/альфаран.png"; 
import alfran from "../carimgs/альфран.jpg";
import astSanny from "../carimgs/аст Санибел.png";
import prom from "../carimgs/промтехспецавто.jpg";
import tpkBEL from "../carimgs/тпк белдозер.png";
import uni from "../carimgs/юнискафjpg.jpg";


export function BigSelector(){
    return(

        <div className="bigSelector">
            <div className="bidSelector-workspace ">
                <div className="flex-row">
                <CarItem text="Автомобили Peugeot"
                img={peugeot}
                count="0"/>
                <CarItem text="Автобусы Higer"
                img={higer}
                count="2"/>
                <CarItem text="Автобусы Zhongtong"
                img={zhongtong}
                count="1"/>
                <CarItem text="Автомобили SHAANXI"
                img={shaanxi}
                count="0"/>
                <CarItem text="Автомобили FAW Bestune"
                img={fawBestune}
                count="3"/>
                 <CarItem text="Автомобили Vouah"
                img={voyah}
                count="0"/>
                 <CarItem text="Автомобили EXEED"
                img={exeed}
                count="3"/>
                 <CarItem text="Спецтехника SHACMAN"
                img={shacman}
                count="3"/>
                 <CarItem text="Спецтехника CATMANN"
                img={catmann}
                count="3"/>
                <CarItem text="Спецтехника Альфран"
                img={alfaran}
                count="0"/>
                <CarItem text="Спецтехника FAW"
                img={faw}
                count="3"/>
                <CarItem text="Спецтехника Sunward"
                img={sunward}
                count="3"/>
                <CarItem text="Спецтехника ООО ПромТехСпецАвто"
                img={prom}
                count="1"/>
                <CarItem text="Спецтехника DongFeng"
                img={dongfeng}
                count="1"/>
                <CarItem text="Автомобили BAIC"
                img={baic}
                count="3"/>
                <CarItem text="Автомобили ЮниСКАФ"
                img={uni}
                count="1"/>
                <CarItem text="Автомобили JETOUR"
                img={jetour}
                count="3"/>
                <CarItem text="Спецтехника АЛЬФАРАН"
                img={alfran}
                count="2"/>
                <CarItem text="Автомобили ZEEKR"
                img={zeekr}
                count="3"/>
                 <CarItem text="Спецтехника ROSSEL"
                img=""
                count="3"/>
                <CarItem text="Автомобили МАЗ"
                img=""
                count="3"/>
                <CarItem text="Автомобили Chery"
                img={chery}
                count="3"/>
                <CarItem text="Автомобили JAC"
                img={jac}
                count="3"/>
                <CarItem text="Спецтехника SANY от ООО АТС СаниБел"
                img={astSanny}
                count="2"/>
                <CarItem text="Спецтехника SANY от ООО ТПК Белдозер"
                img={tpkBEL}
                count="2"/>
                <CarItem text="Автомобили HAVAL"
                img={haval}
                count="3"/>
                <CarItem text="Автомобили Audi"
                img={audi}
                count="0"/>
                <CarItem text="Автомобили BMW"
                img={bmw}
                count="3"/>
                <CarItem text="Спецтехника CASE"
                img={caseCar}
                count="0"/>
                <CarItem text="Автомобили Citroen"
                img={citroen}
                count="0"/>
                <CarItem text="Автомобили Ford"
                img={ford}
                count="0"/>
                <CarItem text="Автомобили GEELY"
                img={geely}
                count="1"/>
                <CarItem text="Автомобили Mitsubishi"
                img={mitsubishi}
                count="0"/>
                <CarItem text="Автомобили Nissan"
                img={nissan}
                count="0"/>
                <CarItem text="Автомобили Porsche"
                img={porsche}
                count="0"/>
                <CarItem text="Автомобили Volkswagen"
                img={volkswagen}
                count="3"/>
                <CarItem text="Автомобили Volvo"
                img={volvo}
                count="0"/>
                <CarItem text="Автомобили Hyundai"
                img={hyunday}
                count="0"/>
                <CarItem text="Автомобили Renault"
                img={renault}
                count="0"/>
                <CarItem text="Автомобили Kia"
                img={kia}
                count="3"/>
                <CarItem text="Автомобили LADA"
                img={lada}
                count="0"/>
                <CarItem text="Автомобили Opel"
                img={opel}
                count="0"/>
                <CarItem text="Автомобили ГАЗ"
                img={gaz}
                count="1"/>
                <CarItem text="Автомобили УАЗ"
                img={uaz}
                count="0"/>
                <CarItem text="Автомобили Toyota"
                img={toyota}
                count="0"/>
                <CarItem text="Автомобили MAZDA"
                img={mazda}
                count="1"/>
                <CarItem text="Спецтехника KOLUMAN"
                img={koluman}
                count="0"/>
                </div>
              
            </div>
        </div>
    )
}

export default BigSelector;