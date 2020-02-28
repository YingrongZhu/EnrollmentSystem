import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// function SuccessSubmit(){
//     return <Message message={ this.state.message } />
// }

// const Message = (props) => {
//     return <div>{ props.message }</div>
//   }
export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[],
            show: false,
            // message: 'Submit Successfully'
            value: 'Please Submit PDF'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: 'Submit Successfully!'})
      }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
         .then(response =>{
             if (response.data.length>0){
                 this.setState({
                     users:response.data.map(user=>user.username),
                     username:response.data[0].username
                 })
             }
         })
        
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
    onSubmit(e){
        e.preventDefault();
        const exercise ={
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
          .then(res =>console.log(res.data));
        window.location = '/';
    }
    render(){
        return(
        <div>
            <h3>Create New Camp</h3>
            <form onSubmit={this.onSubmit}>
                <table cellspacing="100">
                    <th>
                    <label>Username: </label>
                    <select ref = "userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                        </select>
                        </th>
               
                    <th>
                    <label>Description: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                    </th>
                    </table>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input 
                    type="text"
                    required
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>                   
                    
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
            <form>
                <div>
                    <h5>{this.state.value}</h5>
                    {/* <label for="pdf_upload">Choose a form to upload (PDF)</label> */}
                    <input type="file" id="pdf_upload" name="pdf_upload" accept=".pdf" />
                    <button onClick={this.handleChange}>Submit</button>
                </div>
                {/* <div class="preview">
                    <p>No files currently selected for upload</p>
                </div> */}
                <div>
                    {/* <button onClick={ this.handleClick }>
                        Submit
                    </button>
                    { this.state.show &&
                    <Message message={ this.state.message } />
                     } */}
                    
                    
                </div>
            </form>
            {/* {ShowFile()} */}
        </div>
        )
    }
}