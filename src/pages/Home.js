import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Amenities from "../components/Amenities"
import FeaturedRooms from "../components/FeaturedRooms"



export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title="Luxury Ocean View Rooms"
                    subtitle="Starting at $419/NIGHT"
                >
                    <Link to="/rooms" className="btn-primary">
                        Resort Rooms
          </Link>
                </Banner>
            </Hero>
            <Amenities />
            <FeaturedRooms />

        </>
    );
}



