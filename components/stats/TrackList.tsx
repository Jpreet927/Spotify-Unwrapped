import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopTrack } from "@/ts/types/TopTrack";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopFiveTrack from "./TopFiveTrack";
import TrackRow from "./TrackRow";

type props = {
    topTracks: TopTrack[] | undefined;
    setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

const TrackList = ({ topTracks, setTimeframe }: props) => {
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list

    return (
        <div className="w-full flex flex-col items-center gap-16">
            <Tabs defaultValue="month" className="">
                <TabsList>
                    <TabsTrigger
                        value="month"
                        onClick={() => setTimeframe(TopItemsTimeframe.SHORT)}
                    >
                        Last Month
                    </TabsTrigger>
                    <TabsTrigger
                        value="sixmonths"
                        onClick={() => setTimeframe(TopItemsTimeframe.MEDIUM)}
                    >
                        Last 6 Months
                    </TabsTrigger>
                    <TabsTrigger
                        value="alltime"
                        onClick={() => setTimeframe(TopItemsTimeframe.LONG)}
                    >
                        All Time
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex justify-between w-[50%]">
                {topTracks
                    ?.slice(0, LIST_OFFSET)
                    .map((track: TopTrack, index: number) => (
                        <TopFiveTrack track={track} rank={index + 1} />
                    ))}
            </div>
            <div className="w-[50%] mb-24">
                {topTracks
                    ?.slice(LIST_OFFSET)
                    .map((track: TopTrack, index: number) => (
                        <TrackRow
                            key={track.id}
                            track={track}
                            rank={index + LIST_OFFSET + 1}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TrackList;
