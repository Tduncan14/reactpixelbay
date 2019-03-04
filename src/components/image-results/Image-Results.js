import React,{Component} from 'react';
import PropTypes from 'prop-types';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    color:'white'
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
 
});


class ImageResults extends Component {
  
  state ={
    open:false,
    currentImg: ''
  }

  handleOpen=(img)=>{
  this.setState({
    open:true,
    currentImg:img
  })
  }

  handleClose=()=>{
    this.setState({open:false});
  }



    render(){
        let imageListContent;
        const{images} = this.props;

        if (images) {
            imageListContent = (
                <GridList cols={3}>
                {images.map(img => (
                  <GridListTile key={img.id}>
                    <img src={img.largeImageURL} alt={img.title} />
                    <GridListTileBar
                      title={img.tags}
                      subtitle={<span>by: {img.user}</span>}
                      actionIcon={
                     
                        <Fab color="primary">
                            <NavigationIcon color="secondary" onClick={()=> this.handleOpen(img.largeImageURL)} className={styles.icon} color="error">
                            Click
                         </NavigationIcon>

                        </Fab>
                   
                      }
                    />

                  </GridListTile>
                ))}
              </GridList>
            )
             

          } else {
            imageListContent = null;
          }
        
       
       const actions = [
         <Fab label ="Close" 
         disabled aria-label="Delete"
         className={styles.icon}
         primary={true} 
         onClick={this.handleClose}>
         <DeleteIcon />
         </Fab>
       ]
        return(
            <div>
                {imageListContent}
                <Dialog
                actions ={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >
                <img src={this.state.currentImg}
                 alt=""
                 style={{width:'100%'}} />

                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes ={
   images:PropTypes.array.isRequired
}
export default ImageResults