'use server'

import cloudinary from 'cloudinary'
import '../lib/cloudinaryConfig';
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import os from 'node:os'
import path from 'node:path';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const saveFilesToLocal = async (file) =>{
    try {
        const bufferPromise = file.arrayBuffer()
                .then(data => {

                    // creating a buffer file from the upload image
                    const buffer = Buffer.from(data)

                // renaming the upload file
                const name = uuidv4()
                const ext = file.type.split('/')[1]

                // creating file upload to temp dir
                const tempDir = os.tmpdir()
                const uploadToTempDir = path.join(tempDir, `/${name}.${ext}`)

                // uploading file to directory
                fs.writeFile(uploadToTempDir, buffer)

                return {filepath: uploadToTempDir, filename: file.name}
            })
        return await Promise.all([bufferPromise])

    } catch (error) {
        throw error
    }
}

const uploadToCloudinary = async (newUpload) =>{

    const file = newUpload;

    try {
        // if(!Array.isArray(file)){
        //     throw new Error('Invlid file format. Expected an array')
        // }

        const bufferPromise = file.map(data => (
            cloudinary.v2.uploader.upload(data.filepath, { folder: 'hng_upload'})
        ))

        // wait for all uploads to complete
        const uploadData = await Promise.allSettled(bufferPromise)
        
        console.log(uploadData)
        return uploadData

    } catch (error) {
        console.error(error)
    }
   
}


export const upload = async (uploadFile) =>{
    try {
        if(!uploadFile){
            throw new Error('No file uploaded')
        }

        // save to temp dir
        const newUpload = await saveFilesToLocal(uploadFile)

        //save file to cloudinary
        const avatar = await uploadToCloudinary(newUpload)

        // delete from temp dir after upload to cloudinary
        newUpload.map(data => fs.unlink(data.filepath))

        return avatar

    } catch (error) {
        throw error
    }
}