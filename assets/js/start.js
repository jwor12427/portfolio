/** @format */

//시작 애니메이션
let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let tl2 = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let tl3 = gsap.timeline({ repeat: 0, repeatDelay: 0.1 });
let tl4 = gsap.timeline({ repeat: 0, repeatDelay: 0.2 });
tl.fromTo(
	".main__box",
	{
		opacity: 0,
		transform: "translate3d(0, -100%, 0)",
		visibility: "visible",
		transformOrigin: "top",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "top",
		ease: "Bounce.easeOut",
		duration: 1,
	}
);
tl3.fromTo(
	".header__logo",
	{
		opacity: 0,
		transform: "translate3d(0, -100%, 0)",
		visibility: "visible",
		transformOrigin: "top",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		ease: "bounce",
		transformOrigin: "top",
		duration: 1,
	}
);
tl3.fromTo(
	".header__main",
	{
		opacity: 0,
		transform: "translate3d(0, 100%, 0)",
		visibility: "visible",
		transformOrigin: "bottom",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		delay: 0.2,
		transformOrigin: "top",
		duration: 1,
	}
);
tl4.fromTo(
	".header__nav",
	{
		opacity: 0,
		transform: "translate3d(0, -100%, 0)",
		visibility: "visible",
		transformOrigin: "top",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		ease: "bounce",
		delay: 0.2,
		transformOrigin: "top",
		duration: 1,
	}
);
tl4.fromTo(
	".header__link",
	{
		opacity: 0,
		transform: "translate3d(0, 100%, 0)",
		visibility: "visible",
		transformOrigin: "bottom",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		delay: 0.4,
		transformOrigin: "top",
		duration: 1,
	}
);
tl2.fromTo(
	".rail__item",
	{
		opacity: 0,
		transform: "translate3d(100%, 0, 0)",
		transformOrigin: "left",
	},
	{
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
		transformOrigin: "left",
		delay: 0.3,
		duration: 1,
	}
);
