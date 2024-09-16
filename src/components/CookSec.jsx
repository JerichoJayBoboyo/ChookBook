import React, { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
import Swal from "sweetalert2";
import CookSecCSS from "../styles/CookSec.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.css";
import AlarmAudio from "../assets/clock-alarm.mp3";

function CookSec({ selectedDishId, setSelectedDishId }) {
  const [allDish, setAllDish] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishSteps, setDishSteps] = useState([]);
  const [stepCounter, setStepCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [confettiTriggered, setConfettiTriggered] = useState(false);

  const jsConfetti = new JSConfetti();
  const alarm = new Audio(AlarmAudio);

  useEffect(() => {
    fetch("/dish.json")
      .then((response) => response.json())
      .then((data) => {
        setAllDish(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (allDish.length > 0 && selectedDishId) {
      const dish = allDish.find((dish) => dish.id === selectedDishId);
      setSelectedDish(dish || null);
    }
  }, [allDish, selectedDishId]);

  useEffect(() => {
    if (selectedDish) {
      setDishSteps(selectedDish.cookingSteps || []);
    }
  }, [selectedDish]);

  useEffect(() => {
    if (dishSteps.length > 0) {
      const time = dishSteps[stepCounter]?.time * 60 || 0;
      setInitialTime(time);
      setTimeLeft(time);
    }
  }, [dishSteps, stepCounter]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = allDish
        .filter((dish) => dish.name.toLowerCase().includes(value.toLowerCase()))
        .map((dish) => dish.name);

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const dish = allDish.find((dish) => dish.name === suggestion);
    if (dish) {
      setSelectedDish(dish);
      setSelectedDishId(dish.id); // Update parent component
      setSearchTerm(""); // Clear the search term
      setSuggestions([]); // Clear suggestions
      setStepCounter(0);
    }
  };

  const handleNext = () => {
    if (isCounting) {
      setIsCounting(false);
    }

    setStepCounter((prevStepCounter) =>
      prevStepCounter < dishSteps.length - 1
        ? prevStepCounter + 1
        : prevStepCounter
    );

    if (stepCounter === dishSteps.length - 1) {
      setConfettiTriggered(true);
    }
  };

  const handlePrev = () => {
    if (isCounting) {
      setIsCounting(false);
    }
    setStepCounter((prevStepCounter) =>
      prevStepCounter > 0 ? prevStepCounter - 1 : prevStepCounter
    );
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours > 0 ? hours.toString().padStart(2, "0") + ":" : ""}${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!isCounting) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setIsCounting(false);
          if (selectedDish) {
            alarm.play();
            Swal.fire({
              title: `Done step ${dishSteps[stepCounter]?.step}`,
              text: `You have completed step ${dishSteps[stepCounter]?.step}.`,
              icon: "success",
              confirmButtonText: "OK",
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isCounting, stepCounter, dishSteps, selectedDish]);

  const handleStart = () => {
    // Only start the timer if it's not already counting
    if (!isCounting) {
      setIsCounting(true);
    }
  };

  const handlePause = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setTimeLeft(dishSteps[stepCounter]?.time * 60 || 0);
    setInitialTime(dishSteps[stepCounter]?.time * 60 || 0);
  };

  const dishStepsArray = dishSteps.map((step) => [
    step.step,
    step.instruction,
    formatTime(step.time * 60),
  ]);

  const currentStepTime = dishSteps.length > 0 ? formatTime(timeLeft) : "00:00";
  const timeBarWidth = initialTime > 0 ? (timeLeft / initialTime) * 100 : 0;
  const stepCount = dishSteps.length - 1;
  const completedSteps = stepCounter;
  const percentageCompleted = (completedSteps / stepCount) * 100;

  const imageMap = {
    0: "/images/cooking-cat.gif",
    1: "/images/cooking-dog.gif",
    2: "/images/cooking-panda.gif",
    3: "/images/cooking-racoon.gif",
    4: "/images/animal-dog2.gif",
    5: "/images/cooking-cat.gif",
  };

  const imageSrc = imageMap[stepCounter] || "/images/default-image.jpg";

  useEffect(() => {
    if (confettiTriggered && stepCounter === dishSteps.length - 1) {
      jsConfetti.addConfetti();
      Swal.fire({
        title: `Done cooking ${selectedDish?.name}`,
        timer: 3000,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        willClose: () => setConfettiTriggered(false),
      });
    }
  }, [
    confettiTriggered,
    stepCounter,
    dishSteps.length,
    selectedDish?.name,
    jsConfetti,
  ]);

  return (
    <section className={CookSecCSS.cookSection}>
      <div className={CookSecCSS.cookMainCntr}>
        <div className={CookSecCSS.cookMainCntrImgCntr}>
          {selectedDish && (
            <img src={selectedDish.image} alt={selectedDish.name} />
          )}
        </div>
        <div className={CookSecCSS.cookDishSelectionCntr}>
          <h2 className={CookSecCSS.dishName}>
            {selectedDish ? selectedDish.name : "Select a dish to cook"}
          </h2>
          <div className={CookSecCSS.selectionCntr}>
            <div className={CookSecCSS.nameSearchCntr}>
              <label htmlFor={CookSecCSS.dishNameInput}>Select Dish:</label>
              <input
                type="text"
                name="dishNameInput"
                className={CookSecCSS.searchDishName}
                placeholder="Search a Dish by Name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {suggestions.length > 0 && (
                <ul className={CookSecCSS.suggestionsList}>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className={CookSecCSS.suggestionItem}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={CookSecCSS.cookDishIngredientsCntr}>
          <h3 className={CookSecCSS.ingredientsTitle}>List of Ingredients</h3>
          <ul className={CookSecCSS.ingredientsList}>
            {selectedDish?.ingredients &&
            Object.entries(selectedDish.ingredients).length > 0 ? (
              Object.entries(selectedDish.ingredients).map(
                ([ingredientName, ingredientQuantity]) => (
                  <li
                    key={ingredientName}
                    className={CookSecCSS.ingredientNameAndQuantity}
                  >
                    <span className={CookSecCSS.ingredientName}>
                      {ingredientName.replace(/-/g, " ")}
                    </span>
                    <span className={CookSecCSS.ingredientQuantity}>
                      {ingredientQuantity}
                    </span>
                  </li>
                )
              )
            ) : (
              <p className={CookSecCSS.nothingTxt}>Nothing to display</p>
            )}
          </ul>

          <div className={CookSecCSS.servingCntr}>
            <h3 className={CookSecCSS.servingInfo}>
              Approximately: {selectedDish?.serving || "N/A"} person per serving
            </h3>
          </div>
        </div>

        <div className={CookSecCSS.cookDishCookingCntr}>
          <div className={CookSecCSS.stepsCntr}>
            <span className={CookSecCSS.startTxt}>Start</span>
            <div className={CookSecCSS.stepsCircleCntr}>
              <div className={CookSecCSS.stepMeterCntr}>
                <div
                  className={CookSecCSS.stepMeter}
                  style={{ height: `${percentageCompleted}%` }}
                ></div>
              </div>
              {dishSteps && (
                <div className={CookSecCSS.circleStepsContainer}>
                  {dishSteps.map((step, index) => (
                    <div
                      key={step.step}
                      className={`${CookSecCSS.stepCircle} ${
                        index + 1 <= stepCounter + 1
                          ? CookSecCSS.stepCircleActive
                          : ""
                      }`}
                    >
                      {index + 1 <= stepCounter ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={CookSecCSS.checkIcon}
                        />
                      ) : (
                        <p className={CookSecCSS.steps}>
                          <span className={CookSecCSS.stepTxt}>Step</span>
                          <span className={CookSecCSS.stepNumber}>
                            {index + 1}
                          </span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span className={CookSecCSS.doneTxt}>Done</span>
          </div>

          <div className={CookSecCSS.instructionCntr}>
            {dishSteps.length > 0 && (
              <>
                <h2 className={CookSecCSS.stepNumberInstruction}>
                  Step {dishSteps[stepCounter]?.step}
                </h2>
                <p className={CookSecCSS.stepInstruction}>
                  {dishSteps[stepCounter]?.instruction}
                </p>
              </>
            )}
          </div>
          <div className={CookSecCSS.cookingProcessCntr}>
            <img
              src={imageSrc}
              alt="Cooking"
              className={CookSecCSS.cookingCatImg}
            />
            <div className={CookSecCSS.timeBarCntr}>
              <div
                className={CookSecCSS.timeBar}
                style={{ width: `${timeBarWidth}%` }}
              ></div>
            </div>
            {dishStepsArray.length > 0 && (
              <>
                <span className={CookSecCSS.timerTxt}>{currentStepTime}</span>
              </>
            )}
            <div className={CookSecCSS.timerBtnCntr}>
              <button className={CookSecCSS.reset} onClick={handleReset}>
                Reset
              </button>
              <button
                className={CookSecCSS.start}
                onClick={handleStart}
                disabled={isCounting}
              >
                Start
              </button>
              <button
                className={CookSecCSS.pause}
                onClick={handlePause}
                disabled={!isCounting}
              >
                Pause
              </button>
            </div>
            <div className={CookSecCSS.stepBtnCntr}>
              <button className={CookSecCSS.stepPrev} onClick={handlePrev}>
                Prev
              </button>
              <button className={CookSecCSS.stepNext} onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookSec;
