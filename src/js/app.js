import '../style/style.scss';
import picturefill from 'picturefill';
picturefill();
const imagesLoaded = require('imagesloaded');
import LocomotiveScroll from 'locomotive-scroll';

import Loading from './components/loading';
import Menu from './components/menu';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
    }
    init() {
        // new Loading();
        new Menu();
        this.LocomotiveScroll();
        // 画像の読み込み開始
        const preloadImages = () => {
            return new Promise((resolve) => {
                imagesLoaded(
                    document.querySelectorAll('img'),
                    {
                        background: true,
                    },
                    resolve
                );
            });
        };
        preloadImages().then(() => {
            // 画像を全て読み込んだら実行
            new Loading();
        });
    }
    LocomotiveScroll() {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            tablet: {
                smooth: true,
            },
            smartphone: {
                smooth: true,
            },
            reloadOnContextChange: true,
        });
        const anchors = [...document.querySelectorAll('a[href*="#"]')];
        if (anchors.length > 0) {
            anchors.forEach((anchor) => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (anchor.hash) {
                        scroll.scrollTo(anchor.hash);
                    }
                });
            });
        }
    }
}
new App();
