/** @format */

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v1",
		{
			scale: 1.35,
			opacity: 0,
			transform: "translate3d(0,0,0)",
		},
		{
			scale: 0.976,
			opacity: 1,
			transform: "translate3d(0,-30px,0)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v2",
		{
			scale: 1.35,
			opacity: 0,
			transform: "translate3d(-20px,0,0)",
		},
		{
			scale: 0.96,
			opacity: 1,
			transform: "translate3d(-20px,-20px,0)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v3",
		{
			scale: 1.35,
			opacity: 0,
			transform: "translate3d(0,0,0)",
		},
		{
			scale: 0.96,
			opacity: 1,
			transform: "translate3d(0,-10px,0)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v4",
		{
			scale: 1.35,
			opacity: 0,
			transform: "translate3d(-20px,0,0)",
		},
		{
			scale: 0.96,
			opacity: 1,
			transform: "translate3d(-20px,0,0)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v5",
		{
			scale: 1.35,
			opacity: 0,
			transform: "translate3d(0,0,0)",
		},
		{
			scale: 0.96,
			opacity: 1,
			transform: "translate3d(0,10px,0)",
		}
	),
});
