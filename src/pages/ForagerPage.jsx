import foragerImage from '../assets/forager-app.webp';
import InlineGrid from '../components/InlineGrid';
import InlineGridReverse from '../components/InlineGridReverse';
import ForagerSlides from '../assets/forager-slides.jpg';
import ForagerTote from '../assets/forager-tote.png';
import ForagerFrame from '../assets/Forager-Frame.png';
import ForagerSocial from '../assets/forager-social.png';
import Button from '../components/Button';
import CenteredText from '../components/CenteredText';

const ForagerPage = () => {
    return (
      <>
      <div className="flex flex-col items-center">
        <h1 className='text-5xl font-semibold mb-5'>Forager</h1>
        <img src={foragerImage} alt="Forager App" className="w-3/4 h-1/3 rounded-md" />
        
      </div>
      <InlineGrid 
        subheading="Overview" 
        content={
            <p>Foraging allows for a more sustainable food source, helping improve our relationships with our food. Forager is an app and social media platform which helps users locate and identify plants and connect with fellow foragers. Also, there will be a government scheme which will encourage more green spaces and edible plants in urban and rural areas.</p>
          }
          imageSrc={ForagerSlides}
      />
      <InlineGridReverse 
        subheading="The Brief" 
        content={
            <p>To address weaknesses in current food systems and to get people thinking differently about the food they eat and where it comes from.</p>
          }
          imageSrc={ForagerTote}
      />
      <InlineGrid 
        subheading="The Problem" 
        content={
            <p>Out of over 7000 edible food the global population considers only 417 food crops. Food is wasted every year, across the world, people need to become more aware of where they food comes from and how much they actually need and consume. With the cost of living crisis effecting millions of people wasting food and money isn’t an option.</p>
          }
          imageSrc={ForagerSocial}
      />
      <InlineGridReverse 
        subheading="The Solution" 
        content={
            <p>The principles of foraging are to only collect what you need so nothing goes to waste and if foraging can become more accessible then more people can save money on food and also waste less. Forager is an app and social media account which makes foraging accessible to everyone and also connecting people through foraging.</p>
          }
          imageSrc={ForagerFrame}
      />
      <CenteredText 
        subheading="Expansion Strategy"
        paragraph="I envision the Forager app as part of a larger foraging movement. Alongside the app, there will be a social media presence and merchandise, such as tote bags designed for collecting foraged items."
      />
      <br />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button 
          link="https://www.figma.com/design/lIocDSRpvp1pl0F3X2u8pe/Forager?node-id=208-2&t=hwzF49W54StAG1NF-1"
          text="Figma File"
          isPrimary={true}
        />
        <Button 
          link="https://www.figma.com/proto/lIocDSRpvp1pl0F3X2u8pe/Forager?page-id=13%3A2&node-id=35-2&viewport=286%2C449%2C0.02&t=la4DkfZGMKreeogs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A2"
          text="Clickable Prototype"
          isPrimary={false}
        />
      </div>
      </>
    );
  };
  
export default ForagerPage;