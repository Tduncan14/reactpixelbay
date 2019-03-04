import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


 class Search extends Component {
     state ={
         searchText:'',
         amount: 15,
         apiUrl:'https://pixabay.com/api/',
         apiKey:'11779275-6b3b7700c408fb30680b2955d',
         images:[]
     }


 
    render(){
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
            value={this.state.amount}>
    <MenuItem value={0}>
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
            </div>

        )
    }

}

export default Search;