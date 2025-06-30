import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"

const toolboxItems = [
  
]

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader title="About Me" eyebrow="A Glimpse into My World" description="Learn more about who I am, my journey, and what drives me." />
    <div>
      <Card>
        <div>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
        </div>
        <Image src={BookImage} alt="Book cover" />
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
        </div>
        <div>

        </div>
      </Card>
    </div>
  </div>;
};
