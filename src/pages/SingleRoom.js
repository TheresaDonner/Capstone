import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { RoomContext } from "../Context"
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beachside: this.props.match.params.beachside,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    // componentDidMount() {

    // }
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.beachside);
        if (!room) {
            return <div className="error">
                <h3>No Such Room Could Be Found...</h3>
                <Link to="/rooms" className="btn-primary">Back To Rooms Page</Link>

            </div>
        }
        const { name,
            description,
            capacity,
            size,
            price,
            extras,
            pets,
            breakfast,
            images
        } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back To Rooms Page
                </Link>

                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>
                                max capacity :{" "}
                                {capacity > 2 ? `${capacity} people` : `${capacity} People `}
                            </h6>
                            <h6>breakfast: {breakfast && "Included"}</h6>
                            <h6>{pets ? "pets allowed" : "No Pets Allowed"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Room amenities</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>;
                        })}

                    </ul>
                </section>
            </>
        );
    }
}