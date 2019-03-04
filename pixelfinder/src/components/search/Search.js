import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/Image-Results';


 class Search extends Component {
     state ={
         searchText:'',
         amount: 15,
         apiUrl:'https://pixabay.com/api/',
         apiKey:'11779275-6b3b7700c408fb30680b2955d',
         images:[]
     }

     onTextChange=(e)=>{
      const val = e.target.value;
      this.setState({[ e.target.name]:val},
        () =>{
        if(val === ''){
            this.setState({images:[]});
        }
        else{
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true>`)
            .then(res =>
                this.setState({images:res.data.hits}))
                .catch(err => console.log(err));

        }
     })


    }


    onAmountChange =(e,index,value)=>{
        this.setState({amount:e.target.value})
         }

    render(){
        console.log(this.state.images)
        return(
            <div>
           <TextField 
            name="searchText" 
            value={this.state.searchText}
            onChange={this.onTextChange}
            floatinglabeltext = "Search For Images"
            fullWidth ={true}/>

            <br />
            <Select
            name="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}>
    <MenuItem value={0}>
      <em>None</em>
    </MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={15}>15</MenuItem>
    <MenuItem value={30}>30</MenuItem>
    <MenuItem value={50}>50</MenuItem>
  </Select>
  <br />

  {
      this.state.images.length > 0 ? (<ImageResults images={this.state.images} />):
      null
  }
            </div>

        )
    }

}

export default Search;