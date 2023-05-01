import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <body>
        <br />
        <br />
        <br />

        <div class="container">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search city here"
            />
            <button class="button" type="submit">
              <i class="fa-solid fa-magnifying-glass sok"></i>
            </button>
          </form>
          <br />
          <h1>Oslo</h1>
          <br />
          <h2>Today</h2>
          <br />
          <div class="today">
            <div class="row">
              <div class="col">
                <i class="fa-solid fa-sun sun"></i>
              </div>
              <div class="col todaydegree">24 °C</div>
              <div class="col todayinfo">
                Sun <br />
                Humidity: 70% <br />
                Wind: 2 m/s
              </div>
            </div>
          </div>

          <br />
          <br />
          <h2>This week</h2>
          <br />
          <div class="weekdays">
            <div class="row">
              <div class="col">
                <div class="thisweek">
                  Monday <br />
                  <br />
                  <i class="fa-solid fa-sun"></i>
                  <br />
                  <br />
                  25 °C
                </div>
              </div>
              <div class="col">
                <div class="thisweek">
                  Tuesday <br />
                  <br />
                  <i class="fa-solid fa-cloud"></i>
                  <br />
                  <br />
                  20 °C
                </div>
              </div>
              <div class="col">
                <div class="thisweek">
                  Wednesday <br />
                  <br />
                  <i class="fa-solid fa-cloud-sun sunsmall"></i>
                  <br />
                  <br />
                  22 °C
                </div>
              </div>
              <div class="col">
                <div class="thisweek">
                  Thursday <br />
                  <br />
                  <i class="fa-solid fa-cloud"></i>
                  <br />
                  <br />
                  19 °C
                </div>
              </div>
              <div class="col">
                <div class="thisweek">
                  Friday <br />
                  <br />
                  <i class="fa-solid fa-sun"></i>
                  <br />
                  <br />
                  23 °C
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </body>
    </div>
  );
}
