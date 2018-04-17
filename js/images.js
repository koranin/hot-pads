import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.png';
import img4 from '../img/img4.gif';
import small from '../img/small.svg';
import large from '../img/large.svg';

const images = [
  { url: img1, caption: 'Image in .jpeg extension.' },
  { url: img2, caption: 'Image in .jpg extension.' },
  { url: img3, caption: 'Image in .png extension.' },
  { url: img4, caption: 'Image in .gif extension.' },
  { url: small, caption: 'Image in .svg extension < 1MB.' },
  { url: large, caption: 'Image in .svg extension >= 1MB.' }
];

export default images;