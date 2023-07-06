import React from 'react'
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";
import "./index.css"

const Page = () => {
  return (
    <>
    <h1 className='ab-us'>ABOUT US</h1>
    <div className='about-us'>
      <div className='about-us-section-container'>
      <h1 className='color title'><marquee direction = "left">CSP Project Team</marquee></h1>
        <div className='card'>
          <img src = {p1} alt = "Image" className='profile-img' />
          <hr />
          <div className='text-box'>
            <p className='text'>Name: Sree Charan</p>
            <p>Roll No: 21JN1A0589</p>
          </div>
        </div>
        <div className='card'>
          <img src = {p2} alt = "Image" className='profile-img' />
          <hr />
          <div className='text-box'>
            <p className='text'>Name: Naga Pujith Kumar</p>
            <p>Roll No: 21JN1A05C2</p>
          </div>
        </div>
        <div className='card'>
          <img src = {p3} alt = "Image" className='profile-img' />
          <hr />
          <div className='text-box'>
            <p className='text'>Name: Sai Lokesh</p>
            <p>Roll No: 21JN1A0573</p>
          </div>
        </div>
        <div className='card'>
          <img src = {p4} alt = "Image" className='profile-img' />
          <hr />
          <div className='text-box'>
            <p className='text'>Name: Parasuram</p>
            <p>Roll No: 22JN1A0510</p>
          </div>
        </div>
        <div className='card'>
          <img src = {p4} alt = "Image" className='profile-img' />
          <hr />
          <div className='text-box'>
            <p className='text'>Name: Rakesh</p>
            <p>Roll No: 21JN1A0577</p>
          </div>
        </div>
      </div>
    </div>
    <p style={{marginLeft:20}}>There are many of you who are eager to  participate in planting a tree. For those interesting peers, here i would like to say about an website</p>

    <div className='tree-drive-section' style = {{marginLeft:30}}>
      <ul>
      <li>Greening PAN India:  Tree Plantation Projects across 25 States & UTs</li>
      <li>Blockchain Technology: First non-profit in environmental domain to adopt Blockchain Technology</li>
      <li>Geotagging: Tree updates with Geo-Coordinates are sent to donors for utmost transparency</li>
      <li>Challenging Terrains: We mitigate through tough terrains PAN India to support our farmer beneficiaries and environment</li>
      </ul>
      <span>Visit the Website: <a href = "https://sankalptaru.org/location/"><button className='btn btn-primary ml-5'>Click Here !</button></a></span>
    </div>
    </>
  )
}

export default Page