import parentingPodImage from '../assets/baby.webp';
import podSlides from '../assets/podSlides.png';
import Day from '../assets/Day.png';
import Night from '../assets/Night.png';
import podDay from '../assets/podDay.png';
import podLogo from '../assets/podLogo.png';
import NightClickThrough from '../assets/NightClickThrough.mp4';
import InlineGrid from '../components/InlineGrid';
import InlineGridReverse from '../components/InlineGridReverse';
import InlineTwoImages from '../components/InlineTwoImages';
import InlineGridReverseVideo from '../components/InlineGridVideoReverse';
import Button from '../components/Button';

const ParentingPodPage = () => {
    return (
        <div className="bg-blue-600 text-white min-h-screen p-6">
        <div className="flex flex-col items-center">
        <h1 className='text-5xl font-semibold mb-5'>Parenting Pod</h1>
        <img src={parentingPodImage} alt="Parenting Pod App" className="w-3/4 h-1/3 rounded-md" />
      </div>
      <InlineGrid 
        subheading="Overview" 
        content={
          <p>A Podcast app for parents of young children, with podcasts around parenting, a sound machine to help children and Mums and Dads sleep and medication to help relax parents. The app is a way to help the mental health of parenting giving them support no many what time of day or night.</p>
        }
        imageSrc={podDay}
      />
      <InlineGridReverse 
        subheading="The Brief" 
        content={
          <p>Create an on-brand response for brand that addresses your issue, targeting your audience. Response could take various forms from a new limited edition product, campaign, sub-brand, event or brand experience.</p>
        }
        imageSrc={Day}
      />
      <InlineTwoImages 
        imageSrc1={Day}
        imageSrc2={Night}
      />
      <InlineGrid 
        subheading="The Problem" 
        content={
          <p>My brand was Nespresso, with the issue of mental health and the audience of a parent. Trying to come up with product or sub-brand that fit the all three areas of the brief and was something helpful to parents and benefited their mental health.</p>
        }
        imageSrc={podSlides}
      />
      <InlineGridReverseVideo 
       subheading="The Solution" 
       content={
         <p>Parenting Pod, an app to help parents’ mental health, with podcasts sound machines and meditation. Assisting parents day or night to relax, unwind and get themselves and or their children to sleep.</p>
       }
       videoSrc={NightClickThrough}
       muted={true}
        autoPlay={false}
      />
      <InlineGrid 
        subheading="The Logo" 
        content={
          <p>The app's color scheme transitions between day and night, ensuring a welcoming experience at any time of day. The logo reflects this with two theme gradients colliding, symbolizing the seamless shift between day and night.</p>
        }
        imageSrc={podLogo}
      />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button 
          link="https://xd.adobe.com/view/f2bed281-484a-485f-8a33-2826b3770ac1-a7ed/"
          text="Day theme Clickable Prototype"
          isPrimary={true}
        />
        <Button 
          link="https://xd.adobe.com/view/804f8479-2a22-489d-869c-34be9a93e2a2-d51c/"
          text="Night theme Clickable Prototype"
          isPrimary={false}
        />
      </div>
        </div>
    )

};

export default ParentingPodPage;