import HomepageBanner from "@/images/homepage-one-banner.jpg";
import AboutFoss4g from "@/images/about-foss4g.png";
import Objects from "@/images/objects.png";
import ArrowBrown from "@/images/arrow-brown.png";
import RegisterImg from "@/images/register-img.jpg";
import GreenBg from "@/images/green-bg.png";
import OrangeBg from "@/images/orange-bg.png";
import SocialEvents from "@/images/social-events.jpg";
import WhiteArrows from "@/images/white-arrows.png";
import BrazilPatternBg from "@/images/brazil-pattern-background.png";
import Foss4gAnnounced from "@/images/foss4g-2024-announced.jpg";
import SotmGeneric from "@/images/sotm-generic.png";
import GreenBackground from "@/images/green-background.png";
import Hangar from "@/images/hangar.jpg";
import Geochicas from "@/images/logo/geochicas.png";
import Geolibres from "@/images/logo/geolibres.png";
import MeninasDaGeo from "@/images/logo/meninas-da-geo.png";
import OsGeoBrasil from "@/images/logo/osgeo-brasil.png";
import OsGeoLogo from "@/images/logo/osgeo-logo.png";
import Countdown from "react-countdown";
import Image from "next/image";
import IntlLink from "@/components/IntlLink";
import Heading from "@/components/Heading";
import Keynotes from "@/components/Keynotes";
import Sponsors from "@/components/SponsorSection";

const enHomepagePhrases = {
  section1Date: "02-08 December 2024",
  section1Subtitle:
    "In the heart of the Amazon, Belém, geospatial technology transcends borders, revealing a map of unlimited possibilities...",
  section2Heading: "About FOSS4G",
  section2Text1:
    "Join the fascinating world of the FOSS4G international conference, where innovation and collaboration converge to drive the future of geoinformation. At this unmissable event, leaders and enthusiasts of geospatial technology come together to explore the latest trends in open source software.",
  section2Text2:
    "Discover how the powerful combination of open source freedom and geoinformatics is transforming the way we visualize, analyze, and understand our world. Don&apos;t miss the opportunity to be part of this cartographic revolution!",
  section2ButtonText: "Learn More",
  section2ButtonLink: "/about",
  section3Heading: "Register for the event",
  section3ButtonLink: "/buy-tickets",
  section3ButtonText: "Buy Tickets!",
  section3Link1Link: "/code-of-conduct",
  section3Link1Text: "Code of Conduct",
  section3Link2Link: "/visiting-belem",
  section3Link2Text: "Visiting Belém",
  section3Link3Link: "/schedule",
  section3Link3Text: "Schedule",
  section3Link4Link: "/social-events",
  section3Link4Text: "Social Events",
  section4Heading: "Latest News",
  section4Card1Heading: "FOSS4G in Belém!",
  section4Card1Text:
    "OSGeo announces that the FOSS4G international conference will be held in Belém",
  section4Card1Link:
    "https://www.osgeo.org/foundation-news/foss4g-2024-has-been-awarded-to-belem-brazil/",
  section4Card2Heading: "SOTM LATAM 2024",
  section4Card2Text:
    "State of the Map LATAM will be held in Belém 07-08 December, after the main conference!",
  section4Card2Link: "https://2024.osmlatam.org/",
  section4Card3Heading: "FOSS4G Venue Chosen",
  section4Card3Text:
    "FOSS4G 2024 Belém will be held at HANGAR Convention Center!",
  section4Card3Link: "https://hangarpa.com.br/",
  section5Text:
    "Do you want to become our sponsor? <br />Join us as an essential partner in this technological journey!",
  section5Button1Link: "/sponsors",
  section5Button1Text: "Sponsors Page",
  section5Button2Link: "/contact",
  section5Button2Text: "Contact Us",
  section6Organizers: "Organizers",
  section6CommunityPartners: "Community Partners",
  keynotes: "Conference Keynotes",
  keynotesBioText: "(click here to read biography)",
  schedule: "Conference Schedule"
//   {/*sponsors: "Conference Sponsors",*/}
};

export default function HomePage({
  t = enHomepagePhrases,
}: {
  t: typeof enHomepagePhrases;
}) {
  return (
    <>
      {/* Banner section */}

      <section
        className="relative flex items-center justify-center sm:-mt-48 bg-center bg-cover bg-no-repeat pt-[60px] pb-[100px] sm:py-[250px] [clip-path:polygon(0_0,100%_0%,100%_100%,0_91%)]"
        style={{
          backgroundImage: `url(${HomepageBanner.src})`,
        }}
      >
        <div className="font-ubuntu text-white grid grid-cols-1 min-h-48 max-w-6xl w-full p-4 sm:p-4">
          <Countdown
            date="2024-12-02"
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-4 max-w-72 sm:max-w-96 -ml-2 sm:ml-0">
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {days}
                  </div>
                  <div className="text-center">days</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {hours}
                  </div>
                  <div className="text-center">hours</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {minutes}
                  </div>
                  <div className="text-center">minutes</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {seconds}
                  </div>
                  <div className="text-center">seconds</div>
                </div>
              </div>
            )}
          />
          <div className="font-ubuntu">
            <div
              className="text-[#ff6600] text-[3rem] sm:text-[5.5rem] [font-weight:500] -mb-2 sm:-mb-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              FOSS4G 2024
            </div>
            <div
              className="text-white italic text-[2.3rem] sm:text-[4.625rem] [font-weight:400]"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              BELÉM, BRASIL
            </div>

            <div
              className="text-white text-xl my-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              {t["section1Date"]}
            </div>

            <div className="text-white [font-size:1.3rem] leading-7 italic [max-width:600px]">
              &quot;{t["section1Subtitle"]}&quot;
            </div>
            <IntlLink href="/schedule">
              <div className="inline-block text-white uppercase px-10 py-3 mt-8 rounded button bg-[#ff6600]">
                {t["schedule"]}
              </div>
            </IntlLink>
          </div>
        </div>
        <div
          className="absolute bg-no-repeat opacity-50 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            backgroundImage: `url(${Objects.src})`,
          }}
        ></div>
        <div
          className="absolute opacity-60 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            background: `linear-gradient(-45deg, #1e5799 0%, #1d1546 0%, #1a0b25 100%, #207cca 100%), url(${Objects.src})`,
          }}
        ></div>
      </section>

      {/* About FOSS4G */}

      <section className="relative flex items-center justify-center my-4">
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-20 max-w-6xl w-full p-4">
          <div className="hidden sm:block">
            <Image
              placeholder="blur"
              className="w-auto h-[240px]"
              src={AboutFoss4g}
              alt="About FOSS4G"
            />
          </div>
          <div className="sm:max-w-md">
            <div className="font-ubuntu text-[2.5rem] [font-weight:500]">
              {t["section2Heading"]}
            </div>
            <div className="w-[60px] h-[3px] bg-[#ff6600] mt-1"></div>
            <div className="mt-8">{t["section2Text1"]}</div>
            <div className="mt-8">{t["section2Text2"]}</div>
            <IntlLink href={t["section2ButtonLink"]}>
              <div className="inline-block text-white uppercase px-10 py-3 mt-8 rounded button bg-[#ff6600]">
                {t["section2ButtonText"]}
              </div>
            </IntlLink>
          </div>
          <div>
            <Image
              placeholder="blur"
              className="h-[45px] w-auto"
              src={ArrowBrown}
              alt="Brown Arrow"
            />
            <iframe
              className="aspect-video mt-8 max-w-[480px]"
              width="100%"
              height="255"
              src="https://www.youtube.com/embed/VTou906-Kj8?si=0bJSKN8ZlqAXg_1i"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center my-4 6xl:mx-60">
        <div className="grid grid-cols-1 sm:grid-cols-4 w-full py-4">
          <div
            className="flex sm:aspect-square sm:col-span-2 sm:row-span-2 bg-cover bg-no-repeat min-h-96"
            style={{ backgroundImage: `url(${RegisterImg.src})` }}
          >
            <div className="mt-10 sm:mt-20">
              <div className="bg-[#ee6f2e] font-ubuntu [font-weight:500] p-[20px] inline text-2xl 6xl:text-[3rem] text-white leading-normal">
                {t["section3Heading"]}
              </div>
              <div className="6xl:ml-72 sm:ml-10 mt-10">
                <Image
                  placeholder="blur"
                  alt="White Arrows"
                  className="inline-block -rotate-90"
                  src={WhiteArrows}
                />
                <div className="inline-block ml-10">
                  {t["section3ButtonLink"] == "" ? (
                    <div className="button text-2xl uppercase [font-weight:500] font-ubuntu text-[#ee6f2e] bg-white rounded px-10 py-4">
                      {t["section3ButtonText"]}
                    </div>
                  ) : (
                    <IntlLink
                      href={t["section3ButtonLink"]}
                      className="non-standard"
                    >
                      <div className="button text-2xl uppercase [font-weight:500] font-ubuntu text-[#ee6f2e] bg-white rounded px-10 py-4">
                        {t["section3ButtonText"]}
                      </div>
                    </IntlLink>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${OrangeBg.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl 6xl:text-5xl m-6">
              <IntlLink href={t["section3Link1Link"]} className="non-standard">
                {t["section3Link1Text"]}
              </IntlLink>
            </div>
          </div>
          <div className="flex items-end sm:aspect-square bg-black min-h-40">
            <div className="grid">
              <div className="mx-6 hidden sm:block">
                <Image
                  placeholder="blur"
                  alt="White Arrows"
                  className="block"
                  src={WhiteArrows}
                />
              </div>
              <div className="button font-ubuntu [font-weight:500] text-white text-3xl 6xl:text-5xl m-6">
                <IntlLink
                  href={t["section3Link2Link"]}
                  className="non-standard"
                >
                  {t["section3Link2Text"]}
                </IntlLink>
              </div>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${GreenBg.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl 6xl:text-5xl m-6">
              <IntlLink href={t["section3Link3Link"]} className="non-standard">
                {t["section3Link3Text"]}
              </IntlLink>
            </div>
          </div>
          <div
            className="flex items-end sm:aspect-square bg-cover bg-no-repeat min-h-40"
            style={{ backgroundImage: `url(${SocialEvents.src})` }}
          >
            <div className="button font-ubuntu [font-weight:500] text-white text-3xl 6xl:text-5xl m-6">
              <IntlLink href={t["section3Link4Link"]} className="non-standard">
                {t["section3Link4Text"]}
              </IntlLink>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center my-12">
        <div className="relative w-full max-w-6xl">
          <Heading>{t['keynotes']}</Heading>
          <div className="grid items-center justify-center grid-cols-3 sm:grid-cols-6 sm:gap-10">
            <Keynotes version="embed" bioText={t['keynotesBioText']} />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center my-12">
        <div className="relative w-full max-w-6xl">
          {/*<Heading>{t['sponsors']}</Heading>*/}
          <div className="grid items-center justify-center sm:gap-10">
            <Sponsors/>
          </div>
        </div>
      </section>

{/* <section className="flex items-center justify-center my-12">
        <div className="relative w-full max-w-6xl">
          <Image
            placeholder="blur"
            className="hidden sm:block w-full mx-auto max-w-4xl"
            src={BrazilPatternBg}
            alt="Brazil Pattern Background"
          />
          <div className="sm:absolute top-0 left-0 right-0 bottom-0 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-center sm:justify-end">
              <div className="text-4xl font-ubuntu [font-weight:500] sm:mr-8">
                {t["section4Heading"]}
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-start m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image
                  placeholder="blur"
                  src={Foss4gAnnounced}
                  alt="FOSS4G 2024 Announced"
                />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    {t["section4Card1Heading"]}
                  </div>
                  <div className="font-ubuntu my-3">
                    {t["section4Card1Text"]}
                  </div>
                  <div>
                    <IntlLink href={t["section4Card1Link"]}>Read more</IntlLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-end m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image
                  placeholder="blur"
                  src={SotmGeneric}
                  alt="FOSS4G 2024 Announced"
                />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    {t["section4Card2Heading"]}
                  </div>
                  <div className="font-ubuntu my-3">
                    {t["section4Card2Text"]}
                  </div>
                  <div>
                    <IntlLink href={t["section4Card2Link"]}>Read more</IntlLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-start sm:justify-start m-4">
              <div className="bg-white max-w-xs border border-gray-200 p-4 shadow-lg">
                <Image
                  placeholder="blur"
                  src={Hangar}
                  alt="FOSS4G 2024 Announced"
                />
                <div className="p-2">
                  <div className="font-ubuntu text-3xl [font-weight:500] my-3">
                    {t["section4Card3Heading"]}
                  </div>
                  <div className="font-ubuntu my-3">
                    {t["section4Card3Text"]}
                  </div>
                  <div>
                    <IntlLink href={t["section4Card2Link"]}>Read more</IntlLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="flex items-center justify-center my-4 w-full bg-cover bg-right bg-no-repeat min-h-96 sm:mt-32"
        style={{ backgroundImage: `url(${GreenBackground.src})` }}
      >
        <div className="w-full max-w-6xl">
          <div className="grid space-y-8 sm:space-y-0 sm:grid-cols-2">
            <div
              className="font-ubuntu text-2xl sm:text-3xl text-white mx-4 leading-8"
              dangerouslySetInnerHTML={{ __html: t["section5Text"] }}
            ></div>
            <div className="flex items-center justify-center flex-col space-y-4 sm:space-y-8">
              <IntlLink href={t["section5Button1Link"]}>
                <div className="button inline-block bg-[#ff6600] uppercase text-white font-ubuntu px-10 py-3 ">
                  {t["section5Button1Text"]}
                </div>
              </IntlLink>

              <IntlLink href={t["section5Button2Link"]}>
                <div className="button inline-block text-[#ff6600] uppercase bg-white font-ubuntu px-10 py-3 ">
                  {t["section5Button2Text"]}
                </div>
              </IntlLink>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center my-4 w-full mb-10 ">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl">
          <div className="text-4xl [font-weight:500] font-ubuntu my-4">
            {t["section6Organizers"]}
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0 max-w-60 sm:max-w-none">
            <div>
              <Image placeholder="blur" alt="GeoLibres Logo" src={Geolibres} />
            </div>
            <div>
              <Image
                placeholder="blur"
                alt="OSGeo Brasil Logo"
                src={OsGeoBrasil}
              />
            </div>
            <div>
              <Image placeholder="blur" alt="OSGeo Logo" src={OsGeoLogo} />
            </div>
          </div>
          <div className="text-4xl [font-weight:500] font-ubuntu my-4 mt-12">
            {t["section6CommunityPartners"]}
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center sm:space-x-8">
            <div>
              <Image placeholder="blur" alt="Geochicas Logo" src={Geochicas} />
            </div>
            <div>
              <Image
                placeholder="blur"
                alt="Meninas Da Geo Logo"
                className="max-h-32 w-auto"
                src={MeninasDaGeo}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
