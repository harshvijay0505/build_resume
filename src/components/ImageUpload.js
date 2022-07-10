import { useUser } from '../context/CodeContext';
import { useState } from 'react';


const UploadAndDisplayImage = () => {
  const[flag,setFlag]=useState(true)

  const {selectedImage, setSelectedImage} = useUser();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    setFlag(false)
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
    setFlag(true)
  };

  return (
    <>
      <div>
      {flag? <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          style={styles.container}
        />:<>

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove
            </button>
          </div>
        )}</>}
      </div>
    </>
  );
};

export default UploadAndDisplayImage;

// Just some styles
const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:"40%",
  },
  preview: {
    // marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "50%", maxHeight: '320vh' },
  delete: {
    cursor: "pointer",
    padding: 5,
    maxWidth: "14.1vh",
    maxHeight:"14vh",
    background: "lightgrey",
    color: "black",
    border: "none",
  },
};