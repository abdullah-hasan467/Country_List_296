import { SlActionRedo } from "react-icons/sl";
export const HeroSection = () =>{

    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl"> Explore the World, One Country at a Time. </h1>
                    <p className="paragraph">
                        Discover the history, culture and beauty of every nation. Sort, search and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box"> Start Exploring <SlActionRedo /></button>
                </div>

                <div className="hero-image">
<img className="banner-image" src="/public/images/world.png" alt="wolrd Image">
</img>
</div>


            </div>
        </main>
    )
}