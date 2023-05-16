import React, { Component } from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputVal: "",
            place: "banglore",
            posts: [],
            width: window.innerWidth,
            resize: () => {
                this.setState({ width: window.innerWidth })
            }
        }
        console.log("constructor");

    }

    componentDidMount() {
        console.log("componentDidMount");

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))

        
        window.addEventListener('resize',this.state.resize)

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        document.title = this.state.place;

    }
    componentWillUnmount() {
        console.log("componentWillUnmount");

        window.removeEventListener("resize", this.state.resize)
    }


    render() {
        // console.log(this.props);
        console.log("render");

        const ChangeState = () => {
            this.setState({ place: this.state.inputVal })


        }

        return (
            <div>
                <h1 style={{ color: "white", fontSize: "23px" }}>{this.props.Name}</h1>
                <h1 style={{ color: "white", fontSize: "23px" }}>{this.state.width}</h1>

                <p style={{ color: "white", fontSize: "23px" }}>{this.state.place}</p>
                {/* <button onClick={()=>(this.setState({place:"Guntakal"}))} >change state</button> */}
                {/* or */}
                <input type="text" value={this.state.inputVal} onChange={(e) => (this.setState({ inputVal: e.target.value }))} style={{ height: 42, borderRadius: 8, fontSize: "20px" }} required />
                <button onClick={ChangeState} style={{ height: 50, backgroundColor: "crimson", color: "white", borderRadius: 8, padding: 10, marginTop: "20px" }}>change state</button>

                {
                    this.state.posts.map((p) => {
                        return (
                            <div key={p.id} style={{ maxHeight: "150px", border: "solid 2px pink", }} >
                                <p style={{ color: "white", fontSize: "23px" }}>{p.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}
export default ClassComponent
























