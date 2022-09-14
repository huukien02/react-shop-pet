import './Banner.css';
import React, { useEffect, useState } from 'react';

var index = 0;
// const chanegeImage = () => {
//     var arr = [
//         'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-pet-cartoon-fresh-hand-painted-banner-image_176200.jpg',
//         'https://thumbs.dreamstime.com/z/chubby-hamster-new-year-banner-lovely-chubby-hamster-gold-ingot-glitter-bokeh-pink-banner-spring-lunar-year-written-159511097.jpg',
//         'https://bizweb.dktcdn.net/100/254/772/themes/587686/assets/cate4_banner.jpg?1611196459015',

//     ]
//     document.getElementById('img').src = arr[index]
//     index++;
//     if (index == 2) {
//         index = 0;
//     }
// }
// setInterval(chanegeImage, 1500);

// const change = () => {
//         var rotator = document.getElementById('img');                         

//         var images = [
//             'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-pet-cartoon-fresh-hand-painted-banner-image_176200.jpg',
//             'https://thumbs.dreamstime.com/z/chubby-hamster-new-year-banner-lovely-chubby-hamster-gold-ingot-glitter-bokeh-pink-banner-spring-lunar-year-written-159511097.jpg',
//             'https://bizweb.dktcdn.net/100/254/772/themes/587686/assets/cate4_banner.jpg?1611196459015',
//         ];

//         rotator.src = images[index];
//         index++;
//         if(index == images.length)
//         {
//             index = 0
//         }
// }
// setInterval(change,1000)



function Banner() {

    return (
        <div className='banner'>
            <img id='img' src='https://bizweb.dktcdn.net/100/254/772/themes/587686/assets/cate4_banner.jpg?1611196459015' />
        </div>
    )
}

export default Banner