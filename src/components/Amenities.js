import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHamburger, FaSwimmingPool, FaSwimmer } from "react-icons/fa"

export default class Amenities extends Component {
    state = {
        amenities: [
            {
                icon: <FaCocktail />,
                title: "Cocktails",
                info: " We offer some of the best Cocktails"

            },
            {
                icon: <FaHamburger />,
                title: "Dining",
                info: "Breakfast – served complimentary with your room rate.  Lunch casually at the beach or pool on savory sandwiches, soups and salads. In the evening, island elegance prevails "

            },
            {
                icon: <FaSwimmingPool />,
                title: "Swimming Pool",
                info: "Enjoy the crystal clear saltwater pool or relax poolside and soak in the sun"

            },
            {
                icon: <FaSwimmer />,
                title: "Beaches",
                info: " Enjoy diving, snorkeling or lounging on the immaculate sand at the beach"

            }
        ]
    }
    render() {
        return (
            <section className="amenities">
                <Title Title="Amenities" />
                <div className="amenities-center">
                    {this.state.amenities.map((item, index) => {
                        return <article key={index} className="amenitie">
                            <span>{item.icon}</span>
                            <h6>{item.Title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
