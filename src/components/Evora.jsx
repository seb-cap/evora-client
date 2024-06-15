import { useState } from 'react';

import { getStatus } from "../apiClient";
import ExposureControls from './evora/ExposureControls';
import FilterTypeSelector from './evora/FilterControls';
import GetStatus from './evora/GetStatus';
import GetTemp from './evora/GetTemp';
import ImageTypeSelector from './evora/ImageTypeSelector';
import OnOff from './evora/OnOffFunctionality';
import ExposureTypeSelector from './evora/SetExposureType';
import SetTemp from './evora/SetTemp';



function Evora({setDisplayedImage}) {
    const [exposureType, setExposureType] = useState('Single');
    const [imageType, setImageType] = useState('Bias');
    const [filterType, setFilterType] = useState('Ha');
    const [temp, setTemp] = useState();
    const [currTemp, setCurrTemp] = useState();
    const [currStatus, setCurrStatus] = useState();
    const [disableControls, setDisableControls] = useState(false);
    const [initialized, setInitialized] = useState(getStatus()['status'] === '20073');

    return (
        <div className="Controls">
            <OnOff initialized={initialized} setInitialized={setInitialized}/>
            <GetStatus currStatus={currStatus} setCurrStatus={setCurrStatus}/>
            <ImageTypeSelector imageType={imageType} setImageType={setImageType} isDisabled={disableControls || !initialized}/>
            <ExposureTypeSelector exposureType={exposureType} setExposureType={setExposureType} isDisabled={disableControls || !initialized}/>
            <FilterTypeSelector filterType={filterType} setFilterType={setFilterType} isDisabled={disableControls || !initialized}/>
            <SetTemp temp={temp} setTemp={setTemp} isDisabled={disableControls || !initialized}/>
            <GetTemp currTemp={currTemp} setCurrTemp={setCurrTemp} isDisabled={!initialized}/>
            <ExposureControls
                exposureType={exposureType}
                imageType={imageType}
                filterType={filterType}
                temp = {temp}
                setDisplayedImage = {setDisplayedImage}
                setDisableControls = {setDisableControls}
                isDisabled = {!initialized}
            />
        </div>
    )
}

export default Evora;