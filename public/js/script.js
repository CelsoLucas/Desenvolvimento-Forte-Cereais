const tl = gsap.timeline()

tl.from(".card_servicos", {
    opacity: 0,
    stagger: .3,
    scrollTrigger: {
        trigger: ".nossos_servicos",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 2
    }
})

const splitTypes = document.querySelectorAll(".textoAnimado");

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "words, chars" });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1,
        },
        opacity: 0.05,
        duration: 5,
        stagger: 0.9
    });
});