import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ZoomIn from '@material-ui/core/Zoom';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';


class ImageResults extends Component {

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
                        <IconButton >
                          
                        </IconButton>
                      }
                    />

                  </GridListTile>
                ))}
              </GridList>
            )
             

          } else {
            imageListContent = null;
          }
        
       

        return(
            <div>
                {imageListContent}
            </div>
        )
    }
}

ImageResults.propTypes ={
   images:PropTypes.array.isRequired
}
export default ImageResults