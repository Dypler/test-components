import './style.scss'
import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
// new Splide( '#image-carousel' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
    new Splide( '#example-grid', {
        type: 'loop', // スライダーの種類 @type: { string }, default: 'slide'
        height: '720px', // スライダーの高さ @type: { number }, default: ０
      gap: '1em', // スライド間のギャップサイズ @type: { number|string }, default: ０
        perPage: 2, // 1ページに表示するスライドの数 @type: { number }, default: ０
        perMove: 1, // スライダーが移動するスライドの数 @type: { number }, default: ０
        grid: {
        dimensions: [ [ 1, 1], [ 2, 1 ], [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 1 ] ], // 配列としてのディメンション（行と列）のコレクション @type: { Array|boolean }, default: false
        gap: { // オブジェクトとしての行と列のギャップサイズ @type: { Object }, default: {}
          row: '20px', // 行の数 @type: { number }, default: 1
                col: '20px' // 列の数 @type: { number }, default: 1
        }
        },
        breakpoints: {  // ブレークポイントの定義
            600: {
                height: '10rem',
                perPage: 1,
                grid: {
                    dimensions: [ [ 1, 1 ]],
            gap: {
              row: '20px',
              col: '5px'
            }
                }
            }
        }
    } ).mount( { Grid } )
  } );