import React from "react";

export default function Statusproduct() {
  return (
    <div>
      {" "}
      <div className=" w-full bg-white ">
        <div className="my-1 bg-white mb-4 container px-6 ">
          <div className="flex border-b-2 border-dinputBorder space-x-10 px-6">
            <h2 className="border-b-4 border-blue-600 scale-110 transform ease-in-out text duration-300  font-semibold text-xl text-dblack cursor-pointer py-4">
              Product description
            </h2>
          </div>
          <div className="block">
            <h3 className="text-lg">
              {" "}
              Ergonomic Desk Chair Swivel Office Chair with Breathable Backrest
              (L45 x W48 x H90-100)cm
            </h3>
            <p className="text-lg">
              <strong>Features:</strong>
            </p>
            <ul className="px-4 list-disc">
              <li>
                Ergonomic chair with firm seat and backrest made of breathable
                mesh
              </li>
              <li>
                Its features allow perfect lumbar support and back ventilation
              </li>
              <li>
                Very robust model, padded seat and upholstered in resistant and
                breathable fabric that adapts perfectly to the professional use
                of 8 hours a day
              </li>
              <li>Height adjustable chair that adapts to any person or desk</li>
              <li>Plastic back rest frame covered with mesh fabric</li>
              <li>Elastic foam cushion seat for more firmness and comfort</li>
              <li>Five 360° rotating wheels</li>
              <li>Lustrous chrome base</li>
            </ul>
            <p className="text-lg">
              <strong>Specifications:</strong>
            </p>
            <ul className="px-4 list-disc">
              <li>Height Adjusment: Yes</li>
              <li>Wheels: 5&nbsp; x 360° rotating wheels</li>
              <li>Seat Filling: Elastic foam</li>
              <li>Height: From 90 to 100 cm</li>
              <li>Height from floor to seat: From 45 to 55 cm</li>
              <li>Size of the backrest: 45 x 40 cm</li>
              <li>Seat size: 45 x 48 cm</li>
              <li>Assembly Required: Yes</li>
            </ul>

            <p className="text-lg">
              <strong>Package Includes:</strong>
            </p>
            <ul className="px-4 list-disc">
              <li>1 x Office Chair</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
