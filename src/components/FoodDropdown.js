import React from "react";

class FoodList extends React.Component {
    state = {
        food: []
    }
    
    // using promises javascript
    // componentDidMount() {
    //     fetch('http://localhost:8000/food')
    //     .then((response) => response.json())
    //     .then(foodList => {
    //         this.setState({ food: foodList });
    //     });
    // }

    // using the async/await syntax
    async componentDidMount() {
        const response = await fetch(`http://localhost:8000/food`);
        const foodList = await response.json();
        this.setState({ food: foodList });
    }
    
    render() {
        return (
            <form className="row" style={{ margin: "auto", width: "320px" }}>
                <label className="form-label text-start">
                    Pick your favorite flavor:
                    <select className="form-select" options={this.state.value}>
                        {this.state.food.map((food) => (
                            <option key={food.id}>{food.name}</option>
                        ))}
                    </select>
                </label>
            </form>
        )
    }
}

export default FoodList;