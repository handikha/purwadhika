import React from "react";
import Button from "../button";

export default function Card({ title }) {
  return (
    <div className="h-fit overflow-hidden rounded-lg  bg-white shadow-lg">
      <div className="img-wrapper aspect-[5/3] w-full">
        <img
          src="https://source.unsplash.com/600x400?car"
          alt=""
          srcset=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="title-wrapper">
          <h3>{title}</h3>
          <Button
            isLink
            label="Tags"
            className="text-xs italic text-light-gray"
          />
        </div>
        <p className="mt-4 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          velit distinctio omnis voluptatibus tempore molestiae.
        </p>
        <div className="author-wrapper mt-4 text-light-gray">
          <a href="">user</a> <span>12.12.1234</span>
        </div>
        <div className="actions-wrapper flex items-center justify-between">
          <div className="">
            <a href="">likes</a>
            <a href="">views</a>
          </div>
          <a href="">save</a>
        </div>
      </div>
    </div>
  );
}
