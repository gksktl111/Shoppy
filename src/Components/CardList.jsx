import React, { useEffect, useState } from 'react';
import Card from './Card';
import { loadProduct } from '../api/firebase';

export default function CardList() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    loadProduct()
      .then((product) => {
        // 이미지 URL을 추출하여 배열에 저장
        // Object.values : 객체를 배열로 변환해줌
        // console.log(Object.values(product));
        const urls = Object.values(product).map((item) => item.imgae);
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {/* 카드 리스트 css작성하기  */}
        {imageUrls.map((url, index) => (
          <li key={index}>
            <Card url={url} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
