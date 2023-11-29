import { getSortedPostsData } from "../../lib/posts";
import ExploreCard from "../../lib/components/exploreCards";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();
    return (
        <ExploreCard explore={allPostsData} />
    );
  }
  