import Image from "next/image";
import { sponsors } from "@/lib/sponsors";

export default function SponsorGrid({
  level,
  sponsorNames,
}: {
  level: -2 | -1 | 0 | 1 | 2 | 3 | 4;
  sponsorNames: Array<keyof typeof sponsors | null>;
}) {
  const levelMap = {
    [-2]: {
      gap: "gap-3 sm:gap-8",
      maxW: "max-w-32 6xl:max-w-36 max-h-12 6xl:max-h-16",
      text: "p-3 6xl:p-5 text-2xl 6xl:text-4xl leading-5",
    },
    [-1]: {
      gap: "gap-3 sm:gap-8",
      maxW: "max-w-40 6xl:max-w-40 max-h-16 6xl:max-h-20",
      text: "p-3 6xl:p-5 text-2xl 6xl:text-4xl leading-5",
    },
    0: {
      gap: "gap-4 6xl:gap-10",
      maxW: "max-w-screen sm:max-w-[425px]",
      text: "p-4 6xl:p-6 text-4xl 6xl:text-6xl leading-5",
    },
    1: {
      gap: "gap-3 sm:gap-8",
      maxW: "max-w-screen sm:max-w-[350px]",
      text: "p-3 6xl:p-5 text-2xl 6xl:text-4xl leading-5",
    },
    2: {
      gap: "gap-3 sm:gap-6",
      maxW: "px-2 max-w-screen sm:px-0 sm:max-w-[275px]",
      text: "p-2 6xl:p-4 6xl:text-xl leading-4",
    },
    3: {
      gap: "gap-3 sm:gap-4",
      maxW: "px-5 max-w-screen sm:px-0 sm:max-w-[200px]",
      text: "p-1 6xl:p-3 text-sm 6xl:text-lg leading-4",
    },
    4: {
      gap: "gap-3 sm:gap-2",
      maxW: "max-w-[225px]",
      text: "text-xs 6xl:text-base leading-4",
    },
    5: {
      gap: "gap-3 sm:gap-2",
      maxW: "max-w-[150px]",
      text: "text-xs 6xl:text-base leading-4",
    },
  };

  const classes = levelMap[level];

  return (
    <div
      className={`flex flex-wrap items-center justify-center ${classes["gap"]}`}
    >
      {sponsorNames.map((sponsorName, idx) => (
        <div
          key={idx}
          className={`flex ${classes["maxW"]} items-center justify-center`}
        >
          {sponsorName ? (
            <>
              <div className="md:hidden max-w">
                <label htmlFor={`modal-${sponsorName}`}>
                  <Image
                    alt={`${sponsorName} logo`}
                    tabIndex={0}
                    placeholder="blur"
                    src={sponsors[sponsorName]["logo"]}
                    className={`block ${classes["maxW"]} object-scale-down grayscale hover:grayscale-0`}
                  />
                </label>
                {sponsors[sponsorName]["statement"] && (
                  <>
                    <input
                      type="checkbox"
                      id={`modal-${sponsorName}`}
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <Image
                          alt={`${sponsorName} logo`}
                          tabIndex={0}
                          placeholder="blur"
                          src={sponsors[sponsorName]["logo"]}
                          className="mb-3"
                        />
                        {sponsors[sponsorName]["statement"] && (
                          <div className="">
                            {sponsors[sponsorName]["statement"]}
                            <br />
                            <a
                              href={
                                sponsors[sponsorName]["website"] ?? undefined
                              }
                              target="_blank"
                            >
                              {sponsors[sponsorName]["website"] ?? undefined}
                            </a>
                          </div>
                        )}
                      </div>
                      <label
                        className="modal-backdrop"
                        htmlFor={`modal-${sponsorName}`}
                      >
                        Close
                      </label>
                    </div>
                  </>
                )}
              </div>
              <div className="hidden md:block dropdown dropdown-hover dropdown-top hover:cursor-pointer">
                <a
                  href={sponsors[sponsorName]["website"] ?? undefined}
                  target="_blank"
                >
                  <Image
                    alt={`${sponsorName} logo`}
                    tabIndex={0}
                    placeholder="blur"
                    src={sponsors[sponsorName]["logo"]}
                    className={`block ${classes["maxW"]} object-scale-down grayscale hover:grayscale-0`}
                  />
                </a>
                {sponsors[sponsorName]["statement"] && (
                  <div className="dropdown-content bg-white rounded-lg p-3 shadow-lg mb-6 text-sm md:text-base w-full md:w-[300px] left-1/2 transform -translate-x-1/2">
                    {sponsors[sponsorName]["statement"]}
                    <br />
                    <a
                      href={sponsors[sponsorName]["website"] ?? undefined}
                      target="_blank"
                    >
                      {sponsors[sponsorName]["website"] ?? undefined}
                    </a>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div
              className={`border font-ubuntu select-none border-gray-800 p-2 ${classes["text"]} rounded text-center text-gray-700`}
            >
              Your Logo Here!
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
