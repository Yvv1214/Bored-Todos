import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";




export const Social = () => {

    const src = "https://www.youtube.com/embed/SlVKZ9zw2UE"
    


    return (


        <div>
            <h1 className="text-center mt-5">Social Activities 😀</h1>

            <div className="d-flex row gx-0">
                <p className="ps-5 pe-5 mt-5 py-2 col-lg-8">Even for us introverts, there are times when we can't help but feel a touch of cabin fever. 
                But fear not! Stepping out of our cozy abodes and venturing into the world outside can work wonders in banishing boredom. It's a chance 
                to witness the excitement unfolding around us, to immerse ourselves in the happenings of the world. And let me tell you, it's not just 
                about killing time; it's about discovering a whole new realm of entertainment. Who knows, you might stumble upon an event that captivates 
                your senses, leaving you thoroughly entertained. And the best part? It's an opportunity to forge new connections, to meet fascinating 
                individuals who could become lifelong friends or simply enjoy a delightful hangout with a cherished companion. So, why not break free 
                from the confines of your four walls and embark on an adventure that promises both amusement and camaraderie?</p>
            

            <div className="sportsListBtn m-auto justify-content-center d-flex mt-3 col-lg-3"> 
                <a href='https://socialself.com/blog/social-activities/' target="_blank" rel="noreferrer">
                    <button className="btn btn-success">Show Me Social Activities</button> 
                </a>
            </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-4">
            <iframe
                width="560"
                height="315"
                src={src}
                title="Youtube Player"
                allowFullScreen
            />
            </div>

            <h2 className="text-center">Event Web Links</h2>
                <p className="ps-5 pe-5 mt-5 py-2">Are you itching to break free from the confines of your house and mingle with some amazing people? 
                Or perhaps you're yearning for a fun hangout session with a dear friend? Well, fret not, because the world wide web has got your back! 
                There are incredible websites out there that showcase a plethora of upcoming festivals and concerts, catering to all kinds of tastes 
                and preferences. But hold on, it's not just about the big, high-energy events that'll get your heart racing. Oh no, my friend, there's 
                a whole world of mellow and delightful experiences waiting for you too!
                <br></br>
                <br></br>
                Picture this: strolling through charming small business vendor markets, indulging in the mouthwatering delights of a carnival, or 
                savoring a delightful brunch in a cozy little spot. And let's not forget about those small-scale, family-friendly festivals that 
                offer a perfect blend of music and scrumptious food. These events are all about creating a warm and inviting atmosphere, where you 
                can truly connect with others and make lasting memories.
                <br></br>
                <br></br>
                Now, here's the cherry on top: if you find yourself lacking in the friend department, fear not! 
                There are websites specifically designed to help you meet like-minded individuals who are just as eager to socialize. 
                You can join these platforms and arrange to meet up with newfound friends in a public space for a delightful lunch. 
                It's the perfect opportunity to expand your social circle and embark on exciting adventures together.
                <br></br>
                <br></br>
                So, whether you're seeking an electrifying concert or a laid-back gathering, the internet is your ultimate guide to finding the 
                perfect event. Get ready to step out of your comfort zone, embrace new experiences, and create unforgettable moments with 
                incredible people. The world is waiting for you, my friend, so go out there and make the most of it!</p>


            <div class="container">
                <div class="row row-cols-2 row-cols-lg-5 g-1 g-lg-3 text-center justify-content-between mb-5">

                    <a href="https://www.musicfestivalwizard.com/" target="_blank" className="bg-success rounded">
                        <div class="col">
                            <div class="p-3">Wizard Festival</div>
                        </div>
                    </a>

                    <a href="https://www.eventbrite.com/" target="_blank" className="bg-success rounded">
                        <div class="col">
                            <div class="p-3">EventBrite</div>
                        </div>
                    </a>

                    <a href="https://nextdoor.com/events/calendar/" target="_blank" className="bg-success rounded">
                        <div class="col">
                            <div class="p-3">NextDoor</div>
                        </div>
                    </a>

                    <a href="https://www.meetup.com/" target="_blank" className="bg-success rounded">
                        <div class="col">
                            <div class="p-3">Meetup</div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}