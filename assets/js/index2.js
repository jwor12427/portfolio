/** @format */
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

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
		ease: "Sine.easeInOut",
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

//scrollTrigger 미디어
ScrollTrigger.matchMedia({
	"(min-width: 560px)": function () {
		//main rail 움직이기
		gsap.to(".rail__item", {
			scrollTrigger: {
				trigger: ".rail__item",
				scrub: 1,
			},
			x: -150,
		});
		//about 이미지 스크롤 움직임
		// gsap.to(".about__img01", {
		// 	scrollTrigger: {
		// 		trigger: ".about__img01",
		// 		scrub: 1,
		// 	},
		// 	transform: "rotate(-15deg)",
		// 	zIndex: 100,
		// });
		// gsap.to(".about__img02", {
		// 	scrollTrigger: {
		// 		trigger: ".about__img02",
		// 		scrub: 1,
		// 	},
		// 	transform: "scale(1.24)",
		// 	zIndex: 100,
		// });
	},
});

//about이미지 마우스로 움직이기
document.querySelector(".about__wrap").addEventListener("mousemove", (e) => {
	let mousePageX = e.pageX;
	let mousePageY = e.pageY;

	let centerPageX = window.innerWidth / 2 - mousePageX;
	let centerPageY = window.innerHeight / 2 - mousePageY;

	const imgMove1 = document.querySelector(".about__img01");
	const imgMove2 = document.querySelector(".about__img02");
	if (window.matchMedia("(min-width: 560px)").matches) {
		gsap.to(imgMove1, {
			duration: 0.4,
			x: centerPageX / 40,
			y: centerPageY / 40,
			zIndex: 100,
		});
		gsap.to(imgMove2, {
			duration: 0.4,
			x: centerPageY / 20,
			y: centerPageX / 20,
			zIndex: 100,
		});
	}
});

//사이트 원이미지 테두리 색 변화
let mm = gsap.matchMedia();
mm.add("(min-width: 560px)", () => {
	gsap.set("img", {
		visibility: "visible",
		duration: 0.5,
	});

	let links = gsap.utils.toArray(".circle__site");
	links.forEach(function (el) {
		let img = el.querySelector("img");
		let animation = null;
		let isHovering = false;

		if (window.matchMedia("(min-width: 560px)")) {
			el.addEventListener("mouseenter", onEnter);
			el.addEventListener("mouseleave", onLeave);
		}

		function onEnter() {
			isHovering = true;

			if (!animation) {
				animation = gsap.fromTo(
					img,
					{ border: "2px solid #f55c47", transform: "scale(1)" },
					{
						border: "3px solid",
						transform: "scale(1.1)",
						duration: 0.5,
						ease: "Cubic.easeIn",
						onComplete: () => {
							animation = null;
							if (!isHovering) {
								onLeave();
							}
						},
					}
				);
			}
		}

		function onLeave() {
			isHovering = false;

			if (!animation) {
				animation = gsap.to(img, {
					border: "2px solid #f55c47",
					transform: "scale(1)",
					onComplete: () => {
						animation = null;
						if (isHovering) {
							onEnter();
						}
					},
				});
			}
		}
	});
});

// 사이트 원 이미지 양쪽으로 움직이기
gsap.to(".site__circle-t", {
	scrollTrigger: {
		trigger: ".site__circle-t",
		scrub: 1,
	},
	xPercent: -25,
});
gsap.to(".site__circle-b", {
	scrollTrigger: {
		trigger: ".site__circle-b",
		scrub: 1,
	},
	xPercent: 25,
});

//글씨 효과 - site coding
ScrollTrigger.matchMedia({
	"(min-width: 560px)": function () {
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
	},
});
