// Filename - App.js

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import'../style/Sectors.css';
import Indipe from "./Indipe";
import Indiconnect from "./Indiconnect";
import Indinxt from "./Indinxt";
import Sec2Pay from "./Sec2Pay";
import Indikendra from "./Indikendra";
import IndiSpeed from "./IndiSpeed";

function App() {
    return (
        <>
        <section   className="sectors-section py-5">

                    <div   data-aos="fade-up" data-aos-delay="600"class="image-container" >
                        <img src="./assets/download9.svg"alt="portfolio"></img>
                       <div class="image-text">Our Portfolio</div> 
                    </div>
                    <div  className="portfolio-text py-4">
                         <h3 data-aos="fade-up" data-aos-delay="800"><span className="orange">Integrated,</span> <span className="blue">Inclusive</span><span className="orange2">& Innovative</span></h3>
            <p data-aos="fade-up" data-aos-delay="1000">Equipping diverse brands in multiple sectors with essential resources, expertise, and unwavering support</p>
                    </div>
           


            <Tabs data-aos="fade-up" data-aos-delay="1200">
                <TabList style={{
                    fontSize: '20px',
                    margin: '20px',
                    color: "#1616b7",
                    borderRadius: '10px',
                }}>
                    <Tab  style={{ background: '#0252D4', 
                        borderRadius: '5px', marginright: '20px', color:'#fff'}}>Payments</Tab>
                    <Tab  style={{ background: '#0252D4', 
                        borderRadius: '5px' }}>Financial Services</Tab>
                    <Tab  style={{ background: '#0252D4', 
                        borderRadius: '5px' }}>ONDC Logistics</Tab>
                </TabList>

                <section className="first-tab">
                    <div className="container first-tab-container">
                <TabPanel  style={{ fontSize: '20px'}}>
                    <Tabs  className="pt-4"defaultIndex={0}>
                        <TabList  data-aos="fade-up" data-aos-delay="1400" style={{textAlign:"left"}}>
                            <Tab style={{ background: '#01295C', 
                                borderRadius: '5px',border:'1px solid #01295C', color:'#fff'}}>Indipe</Tab>
                            <Tab style={{ background: 'transperent', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#01295C' }}>Indiconnect</Tab>
                            <Tab style={{ background: 'transperent', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#01295C' }}>IndiNXT</Tab>
                        </TabList>
                        <TabPanel>

                           <Indipe/>

                        </TabPanel>
                        <TabPanel>
                            <Indiconnect/>

                        </TabPanel>
                        <TabPanel>
                           <Indinxt/>

                        </TabPanel>
                    </Tabs>
                </TabPanel>
                </div>
                </section>



 
                    <div className="container first-tab-container">
                <TabPanel   style={{ fontSize: '20px', 
                    margin: '20px' }}>
                    <Tabs className="pt-4">
                        <TabList style={{textAlign:"left"}}>
                            <Tab style={{ background: '#f5e5f8', 
                                borderRadius: '5px' }}>Sec2Pay</Tab>
                            <Tab style={{ background: '#f2f9a0', 
                                borderRadius: '5px' }}>Indikendra</Tab>
                            
                        </TabList>
                        <TabPanel>
                           <Sec2Pay />

                        </TabPanel>
                        <TabPanel>
                            <Indikendra />

                        </TabPanel>
                       
                    </Tabs>
                </TabPanel>
                </div>
               


              
                    <div className="container first-tab-container">
                <TabPanel  style={{ fontSize: '20px', margin: '20px' }}>
                    <Tabs className="pt-4">
                        <TabList style={{textAlign:"left"}}>
                            <Tab style={{ background: '#f5e5f8', 
                                borderRadius: '5px' }}>IndiSpeed</Tab>
                            
                        </TabList>
                        <TabPanel>
                           <IndiSpeed/>

                        </TabPanel>
                       
                    </Tabs>
                </TabPanel>
                </div>
                
            </Tabs>

            </section>
        </>
    );
}

export default App;