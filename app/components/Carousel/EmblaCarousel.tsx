import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import Service from '../Testimonial';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type ServiceType = {
	name: string;
	about: string;
	image: string;
	slug: string;
	description: string;
};

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
	services: ServiceType[];
};


const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options, services } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick,
	);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className='embla'>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{services.map((service, idx) => (
						<div className='embla__slide' key={idx}>
							<div className=' md:flex justify-center w-full'>
								<div className='text-center md:w-[35%]'>
									<Image
										width={500}
										height={500}
										alt={service.name}
										src={service.image}
										className='rounded-full w-40 h-40 border mx-auto'
									/>
									<p className=' text-2xl font-bold'>
										{service.name}
									</p>{' '}
									<p className=' text-base'>
										{service.about}
									</p>
								</div>
								<div className='md:w-[65%] md:mr-auto mt-12 md:mt-0'>
									<Card className=' md:w-[80%] md:h-[13rem] p-4 text-lg  w-full h-full'>
										<CardContent className=' align-middle '>
											{service.description}
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					))}{' '}
				</div>
			</div>

			<div className='embla__controls'>
				<div className='embla__buttons'>
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>

				{/* <div className='embla__dots'>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex
									? ' embla__dot--selected'
									: '',
							)}
						/>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default EmblaCarousel;
