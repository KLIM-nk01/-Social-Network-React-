import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import state from './redux/state'

/*let postData = [
    {
        idUrl: '1',
        imgSrc: 'https://cs-love.net/avatars/images/cs-love-avatar-1.jpg',
        nameSurname: 'Big Daddy',
        postTextContent: 'People in Great Britain like animals. There are even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
        postImgContent: '',
        countLikes: 25,
        countComments: 56,
        countSharePost: 66,
    },
    {
        idUrl: '2',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CnE68XQBRKNs4u2QK1UqyTq1nXh-DkmrxA&usqp=CAU',
        nameSurname: 'Big Mom',
        postTextContent: 'The British often think their animals are like people. For example in Britain animals can have jobs like people. British Rail has cats and pays them for their work. Their job is to catch mice. There is usually one cat per station. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
        postImgContent: '',
        countLikes: 101,
        countComments: 45,
        countSharePost: 84,
    },
    {
        idUrl: '3',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEEPu4T3S0axc4F4wshrMsnIs2w0tJqHqhg&usqp=CAU',
        nameSurname: 'Happy Hours',
        postTextContent: 'The British often think their animals are like people. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
        postImgContent: '',
        countLikes: 56,
        countComments: 36,
        countSharePost: 73,
    },
    {
        idUrl: '4',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU',
        nameSurname: 'Big Man',
        postTextContent: 'The British often think their animals are like people. For example in Britain animals can have jobs like people. British Rail has cats and pays them for their work. Their job is to catch mice. There is usually one cat per station. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
        postImgContent: '',
        countLikes: 66,
        countComments: 7,
        countSharePost: 9,
    },

];

let dialogsData = [
    {idUrl: '1', nameSurname: 'Nikita Klimovich', srcPhoto: 'https://cs-love.net/avatars/images/cs-love-avatar-1.jpg'},
    {idUrl: '2', nameSurname: 'Angela Znakovan', srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CnE68XQBRKNs4u2QK1UqyTq1nXh-DkmrxA&usqp=CAU'},
    {idUrl: '3', nameSurname: 'Mihail Zver', srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEEPu4T3S0axc4F4wshrMsnIs2w0tJqHqhg&usqp=CAU'},
    {idUrl: '4', nameSurname: 'Nikita Klimovich', srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU'},
    {idUrl: '5', nameSurname: 'Nikita Klimovich', srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU'},
    {idUrl: '6', nameSurname: 'Nikita Klimovich', srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU'},
];

let imgData = [
    {imgSrc: 'https://images.wallpaperscraft.ru/image/doroga_asfalt_razmetka_130996_1600x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/osen_les_park_128379_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/osen_les_derevia_129655_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/osen_les_derevya_listva_97818_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/okean_pliazh_vid_sverhu_134429_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/okean_vid_sverhu_poberezhe_135294_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/okean_vid_sverhu_poberezhe_134785_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/okean_vid_sverhu_techenie_138131_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/pirs_prichal_more_sumerki_bereg_118549_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/pirs_more_sumerki_147783_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/pirs_volny_more_155083_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/skulptura_zvezdnoe_nebo_kamennyj_123440_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/korabl_more_zakat_luna_63381_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/noutbuk_chashka_ochki_rastenie_114948_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/vagon_metro_podzemnyj_120794_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/kosmonavt_gravitatsiia_skafandr_138001_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/korabl_more_zakat_luna_63381_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/korabl_more_skaly_153231_4030x1970.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/bmw_fary_podsvetka_137326_1920x1200.jpg'},
    {imgSrc: 'https://images.wallpaperscraft.ru/image/mercedesbenz_mercedes_zapravka_131955_1920x1200.jpg'},
];*/



ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
