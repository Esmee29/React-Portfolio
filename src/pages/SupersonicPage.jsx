import InlineGrid from '../components/InlineGrid';
import CenteredText from '../components/CenteredText';
import InlineGridReverse from '../components/InlineGridReverse';
import InlineGridVideo from '../components/InlineGridVideo';
import InlineGridReverseVideo from '../components/InlineGridVideoReverse';
import supersonicImage from '../assets/Supersonic.webp';
import SupersonicPhone from '../assets/SupersonicPhone.png';
import SupersonicScreens from '../assets/SupersonicScreens.jpg';
import SupersonicVideo from '../assets/Supersonic.mp4';
import SupersonicNewUser from '../assets/SupersonicNewUser.mp4';
import SupersonicAlert from '../assets/SupersonicAlert.mp4';
import SupersonicLogo from '../assets/supersonic-logo.jpg';
import Button from '../components/Button';
const SupersonicPage = () => {
    return (
     <>
     <div className="flex flex-col items-center">
        <h1 className='text-5xl font-semibold mb-5'>Supersonic</h1>
        <img src={supersonicImage} alt="Supsonic App" className="w-3/4 h-1/3 rounded-md" />
        
      </div>
      <InlineGrid 
        subheading="Overview" 
        content={
          <p>Supersonic is a conceptual app tailored for music enthusiasts, designed to ensure they never miss the concerts they crave. The app personalizes the content users see, notifies them of ticket releases to prevent missed opportunities, and even offers chances to win tickets through exciting draws. Currently available as a Figma prototype, the goal is to develop Supersonic into a fully functional coded app, providing a seamless experience for concert-goers everywhere.</p>
        }
        imageSrc={SupersonicPhone}
      />
      <InlineGridReverse 
        subheading="The Brief" 
        content={
          <p>Many people struggle to find concert tickets for their favorite music genres and artists. They often miss out on ticket releases due to a lack of timely information, and when they do find tickets, they are frequently too expensive.</p>
        }
        imageSrc={SupersonicScreens}
      />
      <CenteredText 
        subheading="Lyric"
        paragraph="My hip-hop lyric was, “Cause this jam is just movin’ the crowd
                                is steady groovin’ to a supersonic pace” and from these
                                lyrics the words “crowd”, “grooving” and “supersonic” stood
                                out to me. From these words and the ideas below, a ticketing
                                company for music was my favourite and it ﬁts well with
                                crowd and grooving."
      />
      <InlineGridVideo 
        subheading="The Problem"
        content={
          <p>Many people struggle to find concert tickets for their favorite music genres and artists. They often miss out on ticket releases due to a lack of timely information, and when they do find tickets, they are frequently too expensive.</p>
        }
        videoSrc={SupersonicVideo}
        muted={true}
        autoPlay={true}
      />
      <InlineGridReverseVideo 
       subheading="The Solution" 
       content={
        <p>Supersonic, the go-to app for music lovers, tailors its content to users' preferences, making it easier to find and secure concert tickets. Users can select their favorite genres, sync their streaming services, and receive timely notifications for ticket releases, ensuring they never miss the concerts they want to see. The app also helps keep ticket prices low and offers opportunities to win tickets through exciting draws.</p>
      }
       videoSrc={SupersonicNewUser}
       muted={true}
        autoPlay={true}
      />
      <InlineGrid 
        subheading="Logo"
        content={
          <p>The logo was inspired by Supersonic booms and sound waves, and records; the main logo has the word Supersonic and the sound wave ‘s’ is for the app icon. I wanted a dark theme for the app as it is ticketing app for concerts which for the most part happen at night so I have chosen a dark background colour and pick brighter colours to compliment it.</p>
        }
        imageSrc={SupersonicLogo}
      />
      
      <InlineGridVideo 
        subheading="Special Features"
        content={
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Countdown notifications with a Supersonic Boom alert to notify users of upcoming ticket releases and ticket drops, ensuring they don't miss out.</li>
            <li>Ticket drops provide additional opportunities for users to secure concert tickets for their favorite artists.</li>
          </ul>
        }
        videoSrc={SupersonicAlert}
        muted={false}
        autoPlay={false}
      />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button 
          link="https://www.figma.com/design/0affawmAKba5tC7LEeNDa4/Supersonic?node-id=26-15&t=knAurhwwm7oMWAbB-1"
          text="Figma File"
          isPrimary={true}
        />
        <Button 
          link="https://www.figma.com/proto/0affawmAKba5tC7LEeNDa4/Supersonic?type=design&node-id=26-300&t=c57jQLA1qTEKqijC-1&scaling=min-zoom&page-id=26%3A15&starting-point-node-id=61%3A987&show-proto-sidebar=1&mode=design"
          text="Clickable Prototype"
          isPrimary={false}
        />
      </div>
     </>
    );
  };
  
  export default SupersonicPage;