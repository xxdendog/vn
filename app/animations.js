window.addEventListener('load', () => {
    new SplitText('.js-split-lines', { type: 'lines', linesClass: 's-line' });
    wrap('.s-line');

    if (document.querySelector('.preloader')) {
        gsap.timeline()
        .fromTo('.preloader .spinner', { opacity: 1}, {  opacity: 0, duration: .5, ease: 'power4.inOut'})
        .fromTo('.preloader', { y: "0%"}, {  y: "-100%", duration: 2, ease: 'power4.inOut'}, "<");
    }

    animation();
});

const wrap = (e) => {
    document.querySelectorAll(e).forEach(function (el) {
        el.outerHTML = '<div style="overflow:hidden">' + el.outerHTML + '</div>';
    });
}

const animation = () => {

    if (document.querySelector('.main')) {
        gsap.timeline({
            scrollTrigger: {
                trigger:'.main',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
            .fromTo('.main .heading .headline-main', { y: "20%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out'}, "<+1.3")
            .fromTo('.main .heading .js-split-lines .s-line', { y: "100%", opacity: '0'}, {  y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out'}, "<")
            .fromTo('.main .heading .button, .main .main-bottom', { opacity: '0'}, { opacity: '1', duration: 3, ease: 'power4.out'}, "<+.4");
    }

    if (document.querySelector('.features')) {
        gsap.set(".feature", {y: '7%', opacity: 0});

        ScrollTrigger.batch(".feature", {
            onEnter: (elements) => {
                gsap.to( elements, 
                    { y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out', stagger: 0.15}
                );
            }
        });
    }

    if (document.querySelector('.characteristics')) {
        gsap.set(".characteristics .pin", { opacity: 0});

        gsap.timeline({
            scrollTrigger: {
                trigger:'.characteristics-img',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
            .fromTo('.characteristics-img img', {scale: 1.5, opacity: '0'}, { scale: 1, opacity: '1', duration: 1.5, ease: 'power4.out', stagger: 0.15}, "<")
            .fromTo('.characteristics .pin', {opacity: '0'}, {opacity: '1', duration: 1.5, ease: 'power4.out', stagger: 0.1}, "<+.7");
    }

    if ( isPortrait() && isMobile()) {
        if (document.querySelector('.pattern-install')) {
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.pattern-install',
                    start: 'top 50%',
                    end: 'bottom 50%',
                    // toggleActions: 'play reverse play reverse',
                    // onToggle: ({ animation }) => {
                    //     let timeScale = animation.reversed() ? -4 : 1;
                    //     animation.timeScale(timeScale);
                    // }
                }
            })
                .fromTo('.pattern-install .line', {height: '0'}, {height: '200rem', duration: 1.5, stagger: 0.04, ease: 'power4.out'}, "<")
                .fromTo('.pattern-install .col-2 .pattern-clip', {clipPath: 'polygon(0 30%, 0 30%, 0 100%, 0 100%)'}, {clipPath: 'polygon(0 30%, 100% 0%, 100% 70%, 0 100%)', duration: 2, ease: 'power4.out'}, "<+.4")
                .fromTo('.pattern-install .col-1 .pattern-clip', {clipPath: 'polygon(0 0, 0 0, 0 70%, 0 70%)'}, {clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 70%)', duration: 2, ease: 'power4.out'}, "<+.4");  
        }
    
        if (document.querySelector('.pattern-delivery')) {
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.pattern-delivery',
                    start: 'top 50%',
                    end: 'bottom 50%',
                    // toggleActions: 'play reverse play reverse',
                    // onToggle: ({ animation }) => {
                    //     let timeScale = animation.reversed() ? -4 : 1;
                    //     animation.timeScale(timeScale);
                    // }
                }
            })
                .fromTo('.pattern-delivery .line', {height: '0'}, {height: '180rem', duration: 1.5, stagger: 0.04, ease: 'power4.out'}, "<")
                .fromTo('.pattern-delivery .col-2 .pattern-clip', {clipPath: 'polygon(0 0, 0 0, 0 70%, 0 70%)'}, {clipPath: 'polygon(0 0%, 100% 30%, 100% 100%, 0 70%)', duration: 2, ease: 'power4.out'}, "<+.4")
                .fromTo('.pattern-delivery .col-1 .pattern-clip', {clipPath: 'polygon(0% 30%, 0% 30%, 0 100%, 0 100%)'}, {clipPath: 'polygon(0% 30%, 100% 0%, 100% 70%, 0 100%)', duration: 2, ease: 'power4.out'}, "<+.4"); 
        }
    } else {
        if (document.querySelector('.pattern-install')) {
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.pattern-install',
                    start: 'top 50%',
                    end: 'bottom 50%',
                    // toggleActions: 'play reverse play reverse',
                    // onToggle: ({ animation }) => {
                    //     let timeScale = animation.reversed() ? -4 : 1;
                    //     animation.timeScale(timeScale);
                    // }
                }
            })
                .fromTo('.pattern-install .col-1 .pattern-clip', {clipPath: 'polygon(0 0, 0 0, 0 40%, 0 40%)'}, {clipPath: 'polygon(0 0, 100% 20%, 100% 60%, 0 40%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-install .col-2 .pattern-clip', {clipPath: 'polygon(0 60%, 0 60%, 0 100%, 0 100%)'}, {clipPath: 'polygon(0 60%, 100% 40%, 100% 80%, 0 100%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-install .col-3 .pattern-clip', {clipPath: 'polygon(0 0, 0 0, 0 40%, 0 40%)'}, {clipPath: 'polygon(0 0, 100% 40%, 100% 80%, 0 40%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-install .line', {height: '0'}, {height: '180rem', duration: 1.5, stagger: 0.04, ease: 'power4.out'}, "<");
        }
    
        if (document.querySelector('.pattern-delivery')) {
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.pattern-delivery',
                    start: 'top 50%',
                    end: 'bottom 50%',
                    // toggleActions: 'play reverse play reverse',
                    // onToggle: ({ animation }) => {
                    //     let timeScale = animation.reversed() ? -4 : 1;
                    //     animation.timeScale(timeScale);
                    // }
                }
            })
                .fromTo('.pattern-delivery .col-1 .pattern-clip', {clipPath: 'polygon(0 40%, 0 40%, 0 80%, 0 80%)'}, {clipPath: 'polygon(0 40%, 100% 20%, 100% 60%, 0 80%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-delivery .col-2 .pattern-clip', {clipPath: 'polygon(0 20%, 0 20%, 0 60%, 0 60%)'}, {clipPath: 'polygon(0 20%, 100% 40%, 100% 80%, 0 60%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-delivery .col-3 .pattern-clip', {clipPath: 'polygon(0 40%, 0 40%, 0 80%, 0 80%)'}, {clipPath: 'polygon(0 40%, 100% 0%, 100% 40%, 0 80%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-delivery .line', {height: '0'}, {height: '180rem', duration: 1.5, stagger: 0.04, ease: 'power4.out'}, "<"); 
        }
    }
    
    if ( isPortrait() && isMobile()) {

    } else {
        if (document.querySelector('.pattern-vn')) {
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.factory-vn',
                    start: 'top 50%',
                    end: 'bottom 50%',
                }
            })
                .fromTo('.pattern-vn .line', {height: '0'}, {height: '180rem', duration: 1.5, stagger: 0.04, ease: 'power4.out'}, "<")
                .fromTo('.pattern-vn .col-1 .pattern-clip', {clipPath: 'polygon(0 20%, 0 20%, 0 60%, 0 60%)'}, {clipPath: 'polygon(0 20%, 100% 0%, 100% 40%, 0 60%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-vn .col-2 .pattern-clip', {clipPath: 'polygon(0 40%, 0 40%, 0 80%, 0 80%)'}, {clipPath: 'polygon(0 40%, 100% 60%, 100% 100%, 0 80%)', duration: 3, ease: 'power4.out'}, "<")
                .fromTo('.pattern-vn .col-3 .pattern-clip', {clipPath: 'polygon(0 60%, 0 60%, 0 100%, 0 100%)'}, {clipPath: 'polygon(0 60%, 100% 20%, 100% 60%, 0 100%)', duration: 3, ease: 'power4.out'}, "<");    
        }
    }
    


    

    

        // if (document.querySelector('.project')) {
    //     gsap.set(".project", {y: '2%', opacity: 0});

    //     ScrollTrigger.batch(".project", {
    //         onEnter: (elements) => {
    //             gsap.to( elements, 
    //                 { y: "0%", opacity: '1', duration: 1.5, ease: 'power4.out', stagger: 0.15, delay: .1}
    //             );
    //         }
    //     });
    // }


}