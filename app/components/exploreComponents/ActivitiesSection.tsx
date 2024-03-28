"use client";
import React, { useState } from "react";
import Image from "next/image";

import Images from "@/app/Images";
import Icons from "@/app/Icons";

export default function ActivitiesSection(props: any) {
  const { popup, setOpenPreview, setCustomServices, customServices } = props;

  const [services, setServices] = useState([
    {
      name: "Louvre Museum",
      description:
        "In the heart of Paris, on the right bank of the Seine, the Louvre Museum is a must-see for all visitors to the French capital. The world's largest and most visited museum, it is a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement.",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.louvreImage,
    },
    {
      name: "Geneva Lakehouse",
      description:
        "Geneva Lakehouse is a beautiful property located in the heart of Geneva, Switzerland. The property is situated on the shores of Lake Geneva and offers stunning views of the lake and the surrounding mountains. The property is perfect for a relaxing getaway and is ideal for families, couples, and groups of friends looking to escape the hustle and bustle of city life.",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.lucerneImage,
    },
    {
      name: "Mont Saint Michel",
      description:
        "Mont Saint-Michel is an island commune in Normandy, France. It is located approximately one kilometre off the country's northwestern coast, at the mouth of the Couesnon River near Avranches and is 100 hectares in size. The island has held strategic fortifications since ancient times and since the 8th century AD has been the seat of the monastery from which it draws its name. The structural composition of the town exemplifies the feudal society that constructed it. On top, God, the abbey and monastery; below, the great halls; then stores and housing; and at the bottom, outside the walls, houses for fishermen and farmers",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.montsaintImage,
    },
    {
      name: "Arc de Triomphe",
      description:
        "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile — the étoile or 'star' of the juncture formed by its twelve radiating avenues. The location of the arc and the plaza is shared between three arrondissements, 16th, 17th (north), and 8th (east). The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I.",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.triomphImage,
    },
    {
      name: "Notre Dame Cathedral",
      description:
        "Notre-Dame de Paris, referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. The cathedral was consecrated to the Virgin Mary and considered to be one of the finest examples of French Gothic architecture. Its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, as well as the naturalism and abundance of its sculptural decoration set it apart from the earlier Romanesque style. Major components that make Notre Dame stand out include one of the world's largest organs and its immense church bells. The cathedral's construction began in 1160 under Bishop Maurice de Sully and was largely complete by 1260, though it was modified frequently in the following centuries. In the 1790s, Notre-Dame suffered desecration during the French Revolution when much of its religious imagery was damaged or destroyed. A major restoration project supervised by Eugène Viollet-le-Duc began in 1845 and continued for twenty-five years. Beginning in 1963, the facade of the Cathedral was cleaned of centuries of soot and grime, returning it to its original colour. Another cleaning and restoration project was carried out between 1991 and 2000. As the cathedral of the Archdiocese of Paris, Notre-Dame contains the cathedra of the Archbishop of Paris (Michel Aupetit). 12 million people visit Notre-Dame yearly, more than any other Parisian monument. The cathedral's treasury is notable for its reliquary which houses some of Catholicism's most important relics including the purported Crown of Thorns, a fragment of the True Cross, and one of the Holy Nails.",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.notreImage,
    },
    {
      name: "Latin Quarter",
      description:
        "The Latin Quarter of Paris is an area in the 5th and the 6th arrondissements of Paris. It is situated on the left bank of the Seine, around the Sorbonne. Known for its student life, lively atmosphere, and bistros, the Latin Quarter is the home to a number of higher education establishments besides the university itself, such as the Lycée Louis-le-Grand, the Lycée Henri-IV, the Lycée Saint-Louis, and the Lycée Janson de Sailly. Other establishments such as the École Normale Supérieure, the École des Mines de Paris, HEC Paris, the Collège de France, the Sciences Po Paris, and the Jussieu university campus, also occupy part of the Latin Quarter. The area gets its name from the Latin language, which was once widely spoken in and around the University since Latin was the language of learning in the Middle Ages in Europe.",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.quartierImage,
    },
  ]);

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-2"
      style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto" }}
    >
      {popup && (
        <div className="px-5 py-2">
          <div
            className="row bg-white rounded-lg py-2 pointer h-full justify-start items-start"
            onClick={() => {
              setOpenPreview(true);
              setCustomServices({
                open: true,
                services: customServices?.services || [],
              });
            }}
          >
            <div className="col-12 pb-4 px-2">
              <div className="image-wrapper-83 border-dashed">
                <div
                  className="bg-darkblue rounded-full p-10 absolute w-[80px] h-[80px] top-1/2 left-1/2"
                  style={{ transform: "translate(-50%,-50%)" }}
                >
                  <Image
                    src={Icons.addIconGold}
                    alt="add icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </div>
                {customServices?.services.length !== 0 && (
                  <div className="absolute top-2 right-4 flex items-center">
                    <div
                      className="f-16 text-darkblue text-center poppins-semibold rounded-lg w-[30px]"
                      style={{
                        paddingTop: "4px",

                        paddingBottom: "1px",
                        border: "1px solid #a4a4a4",
                      }}
                    >
                      {customServices?.services.length}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center pt-4">
                <div className="f-20 text-darkblue poppins-medium">
                  Add a Custom Service
                </div>
              </div>

              <div className="f-14 text-grey pt-1 line-clamp-4">
                Can&apos;t find what you need? Tell us, and we&apos;ll create a
                custom service just for you
              </div>
            </div>
          </div>
        </div>
      )}
      {services.map((item, index) => {
        return (
          <div className="px-5 py-2" key={index}>
            <div
              className="row bg-white rounded-lg py-2 pointer"
              onClick={() => {
                setOpenPreview(true);
              }}
            >
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={item.image} alt={item.name} />
                </div>
                {!popup && (
                  <div className="absolute top-2 right-4 pointer">
                    <div
                      className="py-2 px-2 rounded-full backdrop-blur-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      <Image
                        src={Icons.unbookmarkGoldIcon}
                        alt="three dots"
                        className="three-dots"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-12 px-2">
                <div className="flex items-center">
                  <div className="f-20 text-darkblue poppins-medium">
                    {item.name}
                  </div>

                  <div className="ml-auto flex items-center">
                    <div className="f-16 text-grey poppins-semibold pr-2">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-2 pb-3">
                <div className="f-14 text-grey pt-1 line-clamp-2">
                  {item.description}
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.locationDarkIcon}
                    alt="location"
                  />
                  <div className="text-darkblue">Paris, France</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.calendarDarkIcon}
                    alt="calendar"
                  />
                  <div className="text-darkblue">Oct 1 - Dec 31</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.treeDarkIcon}
                    alt="treeIcon"
                  />
                  <div className="text-darkblue">Kayak</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
