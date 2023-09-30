import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";




export const Sports = () => {

    const src = "https://www.youtube.com/embed/3mHmjSosJRg";
    


    return (


        <div>
            <h1 className="text-center mt-5">Sports you can do &#9977;</h1>

            <div className="d-flex row gx-0">
                <p className="ps-5 pe-5 mt-5 py-2 col-lg-8" style={{background: 'whitesmoke'}}>Are you an active soul, constantly seeking new adventures to cure your boredom? Well, guess what?
                 The world of sports is your ultimate playground! Brace yourself, because there's a whole universe of thrilling activities out there just waiting for you to discover. 
                 And here's the best part: chances are, you haven't even heard of most of them! So why not dive headfirst into the unknown and give these hidden gems a shot? 
                 Get ready to unleash your inner explorer and embark on an exhilarating journey through uncharted sporting territories. Who knows what incredible talents and passions you might uncover along the way? 
                 So, gear up, my friend, because it's time to break free from the mundane and embrace the extraordinary. Let the games begin!</p>
            

            <div className="sportsListBtn m-auto justify-content-center d-flex mt-3 col-lg-3"> 
                <a href='https://www.topendsports.com/sport/list/index.htm' target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Show Me the List</button> 
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            </div>

            <h2 className="text-center">Wanna watch sports instead?</h2>
                <p className="ps-5 pe-5 mt-5 py-2">If you're more of a spectator than a player when it comes to sports, fret not! 
                There's a whole world of excitement waiting for you online. 
                Imagine this: you can now immerse yourself in the thrill of live sports action without even leaving your cozy couch. 
                Yes, you heard it right! There are countless websites out there that offer free live streaming of your favorite sports. 
                So, kick back, relax, and get ready to witness the show of a lifetime from the comfort of your own home.</p>


            <div class="container">
                <div class="row row-cols-2 row-cols-lg-5 g-1 g-lg-3 text-center justify-content-between mb-5">

                    <a href="http://www.espn.com/watch" target="_blank" className="bg-primary rounded">
                        <div class="col">
                            <div class="p-3">ESPN</div>
                        </div>
                    </a>

                    <a href="https://www.stream2watch.ws/" target="_blank" className="bg-primary rounded">
                        <div class="col">
                            <div class="p-3">Stream2Watch</div>
                        </div>
                    </a>

                    <a href="https://crickfree.org/" target="_blank" className="bg-primary rounded">
                        <div class="col">
                            <div class="p-3">Cricfree</div>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/watch/" target="_blank" className="bg-primary rounded">
                        <div class="col">
                            <div class="p-3">Facebook Watch</div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}