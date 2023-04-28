import SlideUpWhenVisible from "@/hooks/SlideUpWhenVisible";
import { allSnippets } from "contentlayer/generated";

const Library = () => {
  console.log(allSnippets);
  const allSnippetTitles = allSnippets.map((snippet) => snippet.title);
  console.log(allSnippetTitles);

  return (
    <SlideUpWhenVisible>
      <div className="pt-8 px-8 lg:px-24 lg:py-16">
        <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
          Library
        </p>

        <p className="text-gray-400">
          Some collection of code snippets that I put for easy access, feel free
          to reuse!
        </p>
      </div>
    </SlideUpWhenVisible>
  );
};
export default Library;
