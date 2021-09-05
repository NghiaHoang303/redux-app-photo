import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/banner'
import Images from '../../../../constants/images'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PhotoList from '../../../../features/Photo/components/PhotoList'
import {useHistory} from 'react-router-dom'
import {removePhoto} from '../../photoSlice'


// function MainPage(props) {
//     const dispatch = useDispatch();
//     const photos = useSelector(state => state.photos)
//     console.log('List of photos : ',photos)
//     const history = useHistory();


//     const handlePhotoEditClick = (photo) => {
//         console.log('Edit: ', photo);
//         const editPhotoUrl = `/photos/${photo.id}`;
//         history.push(editPhotoUrl);
//       }
    
//       const handlePhotoRemoveClick = (photo) => {
//         console.log('Remove: ', photo);
//         const removePhotoId = photo.id;
//         const action = removePhoto(removePhotoId);
//         dispatch(action);
//       }
//     return (
//         <div className="photo-main">
//             <Banner title='Your awesome photos ' backgroundUrl= {Images.ORANGE_BG}></Banner>
//             <Container className="text-center">
//                 <div className="py-5">
//                     <Link to="/photos/add">Add new photos</Link>
//                 </div>

//                 <PhotoList
//                     photoList={photos}
//                     onPhotoEditClick={handlePhotoEditClick}
//                     onPhotoRemoveClick={handlePhotoRemoveClick}
//         />
//             </Container>
//         </div>
//     )
// }

// MainPage.propTypes = {

// }

// export default MainPage

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  const history = useHistory();
  // console.log('List of photos: ', photos);

  const handlePhotoEditClick = (photo) => {
    console.log('Edit: ', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove: ', photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5 mb-2">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList 
        className="mb-2"
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;