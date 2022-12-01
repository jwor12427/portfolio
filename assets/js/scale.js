/** @format */

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v1",
		{
			scale: 1.4,
			opacity: 0,
			transform: "translateX(0%) translateY(0%)",
		},
		{
			scale: 0.97,
			opacity: 1,
			transform: "translateX(0%) translateY(-60%)",
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
			transform: "translateX(0%) translateY(0%)",
		},
		{
			scale: 0.97,
			opacity: 1,
			transform: "translateX(0%) translateY(-40%)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v3",
		{
			scale: 1.4,
			opacity: 0,
			transform: "translateX(0%) translateY(0%)",
		},
		{
			scale: 0.97,
			opacity: 1,
			transform: "translateX(0%) translateY(-20%)",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v4",
		{
			scale: 1.4,
			opacity: 0,
			transform: "translateX(0%) translateY(0%)",
			transformOrigin: "200 75",
		},
		{
			scale: 0.97,
			opacity: 1,
			transform: "translateX(0%) translateY(0%)",
			transformOrigin: "50 0",
		}
	),
});
ScrollTrigger.create({
	trigger: ".s-rail__inner",
	scrub: 1,
	animation: gsap.fromTo(
		".v5",
		{
			scale: 1.4,
			opacity: 0,
			transform: "translateX(0%) translateY(0%)",
		},
		{
			scale: 0.97,
			opacity: 1,
			transform: "translateX(0%) translateY(20%)",
		}
	),
});
