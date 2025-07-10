'use client';
import { useRef, useState } from 'react';

import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);

      return;
    }

    const fileReader = new FileReader();

    // 當檔案讀取完成後，將結果（圖片的資料 URL）設定到 state
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    // 讀取檔案並轉換為資料 URL（適用於圖片顯示預覽）
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>
          Pick Image
        </button>
      </div>
    </div>
  );
}
