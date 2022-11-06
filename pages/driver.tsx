import React from 'react';
import Footer from '../component/common/Footer';
import NavBar from '../component/common/NavBar';
import ConceptDrivers from '../component/drivers/conceptDrive';
import DriverCards from '../component/drivers/drivers';

function Reserve() {
  return (
    <>
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col w-full">

      <h1 className='driver-header'>일반 택시 기사님들</h1>
        <div className='flex flex-start row'> 
          <DriverCards driverName='도라이버' careerAge="30"></DriverCards>
          <DriverCards driverName='김세종' careerAge='27'></DriverCards>
          <DriverCards driverName='씽킹 디 사인 (Thinking De Sign)' careerAge='50'></DriverCards>
        </div></div> 

    <div className="divider"></div> 

    <h1>테마 택시 기사님들</h1>
        <div className='flex flex-start row'>
          <ConceptDrivers driverName='니코틴' careerAge='23' concept='흡연 택시'></ConceptDrivers>
          <ConceptDrivers driverName='영국인' careerAge='19' concept='BBC 영국 라디오 택시'></ConceptDrivers>
          <ConceptDrivers driverName='반려견' careerAge='33' concept='반려견 택시'></ConceptDrivers>
        </div>
        <div className='flex flex-start row'>
          <ConceptDrivers driverName='피곤해' careerAge='15' concept='수면 택시'></ConceptDrivers>
          <ConceptDrivers driverName='같이가' careerAge='19' concept='카풀 택시'></ConceptDrivers>
          <ConceptDrivers driverName='대형견' careerAge='33' concept='대형견 탑승 가능 택시'></ConceptDrivers>
        </div>


     </div>
  </>
  )
}

export default Reserve;