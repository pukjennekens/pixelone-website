import Lottie from 'react-lottie';

import Container from '../Container/Container';
import Title from '../Title/Title';
import SubTitle from '../Subtitle/Subtitle';
import LinkButton from '../LinkButton/LinkButton';

const Header = () => {
    return (
        <header className='bg-blue-50 w-full h-auto md:h-[450px] py-12 md:py-0'>
            <Container className='flex flex-col md:flex-row items-center h-full justify-between'>
                <div className='w-full md:w-1/2 max-w-[450px] text-center md:text-left'>
                    <Title
                        level='h1'
                        className='font-title text-3xl md:text-4xl'
                    >
                        De perfecte plek om jouw website te laten maken 👾
                    </Title>

                    <SubTitle className='py-5'>
                        Ontdek wat Pixel One en onze partners voor jou kunnen
                        betekenen
                    </SubTitle>

                    <LinkButton href='/over-ons'>
                        Ontdek wat wij voor jou kunnen betekenen
                    </LinkButton>
                </div>

                <div className='w-full md:w-1/2 h-auto mt-16'>
                    <Lottie
                        isClickToPauseDisabled={true}
                        options={{
                            loop: true,
                            autoplay: true,
                            renderer: 'canvas',
                            rendererSettings: {
                                className: 'hover:cursor-default inline-block',
                                preserveAspectRatio: 'xMidYMid slice',
                            },
                            animationData: require('./animation.json'),
                        }}
                        height='auto'
                        width='auto'
                    />
                </div>
            </Container>
        </header>
    );
};

export default Header;
