import { gsap } from 'gsap';

export default class Loading {
    constructor() {
        this.elms = {
            text: document.querySelectorAll('[data-loading="text"]'),
            wrap: document.querySelector('[data-loading="wrap"]'),
        };
        this.init();
    }
    init() {
        this.start();
    }
    start() {
        gsap.config({
            force3D: true,
        });
        const tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.6,
                ease: 'power2.inOut',
            },
        });
        tl.to(this.elms.text, {
            className: '+=loading__title--text is-active',
        });
        tl.to(
            this.elms.wrap,
            {
                duration: 1,
                ease: 'power1.out',
                opacity: 0,
            },
            3
        );
        tl.to(
            this.elms.wrap,
            {
                duration: 1,
                ease: 'power1.out',
                display: 'none',
            },
            3.3
        );
        tl.play();
    }
}
