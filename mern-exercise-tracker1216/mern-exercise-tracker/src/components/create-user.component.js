import React,{Component} from 'react';
import axios from 'axios'



// function Check() {
//   var objFile = document.getElementById("fileId");
//     if(objFile.value == "") {
//         alert("不能空")
//     }

//     console.log(objFile.files[0].size); // 文件字节数
    
//     var files = $('#fileId').prop('files');//获取到文件列表
//     if(files.length == 0){
//         alert('请选择文件');
//     }else{
//         var reader = new FileReader();//新建一个FileReader
//         reader.readAsText(files[0], "UTF-8");//读取文件 
//         reader.onload = function(evt){ //读取完文件之后会回来这里
//             var fileString = evt.target.result; // 读取文件内容
//     }
// }
// }


export default class CreateUsers extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.check=this.check.bind(this);
        this.state={
            username:'',
            mode:0
            
            

        }
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

    check(e){
        this.setState({username: 1})
        console.log(this.state.username);
        var objFile = document.getElementById("file");
        var path = objFile.value;
        console.log(path);
        if(objFile.value == "") {
            alert("不能空")
        }
        else{
        console.log(objFile.files[0].size); 
        let file = objFile.files[0];
        console.log(file); 
        console.log(file.path);
        let reader = new FileReader();
        reader.onload = function(){
        document.getElementById("text").innerHTML = this.result;
        };
        reader.readAsText(file);
        console.log(reader.result); 
        }// 文件字节数

    }

    test(){
        let formData = new FormData();
        let myFile = document.getElementById('file');
        formData.append('myFile', myFile.files[0]);
        console.log(myFile.files[0]);
        console.log(formData.get('myFile'));
    }

//     handleFiles(files)
// {
// //   if(files.length){
//     var objFile = document.getElementById("file");
//     let file = objFile[0];
//     let reader = new FileReader();
//     reader.onload = function(){
//       document.getElementById("text").innerHTML = this.result;
//     };
//     reader.readAsText(file);
// //    }
// }

    render(){
        return(

            <div>
                <h3>Create New User</h3>
                <input type="file" id="file" name="file" accept=".txt" />
                <button onClick={this.test}>Submit</button>
               <p id="text"></p>
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