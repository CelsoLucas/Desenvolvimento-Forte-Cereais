const tl = gsap.timeline()

tl.from(".card_servicos", {
    opacity: 0,
    stagger: .3,
    scrollTrigger: {
        trigger: ".nossos_servicos",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 2,
    }
})

tl.from(".item_contato", {
    opacity: 0,
    stagger: .3,
    scrollTrigger: {
        trigger: ".contato",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 2
    }
})

const splitTypes1 = document.querySelectorAll(".textoAnimadoQuemSomos");

splitTypes1.forEach((char, i) => {
    const text = new SplitType(char, { types: "words, chars" });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 65%",
            end: "bottom 90%",
            scrub: 2,
            // markers: true
        },
        opacity: 0.05,
        duration: 5,
        stagger: 0.9
    });
});


const splitTypes2 = document.querySelectorAll(".textoAnimado");

splitTypes2.forEach((char, i) => {
    const text = new SplitType(char, { types: "words, chars" });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1,
            // markers: true
        },
        opacity: 0.05,
        duration: 5,
        stagger: 0.9
    });
});
