import React, { useEffect, useState } from 'react'
import { useUser } from '../context/CodeContext';
import './ZLayout.css';


export const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const {preview, setPreview} = useUser()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className='uploadphoto'>
            <label htmlFor="filePicker" style={{ background:"lightgrey" }}></label>
            <input id="filePicker" accept="image/*" type={"file"} onChange={onSelectFile}/>
            {selectedFile &&  <img src={preview}/> }
        </div>
    )
}

export default ImageUpload