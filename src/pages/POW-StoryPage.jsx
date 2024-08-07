import powImage from '../assets/PowStory.jpg';
import CharlieBacon from '../assets/CharlieBacon.jpg';
import PowCover from '../assets/POWCover.png';
import powMap from '../assets/POWMap.png';
import kitbag from '../assets/Kitbag.jpg';
import powCollection from '../assets/powCollection.jpg';
import powFlipThrough from '../assets/P.O.W.StoryFlipThrough.mp4';
import InlineGrid from '../components/InlineGrid';
import InlineGridReverse from '../components/InlineGridReverse';
import InlineGridReverseVideo from '../components/InlineGridVideoReverse';
const POWStoryPage = () => {
    return (
        <>
        <div className="flex flex-col items-center">
        <h1 className='text-5xl font-semibold mb-5'>P.O.W. Story</h1>
        <img src={powImage} alt="P.O.W. Story" className="w-3/4 h-1/3 rounded-md" />
      </div>
      <InlineGrid 
        subheading="Overview" 
        content={
          <p>During the Second World War, Charles Bacon, my Great-Grandfather, was a Prison of war in Italy, Germany and Poland and this project tells his journey and story as a POW.</p>
        }
        imageSrc={CharlieBacon}
      />
      <InlineGridReverse 
        subheading="The Brief" 
        content={
          <p>To create a map in any formate cover a chosen theme include historical, political or geographical.</p>
        }
        imageSrc={powMap}
      />
      <InlineGrid 
        subheading="The Problem" 
        content={
          <p>Despite abundant data and projects on World War II, there's a noticeable lack of representation regarding Prisoners of War (P.O.W.s). This project aims to fill this gap by creating a thematic map covering historical, political, and geographical aspects. It focuses on telling the stories of P.O.W.s like my Great-Grandfather Charles Bacon, held in Italy, Germany, and Poland during the war, to enrich our understanding of this often-overlooked part of history.</p>
        }
        imageSrc={PowCover}
      />
      <InlineGridReverseVideo 
       subheading="The Solution" 
       content={
        <p>My Great-Grandfather Charles Bacon's experience as a Prisoner of War during the Second World War inspired me to create a booklet documenting his journey. Using his war records and family stories, I crafted a narrative that sheds light on his time in captivity. To honor the authenticity of historical records, I've incorporated redacted sections where information was missing, resembling the classified style often found in WW2 documents. This approach preserves the integrity of his story while respecting the complexities of wartime documentation.</p>
      }
       videoSrc={powFlipThrough}
       muted={true}
        autoPlay={true}
      />
      <InlineGrid 
        subheading="Kig Bag" 
        content={
          <p>My Great Grandfather Charles Bacon’s kit bag was the
          inspiration for the format of this project as after ﬁnding
          his kit bag the only format that made sense to me was a
          publication about him that would ﬁt inside a mini kit bag
          so I found a cotton bag, dyed it green and screen printed
          all the type that was on the original onto the mini version
          for the publication to accompany.</p>
        }
        imageSrc={kitbag}
      />
      <InlineGridReverse 
        subheading="Further developments" 
        content={
          <p>I have only made one version of the publication, focusing on my Great Grandfather but my intention with this project is that more P.O.W. Story publications would be made so people could have their own relatives represented in a P.O.W. story publication which people could request and have sent to them. Eventually, I would like to have a set of publications on multiple Prisoners of war which could be sent to schools learning about the Second World War.</p>
        }
        imageSrc={powCollection}
      />
        </>
    )
}

export default POWStoryPage;