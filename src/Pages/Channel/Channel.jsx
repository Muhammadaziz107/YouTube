import React from "react";
import "./Channel.scss";
import ChannelIntro from "../../Component/ChannelComponent/ChannelIntro";
import ChannelInfo from "../../Component/ChannelInfo/ChannelInfo";

function Channel() {
  return (
    <div className="channel">
      <ChannelIntro />
      <ChannelInfo />
    </div>
  );
}
export default Channel;
