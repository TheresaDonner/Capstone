import React, { Component } from 'react'
// import items from './data'
import Client from './Contentful'


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minsize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };
    //getData
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "CapstoneBeachResort",
                order: "fields.price"
            });
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            });
        }

        catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData()
    }


    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;

        });
        return tempItems
    }

    getRoom = (beachside) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.beachside === beachside);
        return room;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ?
            target.checked : target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        },
            this.filterRooms)
    };
    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minsize,
            maxSize,
            breakfast,
            pets
        } = this.state

        // all the rooms

        let tempRooms = [...rooms];
        // transforming the values
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filtering by the type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //filtering by the capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        //filtering by the price
        tempRooms = tempRooms.filter(room => room.price <= price);

        //filtering by the size
        tempRooms = tempRooms.filter(room => room.size >= minsize && room.size <= maxSize)

        //filtering by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        //filtering by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        //changing the state
        this.setState({
            sortedRooms: tempRooms
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );





    }
}

const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
