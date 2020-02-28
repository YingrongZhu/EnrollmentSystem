import React,{Component} from 'react';
import axios from 'axios'

var ff = null;
export default class CreateUsers extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this);
        this.state={
            username:'',
            mode:0,  
            selectedFile: null       
        }
    }
    onChangeHandler(e){

        console.log(e.target.files[0])
        ff=(e.target.files[0])
        this.setState({
            // selectedFile: event.target.files[0]
            selectedFile:1,
            username:"kjahd"
        })
        console.log(this.state.selectedFile)
        console.log(this.state.username)
    }
    onClickHandler (e) {
        var data = new FormData() 
        // data.append('file', this.state.selectedFile)
        data.append('file', ff)
        console.log(data)
        axios.post("http://localhost:5000/users/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      }).catch((e)=>{
          alert(e)
      })
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user ={
            username: this.state.username,
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add',user)
            .then(res =>console.log(res.data));
        
        this.setState({
            username: '',
            mode:1
        
        })
        
        

        
    }

    render(){
        return(

            <div>
                <h3>Create New User</h3>
                <input type="file" id="pdf_upload" name="pdf_upload" accept=".pdf" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                <form action="http://localhost:5000/users/up" enctype="multipart/form-data" method = "POST">
                    <input type="file" name="upl" accept=".pdf"/>
                    <input type="submit" className="btn btn-primary" value="go"/>
                </form>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                    <div>{ this.state.mode ?  'Add successfully':'' }</div>                  

                </form>
            </div>

        )
    }
}