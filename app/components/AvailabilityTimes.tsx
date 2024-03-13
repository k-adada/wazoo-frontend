"use client";
import React, { useState } from "react";

export default function AvailabilityTimes() {
  const [availability, setAvailability] = useState({
    monday: {
      active: false,
      start: "",
      end: "",
    },
    tuesday: {
      active: false,
      start: "",
      end: "",
    },
    wednesday: {
      active: false,
      start: "",
      end: "",
    },
    thursday: {
      active: false,
      start: "",
      end: "",
    },
    friday: {
      active: false,
      start: "",
      end: "",
    },
    saturday: {
      active: false,
      start: "",
      end: "",
    },
    sunday: {
      active: false,
      start: "",
      end: "",
    },
  });
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="text-darkblue pt-8 pb-3 f-20">Availability Times</div>
        </div>

        {/* Monday  */}
        <div className="col-auto">
          <div
            className={
              (availability.monday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  monday: {
                    ...prevAvailability.monday,
                    active: !prevAvailability.monday.active,
                  },
                }));
              }}
            >
              Monday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.monday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    monday: {
                      ...prevAvailability.monday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.monday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    monday: {
                      ...prevAvailability.monday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Tuesday  */}
        <div className="col-auto">
          <div
            className={
              (availability.tuesday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  tuesday: {
                    ...prevAvailability.tuesday,
                    active: !prevAvailability.tuesday.active,
                  },
                }));
              }}
            >
              Tuesday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.tuesday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    tuesday: {
                      ...prevAvailability.tuesday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.tuesday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    tuesday: {
                      ...prevAvailability.tuesday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Wednesday  */}
        <div className="col-auto">
          <div
            className={
              (availability.wednesday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  wednesday: {
                    ...prevAvailability.wednesday,
                    active: !prevAvailability.wednesday.active,
                  },
                }));
              }}
            >
              Wednesday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.wednesday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    wednesday: {
                      ...prevAvailability.wednesday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.wednesday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    wednesday: {
                      ...prevAvailability.wednesday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Thursday  */}
        <div className="col-auto">
          <div
            className={
              (availability.thursday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  thursday: {
                    ...prevAvailability.thursday,
                    active: !prevAvailability.thursday.active,
                  },
                }));
              }}
            >
              Thursday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.thursday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    thursday: {
                      ...prevAvailability.thursday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.thursday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    thursday: {
                      ...prevAvailability.thursday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Friday  */}
        <div className="col-auto">
          <div
            className={
              (availability.friday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  friday: {
                    ...prevAvailability.friday,
                    active: !prevAvailability.friday.active,
                  },
                }));
              }}
            >
              Friday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.friday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    friday: {
                      ...prevAvailability.friday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.friday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    friday: {
                      ...prevAvailability.friday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Saturday  */}
        <div className="col-auto">
          <div
            className={
              (availability.saturday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  saturday: {
                    ...prevAvailability.saturday,
                    active: !prevAvailability.saturday.active,
                  },
                }));
              }}
            >
              Saturday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.saturday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    saturday: {
                      ...prevAvailability.saturday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.saturday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    saturday: {
                      ...prevAvailability.saturday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        {/* Sunday  */}
        <div className="col-auto">
          <div
            className={
              (availability.sunday.active && "active") +
              " day text-center py-2 "
            }
          >
            <span
              className="day-name px-3"
              onClick={() => {
                setAvailability((prevAvailability) => ({
                  ...prevAvailability,
                  sunday: {
                    ...prevAvailability.sunday,
                    active: !prevAvailability.sunday.active,
                  },
                }));
              }}
            >
              Sunday
            </span>
            <div className="day-time flex mt-2">
              <input
                className=""
                type="time"
                value={availability.sunday.start}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    sunday: {
                      ...prevAvailability.sunday,
                      start: e.target.value,
                    },
                  }))
                }
              />
              &nbsp;
              <input
                className=""
                type="time"
                value={availability.sunday.end}
                onChange={(e) =>
                  setAvailability((prevAvailability) => ({
                    ...prevAvailability,
                    sunday: {
                      ...prevAvailability.sunday,
                      end: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
