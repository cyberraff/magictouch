import Image from 'next/image';
import React from 'react';
 const services = [
	{
		name: 'Swedish Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			"The quintessential massage experience, Swedish massage uses long, smooth strokes, kneading, and vibration techniques applied with light to medium pressure. This gentle approach helps to relax muscles, improve circulation, and increase blood flow throughout the body. It's a fantastic option for those seeking general relaxation, stress reduction, and improved flexibility.",
	},
	{
		name: 'DeepTissue Massage',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			"A more targeted and intense massage therapy, deep tissue massage focuses on the deeper layers of muscle and connective tissue (fascia) to release chronic tension and pain. Therapists use firm pressure and specific techniques to break down adhesions (knots) in the muscles, improving range of motion and reducing pain. Communicate openly with your therapist about your pain tolerance and any areas you'd like them to focus on or avoid. This massage is not recommended for those with certain medical conditions or injuries, so be sure to consult your doctor beforehand if you have any concerns.",
	},
	{
		name: 'Hot Stone Massage',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'This luxurious and therapeutic massage incorporates smooth, heated basalt stones to warm up tight muscles. The heat helps to relax muscles more quickly and deeply than traditional massage techniques alone. The stones are also used to apply pressure during the massage, providing a deeper sense of relaxation and promoting improved circulation. Hot stone massage is a great choice for those seeking relief from muscle tension, stress, and pain.',
	},
	{
		name: 'Prenatal Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'A specialized massage tailored for the unique needs of pregnant women. This massage uses gentle techniques and positions that are safe for expectant mothers, focusing on relieving common pregnancy discomforts like backaches, leg cramps, swelling, and sciatic pain. Prenatal massage can also improve sleep quality, reduce stress and anxiety, and promote overall well-being for both mother and baby.',
	},
	{
		name: 'Sports Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			"This massage is specifically designed for athletes and people with active lifestyles. It helps to prevent injuries by improving flexibility and range of motion, reduce muscle soreness after exercise, and aid in faster recovery. Sports massage therapists use a variety of techniques, including deep tissue work, trigger point therapy, and stretching, to address specific needs based on the athlete's sport or activity.",
	},
	{
		name: 'Aromatherapy Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'This massage combines the benefits of Swedish massage with the therapeutic properties of essential oils. The therapist uses essential oils diluted in carrier oils to create a customized experience based on your needs. Different essential oils offer various benefits, such as promoting relaxation (lavender, chamomile), improving mood (citrus oils), or alleviating headaches (peppermint). Aromatherapy massage can enhance relaxation, improve sleep quality, reduce anxiety, and promote overall well-being.',
	},
	{
		name: 'Couples Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'A romantic and bonding experience for two people, couples massage is performed in the same room, often on side-by-side tables. It allows couples to relax and unwind together, creating a deeper connection and shared experience. Couples massages can be customized with various techniques and aromatherapy options to suit your preferences.',
	},
	{
		name: 'Corporate Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'This convenient service brings massage therapy directly to the workplace. Therapists provide short, focused massages to employees at their desks or in a designated space. Corporate massage is a great way for companies to promote employee well-being, reduce stress levels, improve productivity, and boost morale. Studies have shown that on-site massage programs can lead to a decrease in absenteeism and healthcare costs for businesses.',
	},
];

export default function Services() {
	return (
		<section id='Services' className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Our Services
				</h2>
				<div className='md:grid lg:grid-cols-3 gap-12 md:w-full'>
					{services.map((service, idx) => {
						return (
							<div key={idx} className='py-4 flex-1'>
								<div>
									<h3 className='text-2xl font-bold pb-4 underline'>
										{service.name}
									</h3>
									<Image
										src={service.image}
										width={400}
										height={400}
										alt='service image'
										className=' w-80 h-48 rounded-lg'
									/>
									<p className=' text-base pt-4'>
										{service.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				{/* <div className=' w-full flex justify-center'>
					<Button className='mt-4 mx-auto  hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
						<Link href='/Services'>Read More</Link>
					</Button>
				</div> */}
			</div>
		</section>
	);
}
