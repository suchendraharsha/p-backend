import 'react-slideshow-image/dist/styles.css'
import CardItem from "../Card";
import "./index.css"
import { Component } from 'react';
import img1 from './image1.jpeg';
import img2 from './image2.jpeg';
import img3 from './image3.jpeg';
import img4 from './image4.jpeg';
import img5 from './image5.jpeg';
import img6 from './image6.jpeg';
import img7 from './image7.jpeg';
import img8 from './image8.jpeg';
import img9 from './image9.jpeg';

const slides = [
    "https://2.bp.blogspot.com/-0o178tFBloo/T7XxnmpzxhI/AAAAAAAAOWw/MrYSgbUr4j8/s320/vacation+pictures++(180).jpg",
    "https://2.bp.blogspot.com/-0o178tFBloo/T7XxnmpzxhI/AAAAAAAAOWw/MrYSgbUr4j8/s320/vacation+pictures++(180).jpg",
    "https://2.bp.blogspot.com/-0o178tFBloo/T7XxnmpzxhI/AAAAAAAAOWw/MrYSgbUr4j8/s320/vacation+pictures++(180).jpg",
    "https://2.bp.blogspot.com/-0o178tFBloo/T7XxnmpzxhI/AAAAAAAAOWw/MrYSgbUr4j8/s320/vacation+pictures++(180).jpg",
]

const slideImages = [
    {
        url: "https://assets.change.org/photos/5/lv/vo/ZAlvvodNoXzgICP-1600x900-noPad.jpg?1554270561",
        caption: "Firts Slide"
    },
    {
        url: "https://assets.change.org/photos/5/lv/vo/ZAlvvodNoXzgICP-1600x900-noPad.jpg?1554270561",
        caption: "Second Slide"
    },
    {
        url: "https://assets.change.org/photos/5/lv/vo/ZAlvvodNoXzgICP-1600x900-noPad.jpg?1554270561",
        caption: "Third Slide"
    },
]

const cardsList = [
    {
        id: 1,
        title: 'Social Benefits',
        description: 'It improves the quality of life for everyone by having a ‘calming effect’ on their nerves. Societies with trees have lower rates of mental health issues and faster healing amongst the sick. Trees can also be planted as memorials or markers for specific events in a town’s history or achievements.',
        imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className: 'card-1'
    },
    {
        id: 2,
        title: "Environmental Benefits",
        description: "Trees help improve the quality of air by producing more oxygen and filtering out carbon dioxide. They can grip onto the soil to prevent erosion during flooding. Trees play a big part in regulating the heat of any area and controlling moisture levels in the air.",
        imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className: 'card-2'
    },
    {
        id: 3,
        title: "Communal Benefits",
        description: "It can help make the neighborhood look more friendly or give your neighbors a good view. Trees planted alongside streets can reduce the speed of traffic and encourage drivers to drive more carefully. It creates shade for children to rest under when they plat outside and also a perfect place to built tree houses or swings.",
        imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className: 'card-3'
    },
    {
        id: 4,
        title: "Personal Benefits",
        description: "We can plant a tree in your house to mark moving in or celebrate the birth of a child. They can be great hobbies and tending to plants and caring for them helps people live stress-free lives.They give you a good view outside your window that adds to the beauty of your home.",
        imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className: 'card-4'
    },
    {
        id: 5,
        title: "Economic Benefits",
        description: "The economic benefits of trees are something that most people aren’t aware of. When they hear economic benefits they think it wouldn’t affect them directly but they’re wrong. Trees help reduce household costs on heating and cooling. They also increase the value of the property as it is seen as more attractive.",
        imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className: 'card-5'
    },
]

class MyBio extends Component{
    render(){
        return(
            <div>
                 <div className='main-page'>
                    <div className='tree-image'>
                        <hr className='line-1'/>
                        <div className='text-box'>
                            <p className='caption'>TO PLANT TREES IS TO GIVE BODY AND LIFE TO ONE'S DREAMS OF A BETTER WORLD</p>
                            <h1 className='person'>Russel Page</h1>
                        </div>
                    </div>
                 </div>
                <div className="list-container">
            <div className="main-container">
                <h1 className="head">Tree Plantation</h1>
                <p className="paragraph">
                    Check out the benefits of tree plantation
                </p>
                <ul className="technology-list">
                    {cardsList.map(each => (
                        <CardItem cardsList={each} key={each.id} />
                    ))}
                </ul>
            </div>
        </div>
        <div className="abstract-section-container">
            <h1 className="abstract-title">ABSTRACT</h1>
            <div className="abstract-section">
                <div className="section-card-container b1">
                    <h1 className="week-title">Week 01</h1>
                    <hr />
                    <div className="text-container">
                        <p className="week-description">
                            I had visited several areas in my village and chosen a suitable area for doing the community 
                            service project on tree plantation and gathered information about the benefits on planting the trees and how it helps in improving the 
                            health of environment as well as humans. I approach that particular area volunteer and made a detailed explanation of the community service 
                            project and gave me permission to visit the village. <br/><br/>I visited some of the houses in near by areas. Based on my survey, I found that many people are not 
                            taking the basic measures in controlling the pollution and planting the trees. Also, they are not aware of our
                            Government schemes which are introduced and implemented to improve the environmental health.<br/> <br/>So, we had conducted awareness activity there and explained about the basic tips to prevent the pollution in
                            their surroundings and help in growing plants.
                        </p>
                    </div>
                </div>
                <div className="section-card-container b2">
                    <h1 className="week-title">Week 02</h1>
                    <hr />
                    <div className="text-container">
                        <p className="week-description">
                            I had selected an area and visited it. I have observed the surroundings and also got to know
                            how the present situation is. I’ve met some of the people of that area and asked them how’s their surroundings in terms of air and 
                            water. Also, asked about if anyone is suffering with diseases due to the above factors.On day 03, I went to the same people where I met yesterday to explain them on how they can reduce 
                            the pollution in their nearby surroundings. It can be done only when each one of them joins hands on this 
                            issue.<br/><br/>Advantages of planting Trees: <br/><br/>
                            • They can also help to reduce energy costs by providing shade in the summer and acting as windbreaks 
                            in the winter <br/>
                            • They help to reduce air pollution, which can improve respiratory health.<br/>
                            • They can also provide a calming effect and reduce stress.<br/>
                            • They provide a very habitat for a variety of wildlife, which helps to maintain biodiversity.
                        </p>
                    </div>
                </div>
                <div className="section-card-container b3">
                    <h1 className="week-title">Week 03</h1>
                    <hr />
                    <div className="text-container">
                        <p className="week-description">
                            On week 03, I Conducted survey on plants trees and their in environment 
                            protection and learnt tress are vital because they storage carbon dioxide and 
                            gives oxygen .Conducted survey on plantation of trees to reduce the 
                            deforestation which is the main hazard for the environment as it results in 
                            climate changes ,more pollution and decline of the ground water etc ,as the 
                            pollution increased the needs also increased for the construction mining and 
                            timber production.<br/><br/>Visted a nursery and gathered information about different types of 
                            trees and their effects in reducing pollution and observed that board leaved 
                            species will give more shelter and reduce the air pollution as well noise 
                            pollution .Started planting trees in the surroundings with the people and in 
                            part of this I learnt that by planting trees we will able to reduce the global 
                            warming.

                        </p>
                    </div>
                </div>
                <div className="section-card-container b4">
                    <h1 className="week-title">Week 04</h1>
                    <hr />
                    <div className="text-container">
                        <p className="week-description">
                            Started gathering information about deforestation and its effect on 
                            environment and learnt without reforestation can result in habitat changes 
                            and climate changes and the sun radiation will directly hit the earth more 
                            over there will be depletion of ground water level. 
                            needs like construction with its effects of over population and illegal lagging 
                            moreover for preparing paper etc..,:I started spreading awareness about the deforestation and its 
                            effects to the environment .Deforestation is caused for fulfilling the human 
                            activities and their needs.Started planting trees in the surroundings with the people and in 
                            part of this I learnt that by planting trees we will able to reduce the global 
                            warming.
                        </p>
                    </div>
                </div>
                <div className="section-card-container b5">
                    <h1 className="week-title">Week 05</h1>
                    <hr />
                    <div className="text-container">
                        <p className="week-description">
                        As a part of my project on this week we findout what are the problems on our tree plantation based on week-1,2&3 reports.We planned to solve those problems with some necessary steps and ideas.
                        we accumulated some problems on Tree plantation.We
                        observed some problems like<br/>
                        1.Some animals like goats,buffaloes ate the plants<br/>2.Some leaves were withered because of insufficient water.<br/>3.The plants was not grown properly because of deficiency
                        of fertilizers. we dug water pits to plants for providing sufficient water. We learned that water plays a major role for surviving.water is the transport
                        medium of nutrients that plants absorb in order to grow and photosynthesis.water is also a source of coolness for
                        plants,especially during the summer months.we fenced off the trees for protecting from animals and children. A fence offers an obvious border b/w kids play areas and your garden plot.<br/><br/>
                        SAVE TREES As our population is too fast
                        planting trees today is essential for future generations.We
                        motivated like that.<br/><br/> LET'S SAVE TREES,DON'T CUT DOWN A
                        LIFE
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='gallery-container'>
            <h1 className='gallery-container-title'>GALLERY CONTAINER</h1>
            <ul className='gallery-items box'>
                <li className='gallery-item box'>
                    <img src = {img1} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img2} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img3} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img4} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img5} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img6} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img7} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img8} alt = "image" className='card-img' />
                </li>
                <li className='gallery-item box'>
                    <img src = {img9} alt = "image" className='card-img' />
                </li>
            </ul>
        </div>
        <footer>
            <div className="footer-content">
                <h3>Naga Pujith Kumar</h3>
                <p>A website on Tree Plantation behalf of CSP</p>
                <div className="centerdiv">
                    <a href = "https://www.facebook.com/pujithKumar"  target="_blank" className='link'><i className="fa fa-2x fa-facebook"></i></a>
                    <a href = "https://www.instagram.com/pujith_2004/" target="_blank" className='link'><i className="fa fa-2x fa-instagram"></i></a>
                    <a href = "https://twitter.com/PujithNaga" target="_blank" className='link'><i className="fa fa-2x fa-twitter"></i></a>
                    <a href = "https://www.youtube.com/channel/UCsrMmJbpLS4nhHXboEFkSRw" target="_blank" className='link'><i className="fa fa-2x fa-youtube"></i></a>
                    <a href = "https://www.linkedin.com/in/pujith-pamujula/" target="_blank" className='link'><i className="fa fa-2x fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy; 2020 Tree Plantation. designed by  <span>Pujith Kumar</span></p>
            </div>
        </footer>
            </div>
        )
    }
}
  
  export default MyBio