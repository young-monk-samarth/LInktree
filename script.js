// GSAP Animations
gsap.from(".profile-container", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".profile-img", {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
    delay: 1
});

gsap.from(".title", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out",
    delay: 1.5
});

gsap.from(".link-btn", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.4,
    ease: "power3.out",
    delay: 2
});