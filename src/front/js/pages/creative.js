import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";




export const Creative = () => {

    // const src = "https://www.youtube.com/embed/3mHmjSosJRg&t=85s";
    const src = "https://www.youtube.com/embed/E-Rd2mTbyrw";
    


    return (


        <div>
            <h1 className="text-center mt-5">Fullfill Your Creativity 🎭</h1>

            <div className="d-flex row gx-0">
                <p className="ps-5 pe-5 mt-5 py-2 col-lg-8">Unleash your inner artist when boredom strikes! 
                Creativity is not just limited to drawing or painting, it can be expressed in countless ways. 
                From music to pottery, sewing to dancing, acting and beyond, the possibilities are endless. 
                You can even take classes or attend art festivals and conventions to explore your creative side. 
                So why not break free from the mundane and let your imagination run wild? Who knows, you might just discover a hidden talent!</p>
            

            <div className="creativeBtnDiv m-auto justify-content-center d-flex mt-3 col-lg-3"> 
                <a href='https://www.goodhousekeeping.com/life/a26872864/what-to-do-when-bored/' target="_blank" rel="noreferrer">
                    <button className="btn btn-primary creativeBtn">The Creative List</button> 
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

            <h2 className="text-center">Creative Links</h2>
                <p className="ps-5 pe-5 mt-5 py-2">Are you on the hunt for exciting events and activities that cater to your creative spirit? 
                Look no further! There are incredible websites out there solely dedicated to connecting like-minded individuals and organizing 
                mind-blowing events. Imagine immersing yourself in a world where everything is meticulously handcrafted by talented small designers 
                and artists. It's a haven for those seeking unique and awe-inspiring creations. So, if you're ready to embark on a journey filled 
                with imagination, innovation, and endless possibilities, these websites are your gateway to a vibrant community of creative souls. 
                Get ready to be inspired and amazed!</p>


            <div class="container">
                <div class="row row-cols-2 row-cols-lg-5 g-1 g-lg-3 text-center justify-content-between mb-5">

                    <a href="http://www.etsy.com/" target="_blank" className="bg-primary rounded creativeLinks">
                        <div class="col">
                            <div class="p-3">Etsy</div>
                        </div>
                    </a>

                    <a href="https://www.eventbrite.com/" target="_blank" className="bg-primary rounded creativeLinks">
                        <div class="col">
                            <div class="p-3">EventBrite</div>
                        </div>
                    </a>

                    <a href="https://meetup.com/" target="_blank" className="bg-primary rounded creativeLinks">
                        <div class="col">
                            <div class="p-3">Meetup</div>
                        </div>
                    </a>

                    <a href="https://www.creativeboom.com/" target="_blank" className="bg-primary rounded creativeLinks">
                        <div class="col">
                            <div class="p-3">CreativeBoom</div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}